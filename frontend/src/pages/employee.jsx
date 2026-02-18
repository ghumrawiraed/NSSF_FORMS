import React, { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    nssf_no: "",
    first_name: "",
    middle_name: "",
    family_name: "",
    address: "",
    sex: "",
    phone: "",
    mobile: "",
    department: "",
    note: "",
    date_in: "",
    marital_status: "",
    birthdate: "",
    blood_group: "",
    position: "",
    current_salary: "",
    email: "",
    // Add more fields as needed
  });

  const [activeTab, setActiveTab] = useState("personal");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="w-full max-w-4xl bg-white/50 dark:bg-gray-800/90 rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-right">
          نموذج الموظف
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info Section */}
          {activeTab === "personal" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">رقم الضمان</label>
                <input
                  type="text"
                  name="nssf_no"
                  value={formData.nssf_no}
                  onChange={handleChange}
                  placeholder="أدخل رقم الضمان"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">الاسم</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="أدخل الاسم"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">اسم الأب</label>
                <input
                  type="text"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                  placeholder="أدخل اسم الأب"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">الشهرة</label>
                <input
                  type="text"
                  name="family_name"
                  value={formData.family_name}
                  onChange={handleChange}
                  placeholder="أدخل الشهرة"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">الجنس</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                >
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">تاريخ الميلاد</label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>
            </div>
          )}

          {/* Contact Info Section */}
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">العنوان</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="أدخل العنوان"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">هاتف</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم الهاتف"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">خليوي</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="أدخل رقم الخليوي"                  
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">البريد الالكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="أدخل البريد الالكتروني"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>
            </div>
          )}

          {/* Work Info Section */}
          {activeTab === "work" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">الدائرة</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="أدخل الدائرة"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">العمل الحالي</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="أدخل العمل الحالي"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
                  
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 dark:text-white">الراتب الحالي</label>
                <input
                  type="number"
                  name="current_salary"
                  value={formData.current_salary}
                  onChange={handleChange}
                  placeholder="أدخل الراتب الحالي"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"                 
                />
              </div>
            </div>
          )}

          {/* Notes */}
          {activeTab === "notes" && (
            <div className="text-right">
              <label className="block mb-2 text-gray-700 dark:text-white">ملاحظات</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                placeholder="أدخل أي ملاحظات"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"                 
                
              />
            </div>
          )}

          {/* Tabs */}
          <div className="flex justify-around mt-6 border-t pt-4">
            {["personal", "contact", "work", "notes"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  activeTab === tab ? "bg-indigo-600" : "bg-indigo-400/60 hover:bg-indigo-500"
                } transition`}
              >
                {tab === "personal" && "البيانات الشخصية"}
                {tab === "contact" && "معلومات الاتصال"}
                {tab === "work" && "معلومات العمل"}
                {tab === "notes" && "ملاحظات"}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-medium shadow-md transition"
          >
            حفظ الموظف
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
