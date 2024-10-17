import { Routes, Route } from "react-router-dom";
import CreateUser from "./components/create";
import ReadUsers from "./components/read";
import UpdateUser from "./components/update";
import DeleteUser from "./components/delete";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateUser />} />
      <Route path="read" element={<ReadUsers />} />
      <Route path="update" element={<UpdateUser />} />
      <Route path="delete" element={<DeleteUser />} />
    </Routes>
  );
};

export default AppRouter;
