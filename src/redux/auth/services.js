import axios from "axios";
import { BACKEND_URL } from "../../utils/constant";

export const accountService = async (data) => {
  try {
    const res = await axios.post(BACKEND_URL + "/user/register", data);
    return res;
  } catch (err) {
    console.log("error", err);
  }
};
export const loginService = async (data) => {
  try {
    const res = await axios.post(BACKEND_URL + "/user/login", data);
    return res;
  } catch (err) {
    console.log("error", err);
  }
};
