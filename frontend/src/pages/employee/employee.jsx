import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSections } from "./formSections";
import FormInput from "../../components/form/formInput";
import FormSelect from "../../components/form/formSelect";
import { registerEmp } from "../../services/EmployeeService";
import { toast } from "react-toastify";

const EmployeeForm = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
   
     try {
      const returnedData = await registerEmp(data);
      toast.success("Employee Added Sucessfully");
      //navigate(-1);
    } catch (error) {
      console.log(error.message);
    }

  };

  return (
  <div
    className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    dir="rtl"
  >
    <div className="w-full max-w-6xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8">
      
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-right border-b pb-4">
        نموذج الموظف
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Fields Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {formSections[activeTab]?.map((field) => {
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
                />
              </div>
            );
          })}

        </div>

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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-medium shadow-lg transition duration-200"
        >
          حفظ الموظف
        </button>

      </form>
    </div>
  </div>
);

};

export default EmployeeForm;
