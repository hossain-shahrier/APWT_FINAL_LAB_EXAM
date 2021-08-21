import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Employee}></Route>
          <Route path="/employee/create" component={AddEmployee}></Route>
          <Route path="/employee/edit/:id" component={EditEmployee}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
