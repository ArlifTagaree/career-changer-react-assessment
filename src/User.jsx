import Layout from "./Layout";

const User = ({ employees, setSector }) => {
  return (
    <Layout>
      <h1>Generation Thailand Home - User Sector</h1>
      <button onClick={() => setSector("user")}>User Home Sector</button>
      <button onClick={() => setSector("admin")}>Admin Home Sector</button>
      <table>
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
