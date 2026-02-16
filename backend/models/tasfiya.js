const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasfiya', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_date: {
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
    worked_from_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "عمل من تاريخ"
    },
    worked_to_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "عمل لغاية تاريخ"
    },
    pay_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "كيفية الدفع"
    },
    monthly_salary: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "الاجر الشهري"
    },
    monthly_salary_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الاجر الشهري بالكلمات"
    },
    weekly_salary: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "الاجر الاسبوعي"
    },
    weekly_salary_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الاجر الاسبوعي بالكلمات"
    },
    weeks_worked: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد الاسابيع"
    },
    daily_salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "الاجر اليومي"
    },
    daily_salary_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الاجر اليومي بالكلمات"
    },
    days_worked: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد الأيام"
    },
    hourly_salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "اجر آخر ساعة"
    },
    hourly_salary_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "أجر آخر ساعة بالكلمات"
    },
    hours_worked: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد الساعات اليومية"
    },
    paid_from_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "الاجر المدفوع من تاريخ"
    },
    paid_to_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "الاجر المدفوع إلى تاريخ"
    },
    total_paid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "بلغ مجموعها"
    },
    total_paid_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "بلغ مجموعها بالكلمات"
    },
    nssf_sub_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "المجموع ضرب 8.5 %"
    },
    sub_amount_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المجموع ضزب 8.5 % بالكلمات"
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "طبيعة عمل الاجير"
    }
  }, {
    sequelize,
    tableName: 'tasfiya',
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
        name: "tasfiyaFK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
