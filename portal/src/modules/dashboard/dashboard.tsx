import { useEffect, useState } from "react";
import { getChores, type Chore } from "../../services/chores.service";
import SharedTable from "../../shared/table/table";

const Dashboard = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  console.log("Chores in Dashboard:", chores);

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
    <div>
      <h2>Dashboard Component</h2>

      <SharedTable columns={columns} dataSource={chores} />
    </div>
  );
};

export default Dashboard;
