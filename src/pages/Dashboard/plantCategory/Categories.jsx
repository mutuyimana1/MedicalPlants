import DashboardLayout from "../../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

import CategoryTable from "../../../components/Tables/CategoryTable";
import { useState } from "react";

const AllCategories = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between my-5 ">
          <h1 className="poppins text-xl font-semibold">All Categories</h1>
          <button
            className="text-white px-4 py-2 bg-[#003F13] rounded-md text-lg"
            onClick={() => navigate("/dashboard/category/add")}
          >
            Add Category
          </button>
        </div>
        <CategoryTable />
      </div>
    </DashboardLayout>
  );
};

export default AllCategories;
