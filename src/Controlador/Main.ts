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
    bodega: Bodega;
    pais: Pais;
    provincia: Provincia;
    regionVitivinicola: RegionVitivinicola;
    reseña1: Reseña;
    reseña2: Reseña;
    reseña3: Reseña;
    reseña4: Reseña;
    reseña5: Reseña;
    reseña6: Reseña;
    reseña7: Reseña;
    reseña8: Reseña;
    varietal1: Varietal;
    varietal2: Varietal;
    varietal3: Varietal;
    
    constructor() {

        //instanciamos los paises
        this.pais = new Pais('Argentina');
        const pais2 = new Pais('Chile');
        const pais3 = new Pais('España');

        //instanciamos las provincias
        this.provincia = new Provincia('Mendoza', this.pais);

        //instanciamos las regiones vitivinicolas
        this.regionVitivinicola = new RegionVitivinicola('region uvu', 'descripcion', this.provincia);

        //instanciamos las bodegas
        this.bodega = new Bodega('bodega', 'descripcion', 'historia', ['125','256'], 'periodo', this.regionVitivinicola);

        //instanciamos las reseñas
        this.reseña1 = new Reseña('es muy bueno el vino', true, new Date('2024-04-22'), 5);
        this.reseña2 = new Reseña('es muy bueno', true, new Date('2024-04-15'), 5);
        this.reseña3 = new Reseña('es muy bueno la verdad', true, new Date('2024-04-20'), 5);
        this.reseña4 = new Reseña('no es muy bueno', true, new Date('2024-04-18'), 2);
        this.reseña5 = new Reseña('con un sabor a dulce', true, new Date('2024-04-22'), 5);
        this.reseña6 = new Reseña('es rico', true, new Date('2024-04-22'), 4);
        this.reseña7 = new Reseña('esta bien', true, new Date('2024-04-29'), 3);
        this.reseña8 = new Reseña('no me gusto', true, new Date('2024-04-26'), 2);

        //instanciamos el varietal
        this.varietal1 = new Varietal('Malbec', 100);
        this.varietal2 = new Varietal('Cabernet Sauvignon', 60);
        this.varietal3 = new Varietal('Merlot', 40);

        //instanciamos los vinos
        this.vino1 = new Vino("Vino malbec", [this.varietal1], 2024, this.bodega, 1000, [this.reseña1, this.reseña2, this.reseña3, this.reseña4], 4.25);
        this.vino2 = new Vino("Vino cabernet", [this.varietal2, this.varietal3], 2024, this.bodega, 1200, [this.reseña5, this.reseña6, this.reseña7, this.reseña8], 3);
                
    }
    
    getVinos(){
        return [this.vino1, this.vino2];
    }
}
