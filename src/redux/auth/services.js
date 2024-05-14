import axios from "axios";

export const loginService=async(data)=>{
    try{
        const res=await axios.post("http://localhost:5000/api/user/register",data);
        return res

    }catch(err){
        console.log("error",err)
    }
}