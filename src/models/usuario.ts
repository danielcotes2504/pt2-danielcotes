import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Usuario extends Model {
  private isbn!: string;
}

Usuario.init(
  {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    tipo: {
      field: "tipo",
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelize,
    tableName: "Usuarios",
    freezeTableName: true,
    timestamps: false,
  }
);

export { Usuario };
