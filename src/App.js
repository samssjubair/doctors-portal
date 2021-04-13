import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./Components/Dashboard/AllPatients/AllPatients";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'


export const UserContext= createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard/appointments">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
