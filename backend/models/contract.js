const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    contract_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "تاريخ العقد"
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    annex1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند الأول"
    },
    HasAnnex1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    annex2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند الثاني"
    },
    annex3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند الثالث"
    },
    annex4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    has_annex4: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "البند الرابع"
    },
    annex5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex5: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "البند الخامس"
    },
    annex6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex6: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند السادس"
    },
    annex7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex7: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند السابع"
    },
    annex8: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    has_annex8: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "البند الثامن"
    },
    annex9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex9: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند التاسع"
    },
    annex10: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex10: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند العاشر"
    },
    annex11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex11: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند الحادي عشر"
    },
    annex12: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_annex12: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "البند الثاني عشر"
    },
    user: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_update: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contract',
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
        name: "ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
