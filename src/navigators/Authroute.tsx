import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/Login/Login";

function Authroute() {
  return (
    <Router>
      <Routes>
        {/* Use <Login /> to pass a React element */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Authroute;
