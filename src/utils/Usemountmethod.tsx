import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appcontext";
import { getLocalUserData } from "../screens/Login/utils";

const UseMountMethods = () => {
  const [isAuthenticated, setAuthenticated] = useState<any>("");
  const { isLoggedIn, setIsLoggedIn }: any = useContext(AppContext);

  const checkIsAuthenticated = () => {
    const userData = getLocalUserData();
    console.log(userData);

    if (userData) {
      // check for the user session expires
      setIsLoggedIn(true);
      setAuthenticated(true);
    } else {
      console.log("No user data found");
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  // useEffect(() => {
  //   setAuthenticated(isLoggedIn);
  // }, [isLoggedIn]);

  return { isAuthenticated };
};

export default UseMountMethods;
