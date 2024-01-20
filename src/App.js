import {BrowserRouter, Routes, Route} from "react-router-dom";
import ManageProjects from "./Pages/Admin/ManageProjects";
import ManageAdmins from "./Pages/Admin/ManageAdmins";
import ManageEmployees from "./Pages/Admin/ManageEmployees";
import ManagePMs from "./Pages/Admin/ManagePMs";
import MyAccountAdmin from "./Pages/Admin/MyAccountAdmin";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ManageProjects />} />
      <Route path="/manageAdmin" element={<ManageAdmins />} />
      <Route path="/manageEmployees" element={<ManageEmployees />} />
      <Route path="/managePMS" element={<ManagePMs />} />
      <Route path="/myAccountAdmin" element={<MyAccountAdmin />} />
      <Route path="/LoginPage" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
