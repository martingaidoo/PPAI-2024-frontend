import * as XLSX from 'xlsx';

interface Bodega {
    nombre: string;
    ubicacion: string[];
}

interface Vino {
    nombreVino: string;
    calificacionSomelier: number;
    precioVino: number;
    bodega: Bodega;
    calificacionSommelier: number;
    calificacionGeneral: number;
}

export class GeneradorArchivoExcel {
    constructor() {}

    generarArchivo(datos: Vino[]) { //44. generarArchivo()
        // Ordenar los datos por calificación de sommelier en orden descendente y tomar los 10 mejores
        const top10Vinos = datos.sort((a, b) => b.calificacionSommelier - a.calificacionSommelier).slice(0, 10);

        // Crear una nueva hoja de trabajo (worksheet)
        const ws = XLSX.utils.json_to_sheet(this.prepararDatos(top10Vinos));

        // Crear un nuevo libro de trabajo (workbook) y agregar la hoja de trabajo
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Vinos Rankeados");

        // Generar el archivo Excel
        XLSX.writeFile(wb, 'VinosRankeados.xlsx');

        // Informar sobre la generación exitosa del archivo
        console.log("El archivo Excel 'VinosRankeados.xlsx' ha sido generado exitosamente.");
    }

    prepararDatos(datos: Vino[]): any[] {
        // Preparar los datos en un formato adecuado para la biblioteca xlsx
        return datos.map(dato => {
            return {
                "Nombre del Vino": dato.nombreVino,
                "Calificación de Sommelier": dato.calificacionSomelier,
                "Calificación General": dato.calificacionGeneral,
                "Precio Sugerido": dato.precioVino,
                Bodega: dato.bodega.nombre,
                Región: dato.bodega.ubicacion[0],
                País: dato.bodega.ubicacion[dato.bodega.ubicacion.length - 1]
                //su nombre, la calificación de sommelier, la calificación general, su precio sugerido, su bodega, su
                //varietal, región y país.
            };
        });
    }
}

const generadorArchivoExcel = new GeneradorArchivoExcel();
export { generadorArchivoExcel}
