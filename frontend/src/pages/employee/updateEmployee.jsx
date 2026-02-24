import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formSections } from "./formSections";
import FormInput from "../../components/form/formInput";
import FormSelect from "../../components/form/formSelect";
import {
  updateEmployee,
  getEmployee,
  selectIsLoading,
  selectEmployee,
} from "../../redux/employee/employeeSlice";
import { toast } from "react-toastify";

const EditEmployeeForm = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  selectedEmployee =  useSelector(selectEmployee);
  const  isLoading =  useSelector(selectIsLoading);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    shouldUnregister: false,
  });

  // ✅ Fetch employee from Redux
  useEffect(() => {
    if (id) {
      dispatch(getEmployee(id));
    }
  }, [id, dispatch]);
  console.log(selectedEmployee)
  // ✅ When employee is loaded → populate form
  useEffect(() => {
    if (selectedEmployee) {
      const formattedData = { ...selectedEmployee };

      const dateFields = [
        "birthdate",
        "mother_brithdate",
        "father_birthdate",
        "date_in",
        "work_start_date",
        "work_end_date",
        "work_licence_date",
        "w_birthdate",
        "nssf_date",
      ];

      dateFields.forEach((field) => {
        if (formattedData[field]) {
          formattedData[field] = formattedData[field].split("T")[0];
        }
      });

      reset(formattedData);
    }
  }, [selectedEmployee, reset]);

  // ✅ Submit Update via Redux Thunk
  const onSubmit = async (data) => {
    const cleanedData = { ...data };

    const numberFields = [
      "other_allowance",
      "nssf_no",
      "hours_per_month",
      "current_salary",
      "first_salary",
      "financial",
      "id_no",
      "child_number",
      "record_no",
      "w_id_no",
      "w_record_no",
      "med_days",
      "days_off",
      "var_days",
      "ministry_code",
      "transport",
      "family_allowance",
    ];

    numberFields.forEach((field) => {
      if (cleanedData[field] === "" || cleanedData[field] === undefined) {
        cleanedData[field] = null;
      } else {
        cleanedData[field] = Number(cleanedData[field]);
      }
    });

    const dateFields = [
      "birthdate",
      "mother_brithdate",
      "father_birthdate",
      "date_in",
      "work_start_date",
      "work_end_date",
      "work_licence_date",
      "w_birthdate",
      "nssf_date",
    ];

    dateFields.forEach((field) => {
      if (cleanedData[field] === "" || cleanedData[field] === undefined) {
        cleanedData[field] = null;
      } else {
        cleanedData[field] = new Date(cleanedData[field]);
      }
    });

    try {
      console.log("cleanedData:", cleanedData)
      await dispatch(
        updateEmployee({ id, formData: cleanedData }),
      ).unwrap();

    
      navigate(-1);
    } catch (error) {
      toast.error("Update failed");
      console.log(error);
    }
  };
console.log(selectedEmployee)
  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="w-full max-w-6xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-right border-b pb-4">
          تعديل بيانات الموظف
        </h2>

        {isLoading && <p className="text-center text-indigo-600">Loading...</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {Object.keys(formSections).map((sectionKey) => (
            <div
              key={sectionKey}
              className={activeTab === sectionKey ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {formSections[sectionKey]?.map((field) => {
                  const colSpanClass = field.colSpan || "";

                  if (field.type === "select") {
                    return (
                      <div key={field.name} className={colSpanClass}>
                        <FormSelect
                          {...field}
                          register={register}
                          errors={errors}
                        />
                      </div>
                    );
                  }

                  return (
                    <div key={field.name} className={colSpanClass}>
                      <FormInput
                        {...field}
                        register={register}
                        errors={errors}
                        {...(field.type === "number"
                          ? { valueAsNumber: true }
                          : {})}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 border-t pt-6">
            {[
              "personal",
              "extra",
              "relatives",
              "work",
              "wife",
              "siblings",
              "notes",
            ].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                {tab === "personal" && "البيانات الشخصية"}
                {tab === "extra" && "معلومات إضافية"}
                {tab === "relatives" && "أقاربه المضمونين معه"}
                {tab === "work" && "معلومات العمل"}
                {tab === "wife" && "معلومات عن الزوجة"}
                {tab === "siblings" && "الاشقاء"}
                {tab === "notes" && "ملاحظات"}
              </button>
            ))}
          </div>

         <div className="flex gap-4 mt-6">
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-medium shadow-lg transition duration-200 disabled:opacity-50"
          >
            تحديث الموظف
          </button>

              {/* Cancel Button */}
          <button
            type="button"
            onClick={() => navigate(-1)} // or navigate("/employees")
            className="w-full px-6 py-3 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-xl text-lg font-medium shadow transition duration-200"
          >
            إلغاء
          </button>
          
        </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeForm;
