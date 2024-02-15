import {BrowserRouter, Routes, Route} from "react-router-dom";
import ManageProjects from "./Pages/Admin/ManageProjects";
import ManageAdmins from "./Pages/Admin/ManageAdmins";
import ManageEmployees from "./Pages/Admin/ManageEmployees";
import ManagePMs from "./Pages/Admin/ManagePMs";
import MyAccountAdmin from "./Pages/Admin/MyAccountAdmin";
import LoginPage from "./Pages/LoginPage";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./components/Uitily/http/http";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import PrivetRoutes from "./Pages/PrivetRoutes";


const AdminsRouts = () => {
    
    return (
        <QueryClientProvider client={queryClient}>    
        <BrowserRouter>
        <Routes>
        <Route element={<PrivetRoutes />}>
            <Route path="/ManageProjects" element={<ManageProjects />} />
            <Route path="/manageAdmin" element={<ManageAdmins />} />
            <Route path="/manageEmployees" element={<ManageEmployees />} />
            <Route path="/managePMS" element={<ManagePMs />} />
            <Route path="/myAccountAdmin" element={<MyAccountAdmin />} />
        </Route>

        <Route index element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />

        </Routes>
        </BrowserRouter>
        </QueryClientProvider>
)
}

export default AdminsRouts