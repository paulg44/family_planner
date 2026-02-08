import { useState, useEffect } from "react";
import { type Chore, getChores } from "../../services/chores.service";
import SharedTable from "../../shared/table/table";
import { Button, Form, Input, InputNumber, Select } from "antd";
import UserService from "../../services/user.service";
import type { IUserDao } from "../../core/dao/user.dao";

const Chores = () => {
  // Fetch the users by role to display in the dropdown for assigning chores. Use the signed in data to determine the assigned by field when creating a new chore. Use the status on completed, click to change status. Send notification to assignedBy
  const [chores, setChores] = useState<Chore[]>([]);
  const [users, setUsers] = useState<IUserDao[]>([]);
  const usersWithChildRole = users.filter((user) => user.role === "child");
  console.log("Users with child role:", usersWithChildRole);

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
        const fetchChores = await getChores();
        setChores(fetchChores);
      } catch (error) {
        console.error("Error fetching chores:", error);
      }
    };

    fetchChores();
  }, []);

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
        <Form.Item label="Chore Name" name="choreName">
          <Input />
        </Form.Item>
        <Form.Item label="Reward" name="reward">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Child?" name="assignedTo">
          <Select placeholder="Select a child">
            {usersWithChildRole.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name || user.email}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Add Chore</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Chores;
