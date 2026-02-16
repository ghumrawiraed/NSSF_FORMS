const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('establishment', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    est_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المؤسسة"
    },
    est_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رقمها في الضمان"
    },
    est_financial_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "الرقم المالي"
    },
    brandname: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الشهرة التجارية"
    },
    place: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "مكان"
    },
    'br-number': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رقم"
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "هاتف"
    },
    telephone2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "هاتف 2"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عنوانها بالكامل"
    },
    manager: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم السؤول عن المؤسسة"
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البريد الالكتروني"
    },
    agent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "العميل"
    },
    sifa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "الصفة"
    },
    prev_est_number: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقمها سابقاً"
    },
    current_address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "العنوان الحالي"
    },
    ca_prop: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملك"
    },
    ca_street: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم الشارع"
    },
    ca_phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "تلفون"
    },
    previous_address: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "عنوانها السابق"
    },
    pa_prop: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملك"
    },
    pa_street: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم الشارع"
    },
    pa_phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "تلفون"
    },
    mohafaza: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "محافظة"
    },
    kadaa: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "قضاء"
    },
    balda: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البلدة"
    },
    hay: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الحي"
    },
    re_area: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "المنطقة العقارية"
    },
    re_no: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم العقار"
    },
    building: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المبنى"
    },
    floor: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الطابق"
    },
    fax: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "فاكس"
    },
    po_box: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "صندوق بريد"
    },
    po_box_area: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "منطقة صندوق البريد"
    }
  }, {
    sequelize,
    tableName: 'establishment',
    timestamps: false
  });
};
