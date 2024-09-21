/*npm run tsc index.ts*/
/*instalar nodemon 
 npm iD
*/

import { opcion1, opcion2, opcion3 } from "./modulos/opciones";
import { menuPrincipal } from "./modulos/menus";
import { limpiarPantalla } from "./modulos/herramientas";
let mainMenu:string='-1';
do{
    limpiarPantalla();
    mainMenu=menuPrincipal();
    limpiarPantalla();
    switch(mainMenu){
        case "1":
            opcion1();
            break;
        case "2":
            opcion2();
            break;
        case "3":
            opcion3();
            break;
        case "0":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("ERROR: opción no válida.");
            break;
    }
}while(mainMenu!="0");