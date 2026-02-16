const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_list_sub', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emplist_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    emp_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sex: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ذكر أم أنثى"
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الجنسية"
    },
    religion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المذهب"
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريح الميلاد"
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "القرية"
    },
    kadaa: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "القضاء"
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المحافظة"
    },
    record_no: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم السجل"
    },
    marital_status: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "متزوج ام اعزب أم ارمل"
    },
    work_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "نوع عمل الأجير"
    },
    salary: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "الأجر"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ دخول العمل"
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ترك العمل"
    },
    user_leger: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم دفتر الاستخدام"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملاحظات"
    }
  }, {
    sequelize,
    tableName: 'employee_list_sub',
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
