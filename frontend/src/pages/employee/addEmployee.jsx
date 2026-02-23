import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  } = useForm({
    shouldUnregister: false,
    defaultValues: {}, // optional but good practice
  });
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    console.log("Submitted Data:", data); // debug

    const cleanedData = { ...data };

    // --- Number fields ---
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
        cleanedData[field] = null; // empty → null
      } else {
        cleanedData[field] = Number(cleanedData[field]); // string → number
      }
    });

    // --- Date fields ---
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
      // add any other date field names here
    ];

    dateFields.forEach((field) => {
      if (cleanedData[field] === "" || cleanedData[field] === undefined) {
        cleanedData[field] = null; // empty → null
      } else {
        cleanedData[field] = new Date(cleanedData[field]); // string → Date object
      }
    });

    console.log("Cleaned Data:", cleanedData); // check before sending

    try {
      await registerEmp(cleanedData);
      toast.success("Employee Added Successfully");
      navigate(-1)
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
          {/* ALL Sections Rendered (Only One Visible) */}
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
