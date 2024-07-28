import Table from "react-bootstrap/Table";

function UserTable({ user, setUser }) {
    const handleDelete = (id) =>{
        setUser(user.filter(users => users.id !== id))
    }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Title</th>
            <th>City</th>
            <th>Country</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (<tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.companyName}</td>
              <td>{users.contactTitle}</td>
              <td>{users.city}</td>
              <td>{users.country}</td>
              <td>
                <button className='bg-danger' onClick={() => handleDelete(users.id)}>
                    x
                </button>
              </td>
            </tr>))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
