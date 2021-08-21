import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <NavLink to="/employee/create">Create Employee</NavLink>|
        <NavLink to="/">Employee List</NavLink>|
        <NavLink to="/employee/logout">Logout</NavLink>
      </header>
    </div>
  );
};

export default Navbar;
