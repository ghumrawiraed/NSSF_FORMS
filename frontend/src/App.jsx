import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import "./App.css";
import Login from "./pages/login";
import Layout from "./components/layout/layout";
import EmployeeForm from "./pages/employee";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path = "/" element={<Layout />}>
           <Route path="/login" element={<Login />}></Route>
           <Route path="/employee" element={<EmployeeForm />}></Route>
        </Route>
      </Routes>
    
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
