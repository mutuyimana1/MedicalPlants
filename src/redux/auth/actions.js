import { authAction } from ".";
import { accountService, loginService } from "./services";
import { notification } from "antd";
export const createAccountAction = (data) => async (dispatch) => {
  dispatch(authAction.setIsFetching(true));
  try {
    const res = await accountService(data);
    console.log("data",res)
    if (res) {
      dispatch(authAction.setIsFetching(false));
      dispatch(authAction.setNew(res));
      console.log("res data",res)
      notification.success({message:"Successfully created"})
    }
  } catch (error) {
    console.log("errr", error);
    notification.warning({message:error?.AxiosError?.response?.statusText})
  }
};
export const loginAction = (data) => async (dispatch) => {
  dispatch(authAction.setIsFetching(true));
  try {
    const res = await loginService(data);
    if (res?.status === 200) {
      console.log("response", res);
      dispatch(authAction.setIsFetching(false));
      dispatch(authAction.login(res));
      notification.success({message:"Success"})
    }
  } catch (error) {
    console.log("errr", error);
    notification.warning({message:error})
  }
};
