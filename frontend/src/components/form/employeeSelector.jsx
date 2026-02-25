import React, { useEffect, useState } from "react";

const EmployeeSelector = ({
  register,
  setValue,
  employees,
  selectedEmployee,
  setSelectedEmployee,
}) => {
  const handleChange = (e) => {
    const empId = e.target.value;

    const emp = employees.find(
      (employee) => employee.ID === Number(empId)
    );

    setSelectedEmployee(emp || null);
    setValue("employee_id", empId); // store in react-hook-form
  };

  return (
    <div className="space-y-4">

      {/* Dropdown */}
  <div className="flex flex-col space-y-2" dir="rtl">
  <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
    اختر الموظف
  </label>

  <select
    onChange={handleChange}
    className="
      w-full
      px-4 py-2.5
      text-sm
      text-white
      bg-gray-800
      border border-gray-300
      rounded-xl
      shadow-sm
      focus:outline-none
      focus:ring-2 focus:ring-indigo-500
      focus:border-indigo-500
      transition
    "
  >
    <option value="">-- اختر موظف --</option>

    {employees.map((emp) => (
      <option key={emp.ID} value={emp.ID}>
        {`${emp.first_name}  ${emp.family_name}`}
      </option>
    ))}
  </select>
</div>

      {/* Info Panel */}
      {selectedEmployee && (
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 border">

          <div className="grid grid-cols-2 gap-4 text-sm" dir="rtl">

            <div>
              <span className="font-semibold">رمز الموظف:</span>{" "}
              {selectedEmployee.ID}
            </div>

            <div>
              <span className="font-semibold">الاسم والشهرة:</span>{" "}
              {`${selectedEmployee.first_name}  ${selectedEmployee.family_name}`}
            </div>

            <div>
              <span className="font-semibold">اسم الأب:</span>{" "}
              {selectedEmployee.middle_name}
            </div>

            <div>
              <span className="font-semibold">رقم الضمان:</span>{" "}
              {selectedEmployee.nssf_no}
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default EmployeeSelector;