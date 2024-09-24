import { Token } from "@mui/icons-material";

export const getLocalUserData = () => {
  if (localStorage.getItem("userData")) {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");
    return data;
  }

  return "";
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};
