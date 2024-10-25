import React, { useState } from "react";
import CardContainer from "../components/card";

import { createUser } from "../api/api";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ name, email, age });
      alert("User created successfully!");
      setName("");
      setEmail("");
      setAge("");
    } catch (err) {
      alert("Error creating user");
    }
  };

  return (
    <CardContainer title={"Create User"} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="xl:w-[300px] xl:h-[50px] xl:text-center"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="xl:w-[300px] xl:h-[50px] xl:text-center"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="xl:w-[300px] xl:h-[50px] xl:text-center"
        />
      </div>
      <div className="pt-[20px]">
        <button
          type="submit"
          className="w-[150px] h-[50px] text-center rounded-[5px] bg-[whitesmoke]"
        >
          Create User
        </button>
      </div>
    </CardContainer>
  );
};

export default CreateUser;
