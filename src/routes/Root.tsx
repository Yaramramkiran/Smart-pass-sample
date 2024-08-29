import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "../screens/Login/Login";
import Dashboard from "../screens/Dashboard/Dashboard";
import Users from "../screens/Users/Users";
import Transaction from "../screens/Transaction/Transaction";

function Root() {
  const isLoggedIn = false;
  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       if (location.pathname === "/") {
  //         navigate("/home");
  //       }
  //     }
  //   }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default Root;
