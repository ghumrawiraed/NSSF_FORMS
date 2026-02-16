const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_expertise', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    est_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "إسم المؤسسة"
    },
    job_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "نوع العمل"
    },
    no_years: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد السنوات"
    },
    from_year: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "من سنة"
    },
    to_year: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "إلى سنة"
    }
  }, {
    sequelize,
    tableName: 'application_expertise',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
