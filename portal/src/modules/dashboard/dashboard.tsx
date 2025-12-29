import { useTestData } from "../../core/providers/test-firebase-fetch";

const Dashboard = () => {
  const { testData } = useTestData();
  console.log("Dashboard testData:", testData);

  return (
    <div>
      <h2>Dashboard Component</h2>
      {testData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
