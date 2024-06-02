import { GestorGenerarReporteRankingVino } from './GestorGenerarReporteRankingVino';
import { Vino } from '../Modelo/vino';
import { Varietal } from '../Modelo/varietal';
import { Bodega } from '../Modelo/bodega';
import { RegionVitivinicola } from '../Modelo/regionVitivinicola';
import { Pais } from '../Modelo/pais';
import { Provincia } from '../Modelo/provincia';
import { Reseña } from '../Modelo/reseña';

export class Main {

    vino1: Vino;
    vino2: Vino;
    vino3: Vino;
    vino4: Vino;
    vino5: Vino;
    vino6: Vino;
    vino7: Vino;
    vino8: Vino;
    vino9: Vino;
    vino10: Vino;
    vino11: Vino;
    vino12: Vino;
    vino13: Vino;
    vino14: Vino;
    vino15: Vino;
    vino16: Vino;
    vino17: Vino;
    vino18: Vino;
    vino19: Vino;
    vino20: Vino;

    bodega1: Bodega;
    bodega2: Bodega;
    bodega3: Bodega;
    bodega4: Bodega;
    bodega5: Bodega;

    pais1: Pais;
    pais2: Pais;
    pais3: Pais;

    provincia1: Provincia;
    provincia2: Provincia;
    provincia3: Provincia;
    provincia4: Provincia;
    provincia5: Provincia;

    region1: RegionVitivinicola;
    region2: RegionVitivinicola;
    region3: RegionVitivinicola;
    region4: RegionVitivinicola;
    region5: RegionVitivinicola;

    reseña1: Reseña;
    reseña2: Reseña;
    reseña3: Reseña;
    reseña4: Reseña;
    reseña5: Reseña;
    reseña6: Reseña;
    reseña7: Reseña;
    reseña8: Reseña;
    reseña9: Reseña;
    reseña10: Reseña;
    reseña11: Reseña;
    reseña12: Reseña;
    reseña13: Reseña;
    reseña14: Reseña;
    reseña15: Reseña;
    reseña16: Reseña;
    reseña17: Reseña;
    reseña18: Reseña;
    reseña19: Reseña;
    reseña20: Reseña;
    reseña21: Reseña;
    reseña22: Reseña;
    reseña23: Reseña;
    reseña24: Reseña;
    reseña25: Reseña;
    reseña26: Reseña;
    reseña27: Reseña;
    reseña28: Reseña;
    reseña29: Reseña;
    reseña30: Reseña;
    reseña31: Reseña;
    reseña32: Reseña;
    reseña33: Reseña;
    reseña34: Reseña;
    reseña35: Reseña;
    reseña36: Reseña;
    reseña37: Reseña;
    reseña38: Reseña;
    reseña39: Reseña;
    reseña40: Reseña;
    reseña41: Reseña;
    reseña42: Reseña;
    reseña43: Reseña;
    reseña44: Reseña;
    reseña45: Reseña;
    reseña46: Reseña;
    reseña47: Reseña;
    reseña48: Reseña;

    varietal1: Varietal;
    varietal2: Varietal;
    varietal3: Varietal;
    varietal4: Varietal;
    varietal5: Varietal;
    varietal6: Varietal;
    varietal7: Varietal;
    varietal8: Varietal;
    varietal9: Varietal;
    varietal10: Varietal;
    
