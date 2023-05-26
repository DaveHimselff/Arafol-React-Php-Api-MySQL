import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Userlist() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const reqData = await fetch("http://localhost/ReactPhpDb/api/user.php");
    const resData = await reqData.json();
    setUserData(resData);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete("http://localhost/ReactPhpDb/api/user.php/" + id);
    setMessage(res.data.success);
    getUserData();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h5 className="mb-4">User List</h5>
            <p className="text-danger">{message}</p>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{uData.username}</td>
                    <td>{uData.email}</td>
                    <td>
                      <Link to={"/edituser/" + uData.id} className="btn btn-success mx-2">
                        Edit
                      </Link>
                      <button className="btn btn-danger" onClick={() => handleDelete(uData.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Userlist;
