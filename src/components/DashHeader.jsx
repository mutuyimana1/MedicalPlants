import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const DashHeader = () => {
    const navigate=useNavigate();
  const items = [
    {
      label: (
        <div className="flex gap-3 mr-5 py-3" onClick={()=>navigate("/")}>
          <IoMdLogOut size={20} color="red" />
          <p>Logout</p>
        </div>
      ),
      key: "0"
    }
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-medium pt-3 pl-10">Medicinal Plants</h1>
        <div className="mr-10">
          <Space size={24} className="mr-10 ">
            <Badge count={1}>
              <Avatar shape="circle" icon={<BsCart />} />
            </Badge>
            <Badge count={1}>
              <Avatar
                shape="circle"
                icon={<IoMdNotificationsOutline size={22} />}
              />
            </Badge>
          </Space>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <FaRegUserCircle size={25} />
                <p>Aliane Marie</p>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
