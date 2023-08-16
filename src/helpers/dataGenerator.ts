import { writeFile } from "fs/promises";
import { randNumber } from "@ngneat/falso";
import { Guid } from "guid-typescript";

const generateFakePrestamo = async (): Promise<void> => {
  const data = [];
  for (let i = 0; i <= 10; i++) {
    const guid = Guid.create();
    data.push({
      isbn: guid.toString(),
      identificacionUsuario: randNumber({ min: 100000, max: 300000 }),
      tipoUsuario: randNumber({ min: 1, max: 3 }),
    });
  }
  try {
    await writeFile("fakePrestamos.json", JSON.stringify(data, null, 2));
    console.log("Datos generados y escritos en fakePrestamos.json");
  } catch (error) {
    console.error("Error al escribir en el archivo:", error);
  }
};

generateFakePrestamo();
