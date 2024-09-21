import prompSync from 'prompt-sync';
export const teclado = prompSync();
export function esperarTeclaParaContinuar() {
    teclado('Presiona Enter para continuar...');
}
export function limpiarPantalla() {
    process.stdout.write('\x1Bc'); // o '\033c'
}
