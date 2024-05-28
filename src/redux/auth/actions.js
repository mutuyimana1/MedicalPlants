import { authAction } from ".";
import { toastMessage } from "../../utils/toast";
import { accountService, loginService } from "./services";
import { notification } from "antd";
export const createAccountAction = (data) => async (dispatch) => {
  dispatch(authAction.setIsFetching(true));
  try {
    const res = await accountService(data);

    if (res) {
      dispatch(authAction.setIsFetching(false));
      dispatch(authAction.setNew(res));
      notification.success({ message: "Successfully created" });
    }
  } catch (error) {
    dispatch(authAction.setIsFetching(false));
    console.log("errr", error);
    notification.warning({ message: error?.AxiosError?.response?.statusText });
    notification.warning({ message: error?.AxiosError?.response?.statusText });
  }
};
export const loginAction = (data) => async (dispatch) => {
  dispatch(authAction.setIsFetching(true));
  try {
    const res = await loginService(data);
    console.log("res?.status", res);
    if (res?.status === 200) {
      dispatch(authAction.setIsFetching(false));
      dispatch(authAction.login(res));
      toastMessage("success", "User logged in successfully");
    }
  } catch (error) {
    console.log("errr", error);
    dispatch(authAction.setIsFetching(false));
    notification.warning({ message: error });
  }
};
