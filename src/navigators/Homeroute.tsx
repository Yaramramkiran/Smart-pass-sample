import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import Layout from "../components/Layout";
import Transaction from "../screens/Transaction/Transaction";
import Users from "../screens/Users/Users";

function Authroute() {
  return (
    <Router>
      <Routes>
        {/* Wrap the Dashboard route with the Layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/transaction"
          element={
            <Layout>
              <Transaction />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default Authroute;
