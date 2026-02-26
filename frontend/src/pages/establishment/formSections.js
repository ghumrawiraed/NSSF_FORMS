export const formSections = {
 main:[
      { name: "est_name", label: "اسم المؤسسة", type: "text" },
      { name: "brandname", label: "الشهرة التجارية", type: "text" },
      { name: "est_number", label: "رقمها في الضمان", type: "number" },
      { name: "est_financial_no", label: "الرقم المالي", type: "number" },
      { name: "br-number", label: "رقم السجل", type: "number" },
      { name: "prev_est_number", label: "رقمها سابقاً", type: "text" },
      { name: "sifa", label: "الصفة", type: "number" },
    ],
 contact: [
      { name: "telephone", label: "هاتف", type: "text" },
      { name: "telephone2", label: "هاتف 2", type: "text" },
      { name: "fax", label: "فاكس", type: "text" },
      { name: "email", label: "البريد الإلكتروني", type: "email" },
    ],


management: [
      { name: "manager", label: "اسم المسؤول عن المؤسسة", type: "text" },
      { name: "agent", label: "العميل", type: "text" },
    ],

current_address: [
      { name: "current_address", label: "العنوان الحالي", type: "text" },
      { name: "ca_prop", label: "ملك", type: "text" },
      { name: "ca_street", label: "اسم الشارع", type: "text" },
      { name: "ca_phone", label: "تلفون", type: "text" },
    ],
  
previous_address: [
      { name: "previous_address", label: "العنوان السابق", type: "number" },
      { name: "pa_prop", label: "ملك", type: "text" },
      { name: "pa_street", label: "اسم الشارع", type: "text" },
      { name: "pa_phone", label: "تلفون", type: "text" },
    ],
  
geo: [
      { name: "mohafaza", label: "المحافظة", type: "text" },
      { name: "kadaa", label: "القضاء", type: "text" },
      { name: "balda", label: "البلدة", type: "text" },
      { name: "hay", label: "الحي", type: "text" },
    ],
  
real_estate: [
      { name: "re_area", label: "المنطقة العقارية", type: "number" },
      { name: "re_no", label: "رقم العقار", type: "text" },
      { name: "building", label: "المبنى", type: "text" },
      { name: "floor", label: "الطابق", type: "text" },
    ],

address: [
      { name: "place", label: "مكان", type: "text" },
      { name: "address", label: "عنوانها بالكامل", type: "text" },
      { name: "po_box", label: "صندوق بريد", type: "text" },
      { name: "po_box_area", label: "منطقة صندوق البريد", type: "text" },
    ]
}