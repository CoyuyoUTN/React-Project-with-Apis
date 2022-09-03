import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./users.css";

const TableHead = () => {
  const [users, setUsers] = useState([]);
  const URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const getUsersAxios = async () => {
    const getAxios = await axios.get(URL_USERS).catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
    console.log("getAxios", getAxios);
    setUsers(getAxios.data.results);
  };

  useEffect(() => {
    getUsersAxios();
  }, []);

  return (
    <div>
      <div className="pl">
        <h1 className="title_table">Table Users</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Company name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                  <td>{user.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="container_back_table">
          <Link to="/menu">
            <button className="container_back_btn_table" href="">
              <span>Back</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
