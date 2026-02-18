import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdowns = [
    {
      label: "ملف 1",
      items: [
        "الموظفين",
        "تصريح عن الزوجة",
        "إعلام استخدام أجير",
        "إعلام ترك أجير",
        "تصريح عن حادث",
      ],
    },
    {
      label: "ملف 2",
      items: [
        "طلب براءة ذمة",
        "تصريح عن مستفيد",
        "تصفية تعويض نهاية الخدمة",
        "التصريح الإسمي السنوي",
        "بيان بأسماء المستخدمين",
      ],
    },
    {
      label: "ملف 3",
      items: [
        "بيان معلومات عن المستخدم",
        "تحقيق للإستفادة عن الوالد",
        "طلب تسجيل مستخدم",
        "إفادة لمن يهمه الأمر",
        "طلب تجديد تحقيق إجتماعي",
      ],
    },
    {
      label: "ملف 4",
      items: [
        "كتاب تسجيل مستخدمين",
        "إفادات العمل",
        "عقد عمل",
        "طلب توظيف",
        "تحقيق عن زوج المضمونة",
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
              onMouseEnter={() => handleDropdown(index)}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button className="hover:text-gray-300">
                {dropdown.label}
              </button>

              {/* Dropdown Menu */}
              {openDropdown === index && (
                <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 text-right z-50">
                  {dropdown.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item}
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
