import Layout from "./Layout";
import { useState } from "react";

const Admin = ({ employees, setSector, setEmployees }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleName = (event) => {
    const createName = event.target.value;
    setName(createName);
  };

  const handleLastname = (event) => {
    const createLastname = event.target.value;
    setLastname(createLastname);
  };

  const handlePosition = (event) => {
    const createPosition = event.target.value;
    setPosition(createPosition);
  };

  const addData = () => {

    let idNumber = 0;
    if (employees.length > 0) {
      idNumber = employees[employees.length - 1].id + 1;
    }

    const newData = {
      id: idNumber,
      name: name,
      lastname: lastname,
      position: position,
    };
    setEmployees([...employees, newData]);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <Layout>
      <h1>Generation Thailand Home - Admin Sector</h1>
      <button className="btn btn-outline-light ms-1" onClick={() => setSector("user")}>User Home Sector</button>
      <button className="btn btn-outline-light ms-1" onClick={() => setSector("admin")}>Admin Home Sector</button>
      <br />
      <h2>Create User Here</h2>
      <input
        className="form-control mt-2"
        onChange={handleName}
        value={name}
        type="text"
        placeholder="Name"
      />
      <input
        className="form-control mt-2"
        onChange={handleLastname}
        value={lastname}
        type="text"
        placeholder="Last Name"
      />
      <input
        className="form-control mt-2 mb-2"
        onChange={handlePosition}
        value={position}
        type="text"
        placeholder="Position"
      />
      <button className="btn btn-success rounded-pill px-3" onClick={addData}>Save</button>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td>
                  <button className="btn btn-danger rounded-pill px-3" onClick={() => handleDelete(item.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};
export default Admin;
