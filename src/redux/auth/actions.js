import { authAction } from ".";
import { loginService } from "./services";

export const loginAction=(data)=>async(dispatch)=>{
    dispatch(authAction.setIsFetching(true));
    try {
        const res=await loginService(data);
        if(res){
            dispatch(authAction.setIsFetching(false))
            dispatch(authAction.login(res));
        }
    } catch (error) {
        console.log("errr",error)
    }
}