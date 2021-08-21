import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  let { id } = useParams();

  useEffect(() => {
    async function data() {
      const res = await axios.get(
        `http://localhost:8000/api/employee/edit/${id}`
      );
      setEmployee({
        name: res.data.employee.name,
        username: res.data.employee.username,
        company: res.data.employee.company,
        contact: res.data.employee.contact,
      });
    }
    data();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/employee/edit/${id}`, employee);
    setEmployee({
      name: "",
      username: "",
      company: "",
      contact: "",
    });
  };
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  return (
    <div className="card-body">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div>
          <label>Student name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
        <div>
          <label>Employee username</label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
        <div>
          <label>Employee company</label>
          <input
            type="text"
            name="company"
            value={employee.company}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
        <div>
          <label>Employee contact</label>
          <input
            type="number"
            name="contact"
            value={employee.contact}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
        <div>
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
