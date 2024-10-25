import { Routes, Route } from "react-router-dom";
import CreateUser from "./pages/create";
import ReadUsers from "./pages/read";
import UpdateUser from "./pages/update";
import DeleteUser from "./pages/delete";

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
