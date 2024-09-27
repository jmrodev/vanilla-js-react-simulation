import { globalState } from '../state/globalState.js';
import { logger } from '../utils/logger.js';

document.addEventListener('DOMContentLoaded', () => {
    function actualizarUI() {
        const valor = globalState.obtenerEstado('contador');
        document.getElementById('valorContador').textContent = valor;
        logger.log(`UI actualizada: contador = ${valor}`, 'debug');
    }

    globalState.suscribirObservador((propiedad) => {
        if (propiedad === 'contador') {
            actualizarUI();
        }
    });

    const btnIncrementar = document.getElementById('btnIncrementar');
    if (btnIncrementar) {
        btnIncrementar.addEventListener('click', () => {
            const valorActual = globalState.obtenerEstado('contador');
            globalState.actualizarEstado('contador', valorActual + 1);
            logger.log('Botón incrementar clickeado', 'info');
        });
    } else {
        logger.log('El botón de incrementar no se encontró en el DOM', 'error');
    }
});