import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/formInput";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeSelector from "../../components/form/employeeSelector";
import empService from "../../services/employeeService";



const WifeCertificateForm = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  
const [employees, setEmployees] = useState([]);
const [selectedEmployee, setSelectedEmployee] = useState(null);

useEffect(() => {
  // Replace with your API call or Redux dispatch
  const fetchEmployees = async () => {
    const res = await empService.getEmps(); 
    setEmployees(res);
  };

  fetchEmployees();
}, []);

const navigate = useNavigate()



  const onSubmit = (data) => {
    console.log(data);
    onSubmitHandler(data);
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
    <div className="w-full max-w-2xl bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8">

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        تصريح عن الزوجة
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" dir="rtl">

        <FormInput
          label="التاريخ"
          name="certificate_date"
          type="date"
          register={register}
          errors={errors}
        />

       <EmployeeSelector
            register={register}
            setValue= {setValue}
            employees={employees}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
      />

        <FormInput
          label="الوضع"
          name="status"
          type="textarea"
          register={register}
          errors={errors}
        />

        <FormInput
          label="نوع العمل"
          name="type_of_work"
          type="textarea"
          register={register}
          errors={errors}
        />

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">

         {/* Save Button */}
          <button
            type="submit"
            className="w-1/2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
          >
            حفظ
          </button>

          {/* Cancel Button (Left in RTL layout visually) */}
          <button
            type="button"
            onClick={() => navigate(-1)} // or your custom cancel logic
            className="w-1/2 px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition"
          >
            إلغاء
          </button>

         

        </div>

      </form>
    </div>
  </div>
);
};

export default WifeCertificateForm;