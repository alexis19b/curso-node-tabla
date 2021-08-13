const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      let result = base * i;
      salida += `${base} x ${i} = ${result}\n`;
    }
    if (listar) {
      console.log("=====================".green);
      console.log("   Tabla del:".red, base);
      console.log("=====================".green);

      console.log(salida.rainbow);
    }

    fs.writeFileSync(`./salida/table-${base}.txt`, salida);
    return `tabla-${base}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
