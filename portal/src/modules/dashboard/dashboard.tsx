import { useTestData } from "../../core/providers/test-firebase-fetch";
import ChoresService from "../../services/chores.service";
import SharedTable from "../../shared/table/table";

const Dashboard = () => {
  const { testData } = useTestData();
  console.log("Dashboard testData:", testData);

  const testDataSource = [
    {
      key: "1",
      name: "Sample Item",
      rewards: 10,
      assignedTo: "user one",
      completed: false,
      assignee: "adult one",
    },
    {
      key: "2",
      name: "Another Item",
      rewards: 20,
      assignedTo: "user two",
      completed: true,
      assignee: "adult two",
    },
  ];

  const testColumns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Rewards", dataIndex: "rewards", key: "rewards" },
    { title: "Assigned To", dataIndex: "assignedTo", key: "assignedTo" },
    { title: "Completed", dataIndex: "completed", key: "completed" },
    { title: "Assignee", dataIndex: "assignee", key: "assignee" },
  ];

  const choresData = ChoresService.getChores();
  console.log("Dashboard choresData:", choresData);

  return (
    <div>
      <h2>Dashboard Component</h2>
      {testData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
        </div>
      ))}

      <SharedTable columns={testColumns} dataSource={testDataSource} />
    </div>
  );
};

export default Dashboard;
