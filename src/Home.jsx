import Layout from "./Layout";
import { useState, useEffect } from "react";
import User from "./User";
import Admin from "./Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState("start");

  useEffect(() => {}, [sector]);

  if (sector === "user") {
    return (
      <>
        <User employees={employees} setSector={setSector} />
      </>
    );
  } else if (sector === "admin") {
    return (
      <>
        <Admin employees={employees} setSector={setSector} setEmployees={setEmployees}/>
      </>
    );
  } else {
    return (
      <Layout>
        <h1>Generation Thailand React - Assessment</h1>
        <button onClick={() => setSector("user")}>User Home Sector</button>
        <button onClick={() => setSector("admin")}>Admin Home Sector</button>
      </Layout>
    );
  }
};

export default Home;
