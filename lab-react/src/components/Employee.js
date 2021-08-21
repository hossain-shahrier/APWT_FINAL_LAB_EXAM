import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployee] = useState({
    employee: [],
  });
  const handleClick = async (id) => {
    const res = await axios.post(
      `http://localhost:8000/api/employee/delete/${id}`,
      employees.employee
    );
    setEmployee({ employee: res.data.employees });
  };
  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8000/api/employees");
      console.log(res);
      setEmployee({
        employee: res.data.employees,
      });
    }
    data();
  }, []);

  var employee_table = employees.employee.map((employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.username}</td>
        <td>{employee.company}</td>
        <td>{employee.contact}</td>
        <td>
          <NavLink to={`/employee/edit/${employee.id}`}>Edit</NavLink>
        </td>
        <td>
          <button
            onClick={() => {
              handleClick(employee.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table className="table table-border table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{employee_table}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
