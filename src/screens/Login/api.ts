import { userInterface } from "../../schemas/user";
import { instance } from "../../services/instance";

const login = async (userData: userInterface) => {
  const response = await instance.post("auth/login", { json: userData }).json();
  return response;
};
export { login };
