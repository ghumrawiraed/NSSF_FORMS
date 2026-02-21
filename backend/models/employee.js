const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "employee",
    {
      ID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nssf_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "رقم الضمان",
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الأسم",
      },
      family_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الشهرة",
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "العنوان",
      },
      sex: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الجنس",
      },
      middle_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم الأب",
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "هاتف",
      },
      mobile: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "خليوي",
      },
      department: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الدائرة",
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "ملاحظات",
      },
      date_in: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ الانتساب",
      },
      marital_status: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الوضع العائلي",
      },
      mother_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم الام",
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ الميلاد",
      },
      blood_group: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "فئة الدم",
      },
      record_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "رقم السجل",
      },
      record_place: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "مكان السجلّ",
      },
      place_of_birth: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "محل الولادة",
      },
      kadaa: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "قضاء",
      },
      residence_place_apid: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "محل الاقامة ( حسب الهوية)",
      },
      religion: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "المذهب",
      },
      "cr-mohafaza": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "المحافظة",
      },
      "cr-kadaa": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "القضاء",
      },
      "cr-city": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "المدينة أو القرية",
      },
      "cr-7ay": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الحي",
      },
      "cr-street": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الشارع",
      },
      "cr-building": {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "بناية وطابق",
      },
      work_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ دخول العمل",
      },
      work_start_note: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "ملاحظات",
      },
      work_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ انتهاء عمله",
      },
      work_end_note: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "ملاحظات",
      },
      hours_per_month: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "عدد ساعات عمله في الشهر",
      },
      work_type: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "دوام العمل",
      },
      position: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "عمل الاجير الحالي",
      },
      current_salary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "الراتب الحالي (ل.ل)",
      },
      text_salary: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الراتب بالكلمات",
      },
      first_salary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "الاجر بتاريخ دخول العمل",
      },
      first_salary_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الراتب الاول بالكلمات",
      },
      payment_type: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "طريقة دفع الأجر",
      },
      nationality: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "الجنسية",
      },
      work_licence_num: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "رقم",
      },
      work_licence_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "وتاريخ اجازة عمله",
      },
      other_work: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "هل يعمل الأجير حسب معرفتك لدى صاحب عمل آخر",
      },
      est_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "إسم المؤسسة",
      },
      est_number: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "رقم المؤسسة",
      },
      ow_manager_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم",
      },
      ow_manager_number: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "ورقم صاحب العمل الآخر",
      },
      ow_manager_address: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "عنوان صاحب العمل الآخر",
      },
      financial: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "الرقم المالي",
      },
      mother_brithdate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ ميلاد الوالدة",
      },
      father_birthdate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ ميلاد الوالد",
      },
      near: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "قرب",
      },
      id_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "رقم بطاقة الهوية",
      },
      child_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "عدد الأولاد الذين على عاتق المستخدم",
      },
      w_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم الزوج \/ الزوجة",
      },
      w_surname: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "شهرة الزوجة قبل الزواج",
      },
      w_father: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم والد الزوجة",
      },
      w_mother: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم والدة الزوجة قبل الزواج",
      },
      w_nationality: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "جنسية الزوجة",
      },
      w_birthplace: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "محل ولادة الزوجة",
      },
      w_birthdate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ ولادة الزوجة",
      },
      w_id_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "رقم بطاقة هوية الزوجة",
      },
      w_record_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "رقم سجلّ الزوجة",
      },
      w_record_place: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "مكان سجلّ الزوجة",
      },
      w_spouce_work: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "هل الزوجة تعمل",
      },
      w_spouce_work_desc: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      w_spouce_nssf: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "رقم التسجيل الشخصي",
      },
      w_spouce_est: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم مؤسسة المستقلّة",
      },
      w_spouce_est_nssf: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "رقم تسجيل المؤسسة",
      },
      w_spouce_idara: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "إسم الادارة",
      },
      re_area: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "المنطقة العقارية",
      },
      re_no: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "رقم العقار\/القسم",
      },
      po_box: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "صندوق البريد",
      },
      po_box_area: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "المنطقة",
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "البريد الالكتروني",
      },
      fax: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "فاكس",
      },
      day_off: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vac_days: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      med_days: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "عدد أيام الإجازة المرضية",
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      vacation_day: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ministry_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nssf_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "تاريخ انتساب الضمان",
      },
      transport: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      family_allowance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      other_allwance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "employee",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "ID" }],
        },
      ],
    },
  );
};
