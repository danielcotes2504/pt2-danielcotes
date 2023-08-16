import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Libro } from "./libro";
import { Usuario } from "./usuario";

class Prestamo extends Model {
  public id!: string;
  public fechaMaximaDevolucion!: string;
  public usuarioId!: number;
  public libroId!: number;
}

Prestamo.init(
  {
    id: {
      field: "id",
      type: DataTypes.STRING,
      primaryKey: true,
    },
    fechaMaximaDevolucion: {
      field: "fecha_maxima_devolucion",
      type: DataTypes.BIGINT,
    },
  },
  {
    sequelize,
    tableName: "Prestamos",
    freezeTableName: true,
    timestamps: false,
  }
);

// Asociaciones
Prestamo.belongsTo(Usuario, {
  foreignKey: { name: "usuarioId", field: "Usuario_id" },
});
Prestamo.belongsTo(Libro, {
  foreignKey: { name: "libroId", field: "Libro_id" },
});

export { Prestamo };
