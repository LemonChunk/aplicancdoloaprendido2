import * as h from './herramientas.js';
import * as l from './ListaTareas.js';
import * as m from './menus.js';
import * as t from './Tarea.js';
export function opcion1() {
    let menuVer = -1;
    if (l.listaTareas.length === 0) {
        console.log("No tienes tareas agendadas para ver.");
        h.esperarTeclaParaContinuar();
    }
    else {
        do {
            h.limpiarPantalla();
            menuVer = m.menuVerTareas();
            h.limpiarPantalla();
            switch (menuVer) {
                case "1":
                    l.verTodas();
                    break;
                case "2":
                    l.verConCondicion("PENDIENTE");
                    break;
                case "3":
                    l.verConCondicion("EN CURSO");
                    break;
                case "4":
                    l.verConCondicion("TERMINADA");
                    break;
                case "0":
                    console.log("Volviendo al menú anterior.");
                    h.esperarTeclaParaContinuar();
                    break;
                default:
                    console.log("Opción inválida.");
                    h.esperarTeclaParaContinuar();
                    break;
            }
        } while (menuVer != "0");
    }
}
export function opcion2() {
    let cadena;
    if (l.listaTareas.length === 0) {
        console.log("No tienes tareas para buscar.");
        h.esperarTeclaParaContinuar();
    }
    else {
        console.log("Introduce el título de una tarea para buscarla: ");
        cadena = h.teclado("> ");
        l.buscarTarea(cadena);
    }
}
export function opcion3() {
    let menuAgregar = '-1';
    let tareaNueva;
    tareaNueva = t.crearTarea();
    do {
        h.limpiarPantalla();
        menuAgregar = m.menuAgregarTarea(tareaNueva);
        h.limpiarPantalla();
        switch (menuAgregar) {
            case "1":
                tareaNueva.titulo = t.ingresarTitulo();
                break;
            case "2":
                tareaNueva.descripcion = t.ingresarDescripcion();
                break;
            case "3":
                t.ingresarEstado(tareaNueva);
                break;
            case "4":
                t.ingresarDificultad(tareaNueva);
                break;
            case "5":
                tareaNueva.fechaVencimiento = t.ingresarFechaVencimiento();
                break;
            case "X":
                console.log("Tarea cancelada, volviendo al menú principal.");
                h.esperarTeclaParaContinuar();
                break;
            case "0":
                if (tareaNueva.titulo === "Sin título") {
                    menuAgregar = '-1';
                    console.log("No se puede agregar la tarea sin título.");
                    h.esperarTeclaParaContinuar();
                }
                else {
                    l.listaTareas.push(tareaNueva);
                    l.ordenarTareas();
                    console.log(`¡Tarea creada con éxito!`);
                    h.esperarTeclaParaContinuar();
                }
                break;
            default:
                console.log("Opción inválida.");
                h.esperarTeclaParaContinuar();
                break;
        }
    } while (menuAgregar != "0" && menuAgregar != "X");
}
