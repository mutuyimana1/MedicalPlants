import React from 'react';
import { Divider, Table } from 'antd';
import DashboardLayout from '../../../components/DashboardLayout';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'first',
  },
  {
    title: 'Last Name',
    dataIndex: 'last',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
];
const data = [
  {
    key: '1',
    first: 'John Brown',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  {
    key: '2',
    first: 'Brown',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  {
    key: '3',
    first: 'Alle',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  
];
const AllUsers = () => (
  <>
  <DashboardLayout>
    <Table columns={columns} dataSource={data} size="middle" />
    </DashboardLayout>
  </>
);
export default AllUsers;