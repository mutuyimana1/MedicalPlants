import { authAction } from ".";
import { loginService } from "./services";

export const loginAction=(data)=>async(dispatch)=>{
    dispatch(authAction.setIsFetching(true));
    try {
        const res=await loginService(data);
        if(res.status===200){
            dispatch(authAction.setIsFetching(false))
            dispatch(authAction.login(res.data));
        }
    } catch (error) {
        console.log("errr",error)
    }
}