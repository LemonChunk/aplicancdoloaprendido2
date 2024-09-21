import { teclado } from "./herramientas";
import {pedirFechaVencimiento} from "./Fecha";
export interface Tarea{
    titulo: string;
    descripcion: string;
    dificultad: string & ("FACIL" | "MEDIO" | "DIFICIL");
    estado: string  & ('PENDIENTE' | "EN CURSO" | "TERMINADA" | "CANCELADA");
    fechaVencimiento: Date | "Sin fecha de vencimiento";
    fechaCreacion: Date;
    fechaUltimoCambio: Date;
}
export function crearTarea() {
    let tarea: Tarea = {
        titulo: "Sin título",
        descripcion: "Sin descripción",
        dificultad: "FACIL", 
        estado: "PENDIENTE", 
        fechaVencimiento: 'Sin fecha de vencimiento',
        fechaCreacion: new Date(),
        fechaUltimoCambio: new Date()
    };
    return tarea;
}
export function ingresarTitulo(){
    let titulo: string = teclado("1. Ingrese el título(obligatorio): ");
    while(titulo===""){
        titulo = teclado("   ERROR: título no puede ser nulo, Ingreselo nuevamente: ");
    }
    return titulo;
}
export function ingresarDescripcion(){
    let descripcion:string= teclado("Ingrese la descripción: ");
    return descripcion;
}
export function ingresarEstado(tarea : Tarea){
    let estado: string = teclado("3. Ingrese el estado, por defecto pendiente: [P]endiente/[E]n curso/[T]erminada/[C]ancelada: ");
    while (estado!="P" && estado!="E" && estado!="T" && estado!="C"){
        estado=teclado("   ERROR: el estado ingresado es inválido, ingrese nuevamente: ");
    }
    switch(estado){
        case 'C':
            tarea.estado="CANCELADA";
            break;
        case 'E':
            tarea.estado="EN CURSO";
            break;
        case 'P':
            tarea.estado="PENDIENTE";
            break;
        case 'T':
            tarea.estado="TERMINADA";
    }
    return tarea.estado;
}
export function ingresarDificultad(tarea : Tarea){
    let dificultad: string=teclado("4. Ingrese la dificultad, por defecto fácil: [F]ácil(⭐)/[M]edio(⭐⭐)/[D]ifícil(⭐⭐⭐): ");
    while(dificultad!="F" && dificultad!="M" && dificultad!="D"){
        dificultad=teclado("   ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ");
    }
    switch(dificultad){
        case 'D':
            tarea.dificultad='DIFICIL';
            break;
        case 'F':
            tarea.dificultad='FACIL';
            break;
        case "M":
            tarea.dificultad='MEDIO';
            break;
    }
    return tarea.dificultad;
}
export function ingresarFechaVencimiento(){
   let fechaVenciento= pedirFechaVencimiento(), fechaActual:Date= new Date();
    while(fechaVenciento<=fechaActual){
        console.log("   ERROR: ingresó una fecha que fue antes de la actual o es la actual.");
        fechaVenciento= pedirFechaVencimiento();
    }
    return fechaVenciento;
}