import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Libro extends Model {
  private isbn!: string;
}

Libro.init(
  {
    isbn: {
      field: "isbn",
      type: DataTypes.TEXT,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelize,
    tableName: "Libros",
    freezeTableName: true,
    timestamps: false,
  }
);

export { Libro };
