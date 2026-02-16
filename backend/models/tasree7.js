const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasree7', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    certificated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "التاريخ"
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رمز الموظف",
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    relative_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رمز القريب"
    },
    patient: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المريض"
    },
    relation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "درجة القرابة"
    },
    acc_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الاصابة"
    },
    acc_day: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اليوم"
    },
    acc_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "الساعة"
    },
    acc_place: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "المكان"
    },
    acc_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "بـ:"
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "مسبب الحادث"
    },
    person_address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عنوانه"
    },
    car_number: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم السيارة"
    },
    car_model: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "نوعها"
    },
    insurance_co: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "شركة التامين"
    },
    insurance_co_address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عنوان شركة التأمين"
    },
    witness: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "شهد على الحادث"
    },
    witness_address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عنوان الشاهد"
    },
    ticket: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "محضر من قبل"
    },
    acc_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "تفصيل المحضر"
    }
  }, {
    sequelize,
    tableName: 'tasree7',
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
      {
        name: "tasree7FK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
