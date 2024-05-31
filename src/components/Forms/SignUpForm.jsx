import { Button, Form, Input } from "antd";
import { useState } from "react";
import sigunImage from "../../assets/images/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { createAccountAction} from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const SignUpForm = () => {
  const {auth}=useSelector((state)=>state)
  const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch=useDispatch();
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
      };
    const [showResetPassword, setShowResetPassword] = useState(false);
    const handleResetPasswordToggle = () => {
        setShowResetPassword(!showResetPassword);
      };

  const onSubmit = async (values) => {
    console.log("values", values);
    // await createAccountAction({...values})(dispatch)
    form.resetFields();
  };
const navigate=useNavigate();
  return (
    <>
{/* <Form.Item name="password" label=<h1 className="text-base pt-2 ">Password</h1> className="relative">
          <Input.Password 
            placeholder="Enter Password"
            className="rounded-lg h-12"
            type={showPassword ? "text" : "password"}
          />
          <button
          className="absolute top-1 right-0 p-2 rounded-lg text-sm"
          onClick={handlePasswordToggle}
        >
          {showPassword ? <BiSolidHide size={20} color="#025222"/> : <BiShow size={20} color="#025222"/>}
        </button>
        </Form.Item> */}

      <div className="w-full md:flex mt-[5%] gap-10 justify-center items-center">
        <div className="w-full md:w-2/5  mtd-10 border border-[#025222] rounded-md  md:p-5 ">
          <img src={sigunImage} className="w-full h-full m-10 md:m-0"/>
        </div>
        <Form className="w-full md:w-2/6 p-5 md:p-0" layout="vertical" form={form} onFinish={onSubmit}>
            <h1 className="text-center text-lg font-medium text-[#030229]">Sign Up </h1>
          <div className="flex w-full mt-6">
            
            <div className="w-1/2 mr-2">
              <Form.Item name="firstname" label=<h1 className="text-base">First Name</h1> >
                <Input
                  placeholder="Enter first name"
                  className="rounded-lg h-12"
                />
              </Form.Item>
            </div>
            <div className="w-1/2 ml-2">
              <Form.Item name="lastname" label=<h1 className="text-base">Last Name</h1> >
                <Input
                  placeholder="Enter Last name"
                  className="rounded-lg h-12"
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item name="email" label=<h1 className="text-base">Email</h1> >
            <Input placeholder="Enter email" className="rounded-lg h-12" />
          </Form.Item>
         
          <Form.Item name="phone" label=<h1 className="text-base">Phone Number</h1> >
            <Input
              placeholder="Enter phone number"
              className="rounded-lg h-12"
            />
          </Form.Item>
          
          <div className="flex w-full mt-2">
            <div className="w-1/2 mr-2">
            <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password className="rounded-lg h-12" />
    </Form.Item>
            </div>
            <div className="w-1/2 ml-2">
              <Form.Item label=<h1 className="text-base pt-2">Confirm Password</h1> name={"confirm"} className="relative">
                <Input
                  placeholder="re-inter password"
                  type={showResetPassword ? "text" : "password"}
                  className="rounded-lg h-12"
                />
                 <button
                className="absolute top-1 right-0 p-2 rounded-lg text-sm"
                onClick={handleResetPasswordToggle}
              >
                {showResetPassword ? <BiSolidHide size={20} color="#025222"/> : <BiShow size={20} color="#025222"/>}
              </button>
              </Form.Item>
            </div>
          </div>
          
          <Button
           htmlType="submit"
            className="mt-7 w-full bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed    "
            // disabled={isPending}
            // onClick={()=>navigate("/dash")}
          >
            {" "}
            {auth?.isFetching ? <Spin indicator={<LoadingOutlined spin color="white"/>} className="text-white"/>:  "Sign Up"}
          </Button>
          <div className="flex gap-5 float-right mt-5"><p>Orleady have an Account?</p> <Button onClick={()=>navigate("/login")}
          className=" w-42 bg-[#025222] text-white disabled:opacity-50 disabled:cursor-not-allowed    "
          // disabled={isPending}
        >
         Login
        </Button></div>
        </Form>
      </div>
    </>
  );
};

export default SignUpForm;
