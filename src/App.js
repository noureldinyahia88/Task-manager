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
import MangeProjectPagePM from "./Pages/PM/MangeProjectPagePM";
import PMProjectPageSetting from "./components/PM/PMProjectPageSetting";
import ManageTaskEmplyee from "./Pages/Emplyee/ManageTaskEmplyee";

const USER_TYEPS = {
  Admin: "ROLE_GLOBAL_ADMIN",
  Manager: 'ROLE_PROJECT_MANAGER'
}

const CurrentUser = USER_TYEPS.Admin

function App() {
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

        <Route path="/manageProjectsPM" element={<MangeProjectPagePM />} />
      <Route path="/ProjectPageSetting" element={<PMProjectPageSetting />} />
      <Route path="/manageTaskEmplyee" element={<ManageTaskEmplyee />} />
      
      </Route>

      <Route index element={<LoginPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />

      

      {/* <Route path="/manageTaskEmplyee" element={<ManageTaskEmplyee />} /> */}
      <Route path="/*"element={<div>Page Not Found</div>}></Route>

    </Routes>
    </BrowserRouter>
    </QueryClientProvider>

  );
}



export default App

