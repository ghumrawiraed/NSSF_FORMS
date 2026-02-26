import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formSections } from "./formSections";
import FormInput from "../../components/form/formInput";
import FormSelect from "../../components/form/formSelect";
import { selectEstablishment, selectIsLoading, getEstablishment , updateEstablishment} from "../../redux/establishment/establishmentSlice";

import { toast } from "react-toastify";

const EditEstablishmentForm = () => {
  const [activeTab, setActiveTab] = useState("main");
  //const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  selectedEstablishment =  useSelector(selectEstablishment);
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
      dispatch(getEstablishment(1));   
  }, [dispatch]);

  console.log(selectedEstablishment)
  // ✅ When est is loaded → populate form
   useEffect(() => {
    if (selectedEstablishment) {
      const formattedData = { ...selectedEstablishment };

      const dateFields = [
       
      ];

      dateFields.forEach((field) => {
        if (formattedData[field]) {
          formattedData[field] = formattedData[field].split("T")[0];
        }
      });

      reset(formattedData);
    }
  }, [selectedEstablishment, reset]);
 
  // ✅ Submit Update via Redux Thunk
  const onSubmit = async (data) => {
    const cleanedData = { ...data };

    const numberFields = [
      "est_number",
      "est_financial_no",
      "sifa",
        ];

    numberFields.forEach((field) => {
      if (cleanedData[field] === "" || cleanedData[field] === undefined) {
        cleanedData[field] = null;
      } else {
        cleanedData[field] = Number(cleanedData[field]);
      }
    });

    /* const dateFields = [
      
    ];

    dateFields.forEach((field) => {
      if (cleanedData[field] === "" || cleanedData[field] === undefined) {
        cleanedData[field] = null;
      } else {
        cleanedData[field] = new Date(cleanedData[field]);
      }
    }); */

    try {
      console.log("cleanedData:", cleanedData)
      await dispatch(
        updateEstablishment({ id:1 , formData: cleanedData }),
      ).unwrap();

    
      navigate(-1);
    } catch (error) {
      toast.error("Update failed");
      console.log(error);
    }
      
  };
console.log(selectedEstablishment) 


/* report */

const generateReport = async () => {
  const response = await fetch("/api/reports/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "معلومات المؤسسة",
      sections: [
        {
          sectionTitle: "البيانات الأساسية",
          fields: [
            { label: "الاسم", value: selectedEstablishment.est_name },
            { label: "الرقم", value: selectedEstablishment.est_number },
          ],
        },
      ],
    }),
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  window.open(url, "_blank");
};


  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="w-full max-w-6xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-right border-b pb-4">
          معلومات عن المؤسسة
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
              "main",
              "contact",
              "management",
              "current_address",
              "previous_address",
              "geo",
              "real_estate",
              "address"
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
                {tab === "main" && "البيانات الاساسية"}
                {tab === "contact" && "الاتصال"}
                {tab === "management" && "الأدارة"}
                {tab === "current_address" && "العنوان الحالي"}
                {tab === "previous_address" && "العنوان السابق"}
                {tab === "geo" && "الموقع الجغرافي"}
                {tab === "real_estate" && "عقاريا"}
                {tab === "address" && "العنوان"}
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
            تحديث المؤسسة
          </button>



              {/* Cancel Button */}
          <button
            type="button"
            onClick={() => generateReport()} // or navigate("/employees")
            className="w-full px-6 py-3 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-xl text-lg font-medium shadow transition duration-200"
          >
           طباعة
            
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

export default EditEstablishmentForm;