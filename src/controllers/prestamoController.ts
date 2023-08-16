import { Request, Response } from "express";
import { Libro } from "../models/libro";
import { Prestamo } from "../models/prestamo";
import { Usuario } from "../models/usuario";
import { getMaxReturnDate } from "../helpers/getMaxReturnDate";
import { v4 as uuidv4 } from "uuid";

export const getPrestamoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Prestamo.findByPk(id, {
      include: { model: Usuario, as: "Usuario" , attributes:["tipo"]},
    });

    const dto = {
      id: queryResult?.id,
      isbn: queryResult?.libroId,
      identificacionUsuario: queryResult?.usuarioId,
      fechaMaximaDevolucion: queryResult?.fechaMaximaDevolucion,
      tipoUsuario:queryResult?.getDataValue("Usuario")
    
    };
    return res.status(200).json(dto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener la transacción de prestamo",
    });
  }
};

export const createPrestamo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { isbn, identificacionUsuario, tipoUsuario } = req.body;

  try {
    const id = uuidv4();
    const userType: number = parseInt(tipoUsuario);
    const maxDate = getMaxReturnDate(userType);

    //Verificar si el libro existe
    const libroExistente = await Libro.findOne({ where: { isbn } });

    if (!libroExistente) {
      await Libro.create({ isbn });
    } else {
      const bookIsTaken = await Prestamo.findOne({
        where: { libroId: isbn },
      });

      if (bookIsTaken) {
        return res.status(403).json({
          message: "El libro ha sido tomado por otro usuario",
        });
      }
    }
    //Verificar si el usuario existe
    const usuarioExistente = await Usuario.findOne({
      where: { id: identificacionUsuario },
    });
    if (!usuarioExistente) {
      await Usuario.create({
        id: identificacionUsuario,
        tipo: userType,
      });
    } else {
      if (userType === 3) {
        const hasPrestamo = await Prestamo.findOne({
          where: { usuarioId: identificacionUsuario },
        });

        //Verificar si el tipo de usuario es 3

        if (hasPrestamo) {
          return res.status(403).json({
            message: "El Usuario de tipo 3 tiene un prestamo vigente",
          });
        }
      }
    }

    //Crear el prestamo
    const queryResult = await Prestamo.create({
      id,
      fechaMaximaDevolucion: maxDate,
      usuarioId: identificacionUsuario,
      libroId: isbn,
    });
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al generar el prestamo", error });
  }
};
