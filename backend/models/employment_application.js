const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employment_application', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    app_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "التاريخ"
    },
    app_no: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "رقم الطلب"
    },
    job_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "نوع العمل"
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الإسم"
    },
    middle_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "إسم الأب"
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الشهرة"
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الولادة"
    },
    birth_place: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "مكان الولادة"
    },
    record_no: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "رقم السجل"
    },
    marital_status: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الوضع العائلي"
    },
    no_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد الأولاد"
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الجنسية"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "العنوان"
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الهاتف"
    },
    driver_licence: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رخصة القيادة"
    },
    army_service: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "خدمة العلم"
    },
    education: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المستوى العلمي"
    },
    languages: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "معرفة اللغات"
    },
    school: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المدرسة \/ المعهد  \/ الجامعة"
    },
    blood_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "فئة الدم"
    },
    criminal_record: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "سجلّ عدلي"
    },
    contract: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عقد عمل"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملاحظات"
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "صورة شمسية"
    },
    user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    added: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employment_application',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