    constructor() {

        // instanciamos los paises
        this.pais1 = new Pais('Argentina');
        this.pais2 = new Pais('Chile');
        this.pais3 = new Pais('España');

        // instanciamos las provincias
        this.provincia1 = new Provincia('Mendoza', this.pais1);
        this.provincia2 = new Provincia('San Juan', this.pais1);
        this.provincia3 = new Provincia('Valle Central', this.pais2);
        this.provincia4 = new Provincia('La Rioja', this.pais3);
        this.provincia5 = new Provincia('Cataluña', this.pais3);

        // instanciamos las regiones vitivinicolas
        this.region1 = new RegionVitivinicola('Valle de Uco', 'Región vitivinícola de Mendoza, famosa por sus vinos Malbec de alta calidad.', this.provincia1);
        this.region2 = new RegionVitivinicola('Valle de San Juan', 'Región destacada por sus variedades de Syrah y Bonarda.', this.provincia2);
        this.region3 = new RegionVitivinicola('Maipo', 'Una de las principales regiones vinícolas de Chile, conocida por sus Cabernet Sauvignon.', this.provincia3);
        this.region4 = new RegionVitivinicola('Rioja Alta', 'Región de España famosa por sus vinos Tempranillo.', this.provincia4);
        this.region5 = new RegionVitivinicola('Penedés', 'Conocida por su producción de Cava y vinos blancos.', this.provincia5);

        // instanciamos las bodegas
        this.bodega1 = new Bodega('Bodega Catena Zapata', 'Bodega argentina pionera en la producción de vinos de alta calidad, ubicada en Mendoza.', 'Fundada en 1902, es reconocida por sus innovaciones en viticultura y enología.', ['123', '456'], 'Periodo 1', this.region1);
        this.bodega2 = new Bodega('Concha y Toro', 'La bodega más grande de Chile, conocida por su vino emblemático "Casillero del Diablo".', 'Fundada en 1883, es una de las marcas de vino más reconocidas del mundo.', ['789', '012'], 'Periodo 2', this.region3);
        this.bodega3 = new Bodega('Marqués de Riscal', 'Bodega histórica de España, famosa por su arquitectura vanguardista y sus vinos Rioja.', 'Fundada en 1858, combina tradición e innovación en la producción de vino.', ['345', '678'], 'Periodo 3', this.region4);
        this.bodega4 = new Bodega('Bodegas López', 'Una de las bodegas más antiguas de Argentina, ubicada en Mendoza.', 'Desde 1898, produce vinos con métodos tradicionales y alta calidad.', ['901', '234'], 'Periodo 4', this.region2);
        this.bodega5 = new Bodega('Freixenet', 'Bodega española líder en la producción de Cava, ubicada en la región del Penedés.', 'Con más de 150 años de historia, es conocida por su excelencia en vinos espumosos.', ['567', '890'], 'Periodo 5', this.region5);

        // instanciamos las reseñas
        this.reseña1 = new Reseña('Un vino excepcional, con aromas complejos y un final largo y elegante.', true, new Date('2024-04-22'), 5);
        this.reseña2 = new Reseña('No cumplió con mis espectativas', true, new Date('2024-04-15'), 5);
        this.reseña3 = new Reseña('Gran equilibrio entre acidez y fruta, ideal para una cena sofisticada.', true, new Date('2024-04-20'), 5);
        this.reseña4 = new Reseña('No cumplió con mis expectativas, demasiado tánico para mi gusto.', true, new Date('2024-04-18'), 2);
        this.reseña5 = new Reseña('Un vino con notas dulces y un toque de roble, muy agradable.', true, new Date('2024-04-22'), 5);
        this.reseña6 = new Reseña('Refrescante y ligero, con aromas cítricos y florales.', true, new Date('2024-04-22'), 4);
        this.reseña7 = new Reseña('Un vino correcto, pero sin grandes pretensiones.', true, new Date('2024-04-29'), 3);
        this.reseña8 = new Reseña('No me impresionó, le faltó cuerpo y carácter.', true, new Date('2024-04-26'), 2);
        this.reseña9 = new Reseña('Un vino sobresaliente, con un perfil aromático muy complejo.', true, new Date('2024-05-01'), 5);
        this.reseña10 = new Reseña('Excelente sabor y textura, uno de mis favoritos.', true, new Date('2024-05-02'), 5);
        this.reseña11 = new Reseña('Un vino con excelente balance y cuerpo.', true, new Date('2020-05-15'), 5);
        this.reseña12 = new Reseña('Aromas a frutos rojos y especias, muy recomendable.', true, new Date('2020-07-18'), 4.5);
        this.reseña13 = new Reseña('Buen vino pero un poco ácido para mi gusto.', true, new Date('2020-09-20'), 3);
        this.reseña14 = new Reseña('Perfecto para maridar con quesos fuertes.', true, new Date('2021-02-10'), 4);
        this.reseña15 = new Reseña('Notas de chocolate y vainilla, simplemente delicioso.', true, new Date('2021-04-05'), 5);
        this.reseña16 = new Reseña('No fue lo que esperaba, demasiado dulce.', true, new Date('2021-06-12'), 2.5);
        this.reseña17 = new Reseña('Refrescante y con una acidez muy bien balanceada.', true, new Date('2021-08-23'), 4);
        this.reseña18 = new Reseña('Aromas intensos a flores y frutas cítricas.', true, new Date('2021-10-19'), 3);
        this.reseña19 = new Reseña('Demasiado tánico y fuerte para mi paladar.', true, new Date('2022-01-15'), 1);
        this.reseña20 = new Reseña('Suave, con toques de frutos secos y especias.', true, new Date('2022-03-22'), 4);
        this.reseña21 = new Reseña('Un vino equilibrado y complejo, ideal para ocasiones especiales.', true, new Date('2022-05-17'), 5);
        this.reseña22 = new Reseña('No está mal, pero le falta personalidad.', true, new Date('2022-07-21'), 3);
        this.reseña23 = new Reseña('No me impresionó, le faltó cuerpo.', true, new Date('2022-09-14'), 2);
        this.reseña24 = new Reseña('Un vino redondo, perfecto para acompañar carnes.', true, new Date('2022-11-08'), 5);
        this.reseña25 = new Reseña('Agradable pero no memorable.', true, new Date('2023-02-12'), 3.5);
        this.reseña26 = new Reseña('Frutal y fresco, muy fácil de beber.', true, new Date('2023-04-26'), 4);
        this.reseña27 = new Reseña('Demasiado ligero y sin profundidad.', true, new Date('2023-06-30'), 2.5);
        this.reseña28 = new Reseña('Notas de frutos del bosque y un toque de roble.', true, new Date('2023-09-05'), 4);
        this.reseña29 = new Reseña('Un vino joven con potencial de guarda.', true, new Date('2023-11-15'), 4.5);
        this.reseña30 = new Reseña('Muy agradable, con buena relación calidad-precio.', true, new Date('2024-01-25'), 4);
        this.reseña31 = new Reseña('Un vino suave y aterciopelado, perfecto para disfrutar solo.', true, new Date('2020-07-15'), 4);
        this.reseña32 = new Reseña('Aromas a frutas maduras y especias, un vino intenso y elegante.', true, new Date('2020-09-18'), 4.5);
        this.reseña33 = new Reseña('Notas a cacao y tabaco, un vino complejo y bien estructurado.', true, new Date('2020-12-22'), 3.6);
        this.reseña34 = new Reseña('Un vino con carácter y personalidad, ideal para acompañar una buena comida.', true, new Date('2021-03-10'), 4.3);
        this.reseña35 = new Reseña('Aromas a frutos negros y notas a madera, un vino potente y equilibrado.', true, new Date('2021-05-05'), 4.3);
        this.reseña36 = new Reseña('Un vino elegante y sedoso, con un final persistente.', true, new Date('2021-08-08'), 4.7);
        this.reseña37 = new Reseña('Gran intensidad aromática, un vino que deja una impresión duradera.', true, new Date('2021-10-12'), 4.9);
        this.reseña38 = new Reseña('Notas a frutos rojos y especias, un vino fresco y fácil de beber.', true, new Date('2022-02-18'), 4.2);
        this.reseña39 = new Reseña('Un vino con buen potencial de guarda, se espera que mejore con el tiempo.', true, new Date('2022-04-25'), 4.6);
        this.reseña40 = new Reseña('Excelente relación calidad-precio, un vino para disfrutar en cualquier ocasión.', true, new Date('2022-06-30'), 4.4);
        this.reseña41 = new Reseña('Notas a frutas maduras y especias, un vino intenso y equilibrado.', true, new Date('2022-09-08'), 4.5);
        this.reseña42 = new Reseña('Un vino potente y estructurado, ideal para maridar con carnes.', true, new Date('2022-11-11'), 4.7);
        this.reseña43 = new Reseña('Aromas a frutas negras y vainilla, un vino complejo y elegante.', true, new Date('2023-01-15'), 4.8);
        this.reseña44 = new Reseña('Un vino redondo y equilibrado, con un final largo y agradable.', true, new Date('2023-04-02'), 3.8);
        this.reseña45 = new Reseña('Notas a frutos secos y especias, un vino con mucha personalidad.', true, new Date('2023-06-12'), 4.6);
        this.reseña46 = new Reseña('Un vino suave y sedoso, con taninos suaves y bien integrados.', true, new Date('2023-08-20'), 4.1);
        this.reseña47 = new Reseña('Aromas a frutas rojas y flores, un vino fresco y elegante.', true, new Date('2023-10-25'), 4.4);
        this.reseña48 = new Reseña('Un vino con buena acidez y frescura, ideal para disfrutar en verano.', true, new Date('2024-01-05'), 4.7);
        
        // instanciamos los varietales
        this.varietal1 = new Varietal('Malbec', 100);
        this.varietal2 = new Varietal('Cabernet Sauvignon', 60);
        this.varietal3 = new Varietal('Merlot', 40);
        this.varietal4 = new Varietal('Chardonnay', 80);
        this.varietal5 = new Varietal('Pinot Noir', 50);
        this.varietal6 = new Varietal('Tempranillo', 70);
        this.varietal7 = new Varietal('Syrah', 90);
        this.varietal8 = new Varietal('Sauvignon Blanc', 65);
        this.varietal9 = new Varietal('Garnacha', 55);
        this.varietal10 = new Varietal('Torrontés', 45);

        // instanciamos los vinos
        this.vino1 = new Vino("Catena Zapata Malbec", [this.varietal1], 2024, this.bodega1, 1000, [this.reseña1, this.reseña2, this.reseña3, this.reseña4], 3);
        this.vino2 = new Vino("Casillero del Diablo Cabernet", [this.varietal2, this.varietal3], 2024, this.bodega2, 1200, [this.reseña5, this.reseña6, this.reseña7, this.reseña8], 3);
        this.vino3 = new Vino("Marqués de Riscal Chardonnay", [this.varietal4], 2023, this.bodega3, 900, [this.reseña9, this.reseña10,this.reseña11], 5);
        this.vino4 = new Vino("Bodegas López Pinot Noir", [this.varietal5], 2023, this.bodega4, 1100, [this.reseña12, this.reseña13,this.reseña14,this.reseña15, this.reseña46, this.reseña47], 4);
        this.vino5 = new Vino("Marqués de Riscal Tempranillo", [this.varietal6], 2022, this.bodega3, 1050, [this.reseña16, this.reseña17,this.reseña18,this.reseña19,this.reseña20], 4.8);
        this.vino6 = new Vino("Freixenet Syrah", [this.varietal7], 2023, this.bodega5, 1150, [this.reseña21, this.reseña22], 4.2);
        this.vino7 = new Vino("Concha y Toro Sauvignon Blanc", [this.varietal8], 2022, this.bodega2, 950, [this.reseña23, this.reseña24, this.reseña48], 4);
        this.vino8 = new Vino("Freixenet Garnacha", [this.varietal9], 2024, this.bodega5, 1020, [this.reseña25, this.reseña26], 4);
        this.vino9 = new Vino("Catena Zapata Torrontés", [this.varietal10], 2023, this.bodega1, 980, [this.reseña27, this.reseña28,this.reseña29], 3.7);
        this.vino10 = new Vino("Bodegas López Merlot", [this.varietal3], 2023, this.bodega4, 1050, [this.reseña30], 4.5);
        this.vino11 = new Vino("Luigi Bosca Malbec", [this.varietal1], 2023, this.bodega1, 980, [this.reseña11, this.reseña12, this.reseña13], 4.2);
        this.vino12 = new Vino("Clos de los Siete Red Blend", [this.varietal2, this.varietal3, this.varietal9], 2022, this.bodega2, 1100, [this.reseña14, this.reseña15, this.reseña16], 4.6);
        this.vino13 = new Vino("Almaviva", [this.varietal2, this.varietal7], 2023, this.bodega1, 1250, [this.reseña17, this.reseña18, this.reseña19, this.reseña44, this.reseña45], 4.5);
        this.vino14 = new Vino("Viña Cobos Malbec", [this.varietal1], 2023, this.bodega3, 1050, [this.reseña20, this.reseña21, this.reseña22], 4.4);
        this.vino15 = new Vino("Montes Alpha Cabernet Sauvignon", [this.varietal2], 2022, this.bodega4, 950, [this.reseña23, this.reseña24, this.reseña25], 4.1);
        this.vino16 = new Vino("Carmín de Peumo Carmenere", [this.varietal4], 2023, this.bodega3, 1200, [this.reseña26, this.reseña27, this.reseña28], 2);
        this.vino17 = new Vino("Terrazas de los Andes Malbec", [this.varietal1], 2022, this.bodega3, 1000, [this.reseña29, this.reseña30, this.reseña31], 4.3);
        this.vino18 = new Vino("Don Melchor Cabernet Sauvignon", [this.varietal2], 2023, this.bodega2, 1150, [this.reseña32, this.reseña33, this.reseña34], 4);
        this.vino19 = new Vino("Casa Lapostolle Clos Apalta", [this.varietal2, this.varietal6, this.varietal7], 2023, this.bodega3, 1300, [this.reseña35, this.reseña36, this.reseña37, this.reseña38], 4.9);
        this.vino20 = new Vino("Zuccardi Q Malbec", [this.varietal1], 2023, this.bodega4, 980, [this.reseña41, this.reseña39, this.reseña40, this.reseña42, this.reseña43], 3);

    }
    
    getVinos(){
        return [this.vino1, this.vino2, this.vino3,this.vino4, this.vino5, this.vino6, this.vino7, this.vino8, this.vino9, this.vino10, this.vino11, this.vino12, this.vino13, this.vino14, this.vino15, this.vino16, this.vino17, this.vino18, this.vino19, this.vino20];
    }
}
