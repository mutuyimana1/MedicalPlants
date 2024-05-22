import React from "react";
import PlantDetails from "../../components/PlantDetails";
import PlantTable from "../../components/Tables/PlantTable";
import DashboardLayout from "../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

const AllPlants = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between my-5">
          <h1 className="poppins-bold py-3">AllPlants</h1>
          <button
            className="text-white p-s2 px-4 bg-[#003F13] rounded-md text-xl"
            onClick={() => navigate("/dashboard/plant/add")}
          >
            Add product
          </button>
        </div>
        <PlantTable />
      </div>
    </DashboardLayout>
  );
};

export default AllPlants;
