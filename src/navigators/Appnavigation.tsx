import React from "react";
import Homeroute from "./Homeroute";
import Authroute from "./Authroute";
import UseMountMethods from "../utils/Usemountmethod";

function Appnavigation() {
  const { isAuthenticated } = UseMountMethods();
  console.log(isAuthenticated);

  return (
    <>
      {typeof isAuthenticated === "boolean" ? (
        isAuthenticated ? (
          <Homeroute />
        ) : (
          <Authroute />
        )
      ) : null}
    </>
  );
}

export default Appnavigation;
