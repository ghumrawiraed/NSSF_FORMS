import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  register,
  required = false,
  errors,
  placeholder = "",
  validation = {},
  disabled = false,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          {...register(name, {
            required: required ? "هذا الحقل مطلوب" : false,
            ...validation,
          })}
          placeholder={placeholder}
          disabled={disabled}
          className={`px-3 py-2 rounded-lg border text-sm bg-white dark:bg-gray-800 
          ${
            errors?.[name]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          } 
          focus:outline-none focus:ring-2 transition`}
        />
      ) : (
        <input
          type={type}
          {...register(name, {
            required: required ? "هذا الحقل مطلوب" : false,
            ...validation,
          })}
          placeholder={placeholder}
          disabled={disabled}
          className={`px-3 py-2 rounded-lg border text-sm bg-white dark:bg-gray-800 
          ${
            errors?.[name]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          } 
          focus:outline-none focus:ring-2 transition`}
        />
      )}

      {errors?.[name] && (
        <span className="text-red-500 text-xs mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default FormInput;