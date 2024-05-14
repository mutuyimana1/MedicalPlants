import axios from "axios";

export const loginService=async(data)=>{
    try{
        const res=await axios.post("",data);
        return res

    }catch(err){
        console.log("error",err)
    }
}