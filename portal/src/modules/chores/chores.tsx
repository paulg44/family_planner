import { useState, useEffect } from "react";
import ChoresService from "../../services/chores.service";
import SharedTable from "../../shared/table/table";
import { Button, Form, Input, InputNumber, Select } from "antd";
import UserService from "../../services/user.service";
import type { IUserDao } from "../../core/dao/user.dao";
import type { Chore } from "../../core/dao/chore.dao";

const Chores = () => {
  // Fetch the users by role to display in the dropdown for assigning chores. Use the signed in data to determine the assigned by field when creating a new chore. Use the status on completed, click to change status. Send notification to assignedBy
  const [chores, setChores] = useState<Chore[]>([]);
  const [users, setUsers] = useState<IUserDao[]>([]);
  const usersWithChildRole = users.filter((user) => user.role === "child");
  console.log("Users with child role:", usersWithChildRole);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [choreName, setChoreName] = useState<string>("");
  const [reward, setReward] = useState<number>(0);
  console.log("Params:", selectedUser, choreName, reward);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchUsers = await UserService.allUsers();
        setUsers(fetchUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchChores = async () => {
      try {
        const fetchChores = await ChoresService.getChores();
        setChores(fetchChores);
      } catch (error) {
        console.error("Error fetching chores:", error);
      }
    };

    fetchChores();
  }, []);

  const submit = async (choreData: Chore) => {
    const payload = {
      uid: uuidv4(),
      assignedTo: selectedUser,
      reward,
      name: choreName,
    };
    try {
      const newChoreId = await ChoresService.addChore(choreData);
      const newChore = { ...choreData, uid: newChoreId };
      setChores((prevChores) => [...prevChores, newChore]);
    } catch (error) {
      console.error("Error adding chore:", error);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Rewards", dataIndex: "reward", key: "reward" },
    { title: "Assigned To", dataIndex: "assignedTo", key: "assignedTo" },
    { title: "Completed", dataIndex: "complete", key: "complete" },
    { title: "Assignee", dataIndex: "assignedBy", key: "assignedBy" },
  ];

  return (
    <div className="p-4 flex flex-col ">
      <h2>Chores Component</h2>
      <SharedTable columns={columns} dataSource={chores} />
      <Form name="add-chore" layout="vertical" className="mt-4 w-1/2">
        <Form.Item label="Chore Name" name="choreName" required>
          <Input onChange={(e) => setChoreName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Reward" name="reward" required>
          <InputNumber
            onChange={(value) =>
              setReward(typeof value === "number" ? value : 0)
            }
          />
        </Form.Item>
        <Form.Item label="Child?" name="assignedTo">
          <Select
            placeholder="Select a child"
            onChange={(value) => setSelectedUser(value)}
          >
            {usersWithChildRole.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onSubmit={() => submit}>
            Add Chore
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Chores;
