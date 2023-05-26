import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username: formvalue.username, email: formvalue.email };
    const res = await axios.post( 
      "http://localhost/ReactPhpDb/api/user.php",
      formData
    );
    if (res.data.success) {
      setMessage(res.data.success);
      setTimeout(() => {
        navigate("/userlist");
      }, 1400);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5 className="mb-4">Adduser </h5>
            <p className="text-sucess"> {message}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2">Username</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="username"
                    value={formvalue.username}
                    className="form-control"
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="email"
                    value={formvalue.email}
                    className="form-control"
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                  <button name="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Adduser;
