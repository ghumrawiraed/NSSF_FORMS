const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      ID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "اسم المستخدم",
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "كلمة المرور",
      },
      users: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "المستخدمين",
      },
      employee: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "ملفات الموظفين",
      },
      establishment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "المؤسسة",
      },
      wife_certificate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تصريح عن الزوجة",
      },
      employment_certificate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "إعلام استخدام أجير",
      },
      leave_certificate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "إعلام ترك أجير",
      },
      tasree7: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تصريح عن حادث",
      },
      Baraa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "براءة ذمّة",
      },
      "tasree7 _mostafeed": {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تصريح مستفيد",
      },
      ta7deed_ojoor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تحديد أجور",
      },
      acc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تفويض",
      },
      tahkik_zawj: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تحقيق عن زوج المضمونة",
      },
      contract: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "عقد عمل",
      },
      employment_application: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "طلب توظيف",
      },
      registration_letter: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "كتاب تسجيل موظفين",
      },
      registration_request: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "طلب تسجيل مستخدم",
      },
      to_concern: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "إفادة لمن يهمه الأمر",
      },
      ta7kik_father: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تحقيق للإستفادة عن الوالد",
      },
      request: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "إفادة عمل",
      },
      tajdeed_ta7kik: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "طلب تجديد تحقيق اجتماعي",
      },
      employee_info: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "بيان معلومات عن المستخدم",
      },
      salary_list: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
      },
      employee_list: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "بيان معلومات عن المستخدم",
      },
      tasfiya: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
        comment: "تصفية",
      },
    },
    {
      sequelize,
      tableName: "users",
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
