import axios from "axios";
import { useState,  useEffect} from "react";
import Table from "react-bootstrap/Table";

function UserTable({ user, setUser }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api/customers";

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}`);
      console.log(response.data);
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      
      await axios.delete(`${BASE_URL}/${id}`);
      
      
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
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
          {customers.length > 0 &&
              customers.map((q) => {
                return (
                  <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.companyName}</td>
                    <td>{q.contactTitle}</td>
                    <td>{q.address.city}</td>
                    <td>{q.address.country}</td>
                    <td>
                      <button onClick={() => handleDelete(q.id)}>DELETE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserTable;

