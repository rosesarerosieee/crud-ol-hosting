import React, { useState } from "react";
import { updateUser } from "../api/api";
import CardContainer from "./card";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, { name, email, age });
      alert("Updated Successfully!");
      setId("");
      setName("");
      setEmail("");
      setAge("");
    } catch (err) {
      alert("Error Updating data");
    }
  };

  const handleEmpty = () => {
    setId("");
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <>
      <CardContainer title={"Update User"} onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
          />
          <button
            className="w-[50px] h-[30px] text-center rounded-[5px]  bg-[whitesmoke]"
            onClick={handleEmpty}
          >
            Reset
          </button>
        </div>
        <div className="pt-[30px] flex justify-between gap-[20px] ">
          <button
            type="submit"
            className="w-[100px] h-[50px] text-center rounded-[5px]  bg-[whitesmoke]"
          >
            Update User
          </button>
        </div>
      </CardContainer>
    </>
  );
};

export default UpdateUser;
