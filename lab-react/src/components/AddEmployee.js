import { useState } from "react";
import axios from "axios";
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    username: "",
    contact: "",
    company: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/employee/create", employee);
    setEmployee({
      name: "",
      username: "",
      contact: "",
      company: "",
    });
  };
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="Enter employee name"
          name="name"
          value={employee.name}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <input
          placeholder="Enter employee user name"
          name="username"
          value={employee.username}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <input
          placeholder="Enter contact number"
          name="contact"
          value={employee.contact}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <input
          placeholder="Enter company name"
          name="company"
          value={employee.company}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AddEmployee;
