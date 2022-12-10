import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6001/user")
      .then(async (res) => {
        const data =await res.data;
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavLink exact to="/add">
        <center>
          <button type="button" className="btn btn-dark my-3">
            Add User
          </button>
        </center>
      </NavLink>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Update Data</th>
            <th scope="col">Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {
          user.map((row,key) => {
            return (
              <tr>
                <th scope="row">{key+1}</th>
                <td>{row.fullName}</td>
                <td>{row.emailId}</td>
                <td>{row.mobileNo}</td>
                <td>
                  <NavLink exact to={`/edit/${row._id}`}>
                    <button type="button" className="btn btn-primary">Update</button>
                  </NavLink>
                </td>
                <td>
                  <NavLink exact to={`/delete/${row._id}`}>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
