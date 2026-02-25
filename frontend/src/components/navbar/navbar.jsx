import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = [
    {
      label: "ملف 1",
      items: [
        { name: "الموظفين", to: "/employee/list" },
        { name: "تصريح عن الزوجة", to: "/wife-certificate/add" },
        { name: "إعلام استخدام أجير", to: "/hire-notice" },
        { name: "إعلام ترك أجير", to: "/leave-notice" },
        { name: "تصريح عن حادث", to: "/accident-report" },
      ],
    },
    {
      label: "ملف 2",
      items: [
        { name: "طلب براءة ذمة", to: "/clearance-request" },
        { name: "تصريح عن مستفيد", to: "/beneficiary-declaration" },
        { name: "تصفية تعويض نهاية الخدمة", to: "/end-service" },
        { name: "التصريح الإسمي السنوي", to: "/annual-declaration" },
        { name: "بيان بأسماء المستخدمين", to: "/users-list" },
      ],
    },
    {
      label: "ملف 3",
      items: [
        { name: "بيان معلومات عن المستخدم", to: "/user-info" },
        { name: "تحقيق للإستفادة عن الوالد", to: "/parent-investigation" },
        { name: "طلب تسجيل مستخدم", to: "/register-user" },
        { name: "إفادة لمن يهمه الأمر", to: "/certificate" },
        { name: "طلب تجديد تحقيق إجتماعي", to: "/renew-investigation" },
      ],
    },
    {
      label: "ملف 4",
      items: [
        { name: "كتاب تسجيل مستخدمين", to: "/register-letter" },
        { name: "إفادات العمل", to: "/work-certificates" },
        { name: "عقد عمل", to: "/contract" },
        { name: "طلب توظيف", to: "/job-request" },
        { name: "تحقيق عن زوج المضمونة", to: "/husband-investigation" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold text-gray-500 dark:text-white"
        >
          NSSF Docs
        </Link>

        {/* Menu */}
        <ul className="flex items-center space-x-8 text-gray-500 dark:text-white font-medium">
          {dropdowns.map((dropdown, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="hover:text-gray-300 dark:hover:text-gray-400 transition">
                {dropdown.label}
              </button>

              {openDropdown === index && (
                <ul className="absolute right-0 pt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 text-right z-50">
                  {dropdown.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
