import { teclado } from './herramientas.js';
function esAnioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0);
}
export function pedirFechaVencimiento() {
    let anio, mes, dia = 0, band = -1, hora, fechaVencimiento;
    anio = Number(teclado("Ingrese el año de vencimiento: "));
    while (isNaN(anio) || anio < 1000 || anio > 9999) {
        anio = Number(teclado("   año de vencimiento ingresado inválido, ingrese nuevamente: "));
    }
    mes = Number(teclado("Ingrese el mes de vencimiento(1 al 12): "));
    while (isNaN(mes) || (mes < 1 || mes > 12)) {
        mes = Number(teclado("    mes de vencimiento ingresado inválido, ingrese nuevamente: "));
    }
    do {
        if (band >= 0) {
            console.log("   ERROR: ingresó un dia inválido.");
        }
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dia = Number(teclado("Ingrese el dia de vencimiento:(1 al 31) "));
                if (dia < 1 || dia > 31) {
                    dia = NaN;
                }
                break;
            case 2:
                if (esAnioBisiesto(anio)) {
                    dia = Number(teclado("Ingrese el dia de vencimiento:(1 al 29) "));
                    if (dia < 1 || dia > 29) {
                        dia = NaN;
                    }
                }
                else {
                    dia = Number(teclado("Ingrese el dia de vencimiento:(1 al 28) "));
                    if (dia < 1 || dia > 28) {
                        dia = NaN;
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dia = Number(teclado("Ingrese el dia de vencimiento:(1 al 30) "));
                if (dia < 1 || dia > 30) {
                    dia = NaN;
                }
                break;
        }
        band++;
    } while (isNaN(dia));
    hora = Number(teclado("Ingrese la hora de vencimiento(ingrese valores enteros de 0 a 23): "));
    while (isNaN(hora) || (hora < 0 || hora > 23)) {
        hora = Number(teclado("    hora de vencimiento ingresado inválido, ingrese nuevamente: "));
    }
    fechaVencimiento = new Date(anio, mes - 1, dia, hora);
    return fechaVencimiento;
}
