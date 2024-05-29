import ProductTable from "../../../components/Tables/CategoryTable";
import DashboardLayout from "../../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

const AllPlants = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between my-5 ">
          <h1 className="poppins text-xl font-semibold">All Plants</h1>
          <button
            className="text-white px-4 py-2 bg-[#003F13] rounded-md text-lg"
            onClick={() => navigate("/dashboard/plant/add")}
          >
            Add Plant
          </button>
        </div>
        <ProductTable />
      </div>
    </DashboardLayout>
  );
};

export default AllPlants;
