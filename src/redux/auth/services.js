import axios from "axios";

export const accountService = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/register",
      data
    );
    return res;
  } catch (err) {
    console.log("error", err);
  }
};
export const loginService = async (data) => {
  try {
    const res = await axios.post("http://localhost:5000/api/user/login", data);
    console.log("RREEESSS", res);
    return res;
  } catch (err) {
    console.log("error", err);
  }
};
