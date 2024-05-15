import { Button, Form, Input } from "antd";
import { useState } from "react";
import loginImage from "../../assets/images/undraw_secure_login_pdn4.svg";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const LoginForm = () => {
  const {auth}=useSelector((state)=>state)
  const dispatch=useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
      };
   
  const onSubmit = async (values) => {
    console.log("values", values);
   await loginAction({...values})(dispatch)
   navigate("/dash")
  };
const navigate=useNavigate();
  return (
    <>
      <div className="w-full md:flex mt-[5%] gap-10 justify-center items-center">
        <div className="w-full md:w-2/5  mt-10 border border-[#025222] rounded-md p-5">
          <img src={loginImage} className="w-full h-full"/>
        </div>
        <Form className="w-full md:w-2/6" layout="vertical" onFinish={onSubmit}>
            <h1 className="text-center text-lg font-medium text-[#030229] py-2">Login </h1>
         
              <Form.Item label=<h1 className="text-base">Email</h1> name={"email"}>
                <Input
                  placeholder="Email"
                  className="rounded-lg h-12"
                />
              </Form.Item>
           
              <Form.Item label=<h1 className="text-base pt-2 ">Password</h1> name="password" className="relative">
                <Input.Password
                  placeholder="Enter Password"
                  className="rounded-lg h-12"
                  type={showPassword ? "text" : "password"}
                />
                {/* <button
                className="absolute top-1 right-0 p-2 rounded-lg text-sm"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <BiSolidHide size={20} color="#025222"/> : <BiShow size={20} color="#025222"/>}
              </button> */}
              </Form.Item>
         
         
     
          <Button
            htmlType="submit"
            className="mt-7 w-full bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed    "
            // disabled={isPending}
            // onClick={()=>navigate("/dash")}
          >
            {" "}
         {auth?.isFetching ? <Spin indicator={<LoadingOutlined spin color="white"/>} className="text-white"/>: "Login"}
          </Button>
          
          <div className="flex gap-5 float-right mt-5"><p>not have an Account?</p> <Button onClick={()=>navigate("/signup")}
          type="submit"
          className=" w-42 bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed    "
          // disabled={isPending}
        >
         Signup
        </Button></div>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
