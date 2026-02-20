export const formSections = {

personal:[
  { name: "first_name", label: "الأسم", type: "text" },
  { name: "middle_name", label: "اسم الأب", type: "text" },
  { name: "family_name", label: "الشهرة", type: "text" },
  { name: "nssf_no", label: "رقم الضمان", type: "number" },
  { name: "financial", label: "الرقم المالي", type: "number" },  
  { name: "address", label: "العنوان", type: "text" },
  { name: "mother_name", label: "اسم الام", type: "text" },
  { name: "birthdate", label: "تاريخ الميلاد", type: "date" },
  { name: "sex", label: "الجنس", type: "select", options: [
        { value: "ذكر", label: "ذكر" },
        { value: "أنثى", label: "أنثى" },
        
      ] },
  { name: "marital_status", label: "الوضع العائلي", type: "select" , options: [
        { value: "أعزب", label: "أعزب" },
        { value: "متزوج", label: "متزوج" },
        { vlaue: "أرمل", label:"أرمل"},
        { vlaue: "مطلق", label:"مطلق"},
        { vlaue: "هاجر", label:"هاجر"},               
      ] },   
  { name: "department", label: "الدائرة", type: "text" },    
  { name: "blood_group", label: "فئة الدم", type: "text" },
  { name: "nationality", label: "الجنسية", type: "text" },
    ],

 extra:[  
  
  { name: "record_no", label: "رقم السجل", type: "number" },
  { name: "record_place", label: "مكان السجلّ", type: "text" },
  { name: "place_of_birth", label: "محل الولادة", type: "text" },
  { name: "kadaa", label: "قضاء", type: "text" },
  { name: "residence_place_apid", label: "محل الاقامة ( حسب الهوية)", type: "text" },
  { name: "religion", label: "المذهب", type: "text" },
  { name: "cr-mohafaza", label: "المحافظة", type: "text" },
  { name: "cr-kadaa", label: "القضاء", type: "text" },
  { name: "cr-city", label: "المدينة أو القرية", type: "text" },
  { name: "cr-7ay", label: "الحي", type: "text" },
  { name: "cr-street", label: "الشارع", type: "text" },
  { name: "near", label: "قرب", type: "text" },
  { name: "cr-building", label: "بناية وطابق", type: "text" },
  { name: "phone", label: "هاتف", type: "text" },
  { name: "mobile", label: "خليوي", type: "text" },
  { name: "mother_brithdate", label: "تاريخ ميلاد الوالدة", type: "date" },
  { name: "father_birthdate", label: "تاريخ ميلاد الوالد", type: "date" },
  { name: "id_no", label: "رقم بطاقة الهوية", type: "number" },
  { name: "child_number", label: "عدد الأولاد الذين على عاتق المستخدم", type: "number" },
 ],
work:[
  { name: "date_in", label: "تاريخ الانتساب", type: "date" },
  { name: "work_start_date", label: "تاريخ دخول العمل", type: "date" },
  { name: "work_start_note", label: "ملاحظات", type: "text" },
  { name: "work_end_date", label: "تاريخ انتهاء عمله", type: "date" },
  { name: "work_end_note", label: "ملاحظات", type: "text" },
  { name: "hours_per_month", label: "عدد ساعات عمله في الشهر", type: "number" },
  { name: "current_salary", label: "الراتب الحالي (ل.ل)", type: "number" },
  { name: "text_salary", label: "الراتب بالكلمات", type: "text" },
  { name: "first_salary", label: "الاجر بتاريخ دخول العمل", type: "number" },
  { name: "first_salary_text", label: "الراتب الاول بالكلمات", type: "text" },
  { name: "work_licence_num", label: "رقم", type: "text" },
  { name: "work_licence_date", label: "وتاريخ اجازة عمله", type: "date" },
  { name: "position", label: "عمل الاجير الحالي", type: "text" },
  
  { name: "payment_type", label: "طريقة دفع الأجر", type: "text" },

  { name: "work_type", label: "دوام العمل", type: "text" },

  { name: "other_work", label: "هل يعمل الأجير حسب معرفتك لدى صاحب عمل آخر", type: "text" },


  { name: "est_name", label: "إسم المؤسسة", type: "text" },
  { name: "est_number", label: "رقم المؤسسة", type: "text" },
  { name: "ow_manager_name", label: "اسم", type: "text" },
  { name: "ow_manager_number", label: "ورقم صاحب العمل الآخر", type: "text" },
  { name: "ow_manager_address", label: "عنوان صاحب العمل الآخر", type: "text" },
],

wife:[
    
  { name: "w_name", label: "اسم الزوج / الزوجة", type: "text" },
  { name: "w_surname", label: "شهرة الزوجة قبل الزواج", type: "text" },
  { name: "w_father", label: "اسم والد الزوجة", type: "text" },
  { name: "w_mother", label: "اسم والدة الزوجة قبل الزواج", type: "text" },
  { name: "w_nationality", label: "جنسية الزوجة", type: "text" },
  { name: "w_birthplace", label: "محل ولادة الزوجة", type: "text" },
  { name: "w_birthdate", label: "تاريخ ولادة الزوجة", type: "date" },
  { name: "w_id_no", label: "رقم بطاقة هوية الزوجة", type: "number" },
  { name: "w_record_no", label: "رقم سجلّ الزوجة", type: "number" },
  { name: "w_record_place", label: "مكان سجلّ الزوجة", type: "text" },
  { name: "w_spouce_work", label: "هل الزوجة تعمل", type: "text" },
  { name: "w_spouce_nssf", label: "رقم التسجيل الشخصي", type: "text" },
  { name: "w_spouce_est", label: "اسم مؤسسة المستقلّة", type: "text" },
  { name: "w_spouce_est_nssf", label: "رقم تسجيل المؤسسة", type: "text" },
  { name: "w_spouce_idara", label: "إسم الادارة", type: "text" },
  { name: "re_area", label: "المنطقة العقارية", type: "text" },
  { name: "re_no", label: "رقم العقار/القسم", type: "text" },
  { name: "po_box", label: "صندوق البريد", type: "text" },
  { name: "po_box_area", label: "المنطقة", type: "text" },
  { name: "email", label: "البريد الالكتروني", type: "text" },
  { name: "fax", label: "فاكس", type: "text" },
  { name: "med_days", label: "عدد أيام الإجازة المرضية", type: "number" },
  { name: "nssf_date", label: "تاريخ انتساب الضمان", type: "date" },
],
notes:[  
  { name: "note", label: "ملاحظات", type: "text" }
],  
};
  