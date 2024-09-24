import React from "react";
import { styled } from "@mui/system";
import { Button, Input, Typography } from "@mui/joy";
import { useMutation, UseMutationResult } from "react-query";
import { login } from "./api";
import { userInterface } from "../../schemas/user";
import { setToken } from "./utils";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const useLogin = (): UseMutationResult<any, Error, userInterface> => {
    return useMutation({
      mutationFn: login,
    });
  };

  const Loginmutation = useLogin();

  const Login = () => {
    if (!username || !password) {
      return alert("Please enter username and password");
    }

    Loginmutation.mutate(
      { username, password },
      {
        onSuccess: (data) => {
          if (data && data.data) {
            // showToastWithGravityAndOffset("Logged In!");
            let obj = {
              submembers: data.data.submembers,
            };
            console.log(obj);
            setToken(data.data.token);
          } else {
            console.warn("Unexpected response format or empty data.");
            // setError("Login failed: " + "Login failed: Unexpected response.");
            // showErrorToast("Login failed: Unexpected response.");
          }
        },
      }
    );
  };

  return (
    <StyledComponents.Container>
      <StyledComponents.Box>
        <StyledComponents.logincontainer>
          <Typography>Login</Typography>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button onClick={Login} variant="solid" size="lg">
            Login
          </Button>
        </StyledComponents.logincontainer>

        <StyledComponents.loginintrocontainer>
          <Typography>HL Mando!!!</Typography>
          <Typography>Smart vPass</Typography>
        </StyledComponents.loginintrocontainer>
      </StyledComponents.Box>
    </StyledComponents.Container>
  );
}

export default Login;

const StyledComponents = {
  Container: styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  }),
  Box: styled("div")({
    // padding: "20px",
    // borderRadius: "8px",
    // backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",

    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  }),
  logincontainer: styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    gap: "20px",
    height: "500px",

    "& .MuiTypography-root": {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    "& .MuiInput-root": {
      width: "333px",
      padding: "10px",
      fontSize: "16px",
    },
    "& .MuiButton-root": {
      color: "#fff",
      background: "linear-gradient(to right, #b913d2, #1737db)", // Black to grey gradient
      borderRadius: "50px",
      width: "150px",
    },
  }),

  loginintrocontainer: styled("div")({
    width: "333px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #b913d2, #1737db)", // Black to grey gradient
    gap: "20px",
    padding: "30px",

    "& .MuiTypography-root": {
      color: "#fff",
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    "& .MuiTypography-root:last-child": {
      fontSize: "20px",
      fontWeight: "normal",
    },
  }),
};
