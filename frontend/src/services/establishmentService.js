import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "./authService";

const API_URL = `${BACKEND_URL}/api/establishment`;


//----------------------------------------------------
//    G E T  S I N G L E   E S T A B L I S H M E N T
//----------------------------------------------------
export const getEstablishment = async (id) => {
  console.log("EST SERVICE RUNNING")
  const reponse = await axios.get(API_URL + "/" + id);
  return reponse.data;
};


//----------------------------------------------------
//    U P D A T E   E S T A B L I S H M E N T
//----------------------------------------------------

export const updateEstablishment = async (id, estData) => {
  try {
    console.log("UPDATE SERVICE RUNNING")
     console.log("estData:", estData)
 
    const response = await axios.patch(`${API_URL}/${id}`, estData,      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
);

    if (response.statusText === "OK") {
      toast.success("est Updated Successfully");
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

const establishmentService = {
  getEstablishment,  
  updateEstablishment,
};

export default establishmentService;
