import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "./authService";

const API_URL = `${BACKEND_URL}/api/employee`;

//----------------------------------------------------
//  A D D    N E W   E M P L O Y E E
//----------------------------------------------------
export const registerEmp = async (empData) => {
  try {
    console.log(empData);
    const response = await axios.post(
      `${API_URL}/new`,

      empData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    if (response.status === 200) {
      toast.success("Emp Created Successfully");
    }

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || error.toString();

    toast.error(message);
  }
};

//----------------------------------------------------
//    G E T  A L L   E M P L O Y E E S
//----------------------------------------------------
const getEmps = async () => {
  const reponse = await axios.get(API_URL);
  console.log("sERVICE RUNNING");
  return reponse.data;
};

//----------------------------------------------------
//    G E T  S I N G L E   E M P L O Y E E
//----------------------------------------------------
export const getEmp = async (id) => {
  const reponse = await axios.get(API_URL + "/" + id);
  return reponse.data;
};

//----------------------------------------------------
//    D E L E T E    E M P L O Y E E
//----------------------------------------------------
const deleteEmp = async (id) => {
  console.log("id:", id )
  const reponse = await axios.delete(API_URL + "/" + id);
  return reponse.data;
};

//----------------------------------------------------
//    U P D A T E   E M P L O Y E E
//----------------------------------------------------

export const updateEmp = async (id, empData) => {
  try {
    console.log("UPDATE SERVICE RUNNING")
     console.log("empData:", empData)
 
    const response = await axios.patch(`${API_URL}/${id}`, empData,      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
);

    if (response.statusText === "OK") {
      toast.success("emp Updated Successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

const empService = {
  registerEmp,
  getEmps,
  getEmp,
  deleteEmp,
  updateEmp,
};

export default empService;
