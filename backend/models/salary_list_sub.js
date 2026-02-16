const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salary_list_sub', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    salary_list_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nssf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رقم الضمان"
    },
    emp_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم وشهرة المضمون"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ بدء العمل"
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ترك العمل"
    },
    dur_day: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "يوم"
    },
    dur_month: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "شهر"
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الجنسية"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملاحظات"
    },
    total_paid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "إجمالي الأجور السنوية"
    },
    subscription: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الإشتراكات المتوجبة"
    },
    family_allowance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "لفرع التعويضات العائلية"
    },
    medical_allowance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "لفرع المرض والأمومة"
    }
  }, {
    sequelize,
    tableName: 'salary_list_sub',
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
