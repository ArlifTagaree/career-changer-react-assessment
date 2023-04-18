import Layout from "./Layout";

const User = ({ employees, setSector }) => {
  return (
    <Layout>
      <h1>Generation Thailand Home - User Sector</h1>
      <button className="btn btn-outline-light" onClick={() => setSector("user")}>User Home Sector</button>
      <button className="btn btn-outline-light ms-1" onClick={() => setSector("admin")}>Admin Home Sector</button>
      <table className="table table-dark table-striped" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default User;
