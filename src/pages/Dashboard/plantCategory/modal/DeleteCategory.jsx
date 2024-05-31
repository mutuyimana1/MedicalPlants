import { Button, Modal } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { api } from "../../../../utils/helpers";
import { errorHandler, toastMessage } from "../../../../utils/toast";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../../../redux/slices/category/categoryThunks";

const DeleteCategory = ({ isModalOpen, handleModal, id }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleOk = () => {
    api
      .delete(`/category/${id}`)
      .then((res) => {
        console.log("res", res);
        toastMessage("success", "Category deleted successfully");
        handleModal();
        dispatch(fetchCategory());
      })
      .catch((error) => errorHandler(error));
  };
  const handleCancel = () => {
    handleModal();
  };

  return (
    <Modal
      title={<h2 className="text-lg"> Confirm Delete This category</h2>}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <span className="">Are you sure to delete this category?</span>
    </Modal>
  );
};
export default DeleteCategory;
