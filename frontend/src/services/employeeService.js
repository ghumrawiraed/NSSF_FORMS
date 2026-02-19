import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "./authService";

const API_URL = `${BACKEND_URL}/api/employee`;

//----------------------------------------------------
//  A D D    N E W   T R I P
//----------------------------------------------------
export const registerEmp = async (empData) => {
  try {
    console.log(empData)
    const response = await axios.post(`${API_URL}/new`,
      
      empData,
       {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      toast.success("Emp Created Successfully");
    }

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};


//----------------------------------------------------
//    G E T  A L L   T R I P S
//----------------------------------------------------
const getemps = async () => {
  const reponse = await axios.get(API_URL);
  return reponse.data;
};

//----------------------------------------------------
//    G E T  S I N G L E   T R I P
//----------------------------------------------------
export const getemp = async (id) => {
  const reponse = await axios.get(API_URL + "/" + id);
  return reponse.data;
};

//----------------------------------------------------
//    D E L E T E    T R I P
//----------------------------------------------------
const deleteemp = async (id) => {
  const reponse = await axios.delete(API_URL + "/" + id);
  return reponse.data;
};

//----------------------------------------------------
//    U P D A T E   T R I P
//----------------------------------------------------

export const updateemp = async (id, empData) => {
  try {
    const formData = new FormData();
    formData.append("title", empData.title);
    formData.append("destination", empData.destination);
    formData.append("demographic", empData.demographic);
    formData.append("startDate", empData.startDate);
    formData.append("endDate", empData.endDate);
    formData.append("pricePerPerson", empData.pricePerPerson);
    formData.append("organiserID", empData.organiserID);
    formData.append("status", empData.status);
    if (empData.thumbnail) formData.append("thumbnail", empData.thumbnail);
    const response = await axios.patch(`${API_URL}/${id}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

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
  getemps,
  getemp,
  deleteemp,
  updateemp,
};

export default empService;
