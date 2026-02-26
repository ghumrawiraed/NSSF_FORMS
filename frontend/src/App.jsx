import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import "./App.css";
import Login from "./pages/login";
import Layout from "./components/layout/layout";
import EmployeeForm from "./pages/employee/addEmployee";
import EmployeeList from "./pages/employee/employeeList";
import EditEmployeeForm from "./pages/employee/updateEmployee";
import WifeCertificateForm from "./pages/wifeCertificate/addWifeCertificate";
import EditEstablishmentForm from "./pages/establishment/establishment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/employee/list" element={<EmployeeList />}></Route>
          <Route path="/employee/add" element={<EmployeeForm />}></Route>
          <Route path="/employee/:id" element={<EditEmployeeForm />}></Route>
          
          <Route path="/establishment" element={<EditEstablishmentForm/>}></Route>

          <Route path="/wife-certificate/add" element={<WifeCertificateForm/>}></Route>

        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
