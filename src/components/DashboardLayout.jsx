import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import "../pages/style.css"
import CreateProduct from '../pages/Dashboard/CreateProduct';
import ProductTable from './Tables/ProductTable';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
}



const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Initializing useNavigate
  const items = [
    getItem('Dashboard', '1',<PieChartOutlined />,null, () => {
      navigate("/test"); // Navigate to dashboard route
    }),
    getItem('Products', 'sub1', <UserOutlined />, [
      getItem('overView', '3',null,null,()=>{navigate("/dashboard/product/overview")}),
      getItem('AddProduct', '4', null, null, () => {
        navigate('/dashboard/product/add'); 
      }),
      getItem('Products', '5',null,null,()=>{navigate("/dashboard/products")}),
    ]),
    getItem('Users', 'sub2', <TeamOutlined />, [
      getItem('OverView', '6', null, null, () => {
        navigate('/dashboard/user/overview'); 
      }),
      getItem('All Users', '8', null, null, () => {
        navigate('/dashboard/users'); 
      }),
      getItem('Active Users', '9', null, null, () => {
        navigate('#');
      }),
    ]),
    getItem('Files', '10', <FileOutlined />),
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ height: "100vh" }}>
        <div className="demo-logo-vertical h-20 flex justify-center items-center">
          <h1 onClick={()=>navigate("/")} className='cursor-pointer'>Logo & Back Home</h1>
        </div>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items.map(item => {
          if (item.children) {
            return {
              ...item,
              children: item.children.map(child => ({
                ...child,
                onClick: child.onClick || null,
              })),
            };
          } else {
            return item;
          }
        })} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 className='text-center'>Header Content</h1>
        </Header>
        <Content style={{ margin: '4px 10px' }}>
          <div style={{ padding: 24, minHeight: "90vh", background: colorBgContainer }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
