import React, { useState } from "react";
import { deleteUser } from "../api/api";
import CardContainer from "../components/card";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteUser(id);
      setId("");
      alert("User Deleted successfully!");
    } catch (err) {
      alert("Error deleting user!");
    }
  };

  return (
    <>
      <CardContainer title={"DeleteUser"} onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
        />
        <div className="pt-[20px]">
          <button
            onClick={handleDelete}
            className="w-[150px] h-[50px] text-center rounded-[5px]  bg-[whitesmoke]"
          >
            Delete User
          </button>
        </div>
      </CardContainer>
    </>
  );
};

export default DeleteUser;
