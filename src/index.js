import './components/Counter.js';
import { logger } from './utils/logger.js';
import { globalState } from './state/globalState.js';

// Función de inicialización para configurar la aplicación
function initializeApp() {
    logger.log('Inicializando la aplicación...', 'info');

    // Configuración inicial del estado global
    globalState.suscribirObservador((propiedad, valor) => {
        logger.log(`El estado global ha cambiado: ${propiedad} = ${valor}`, 'debug');
    });

    // Inicializar el contador a 0 en lugar de 1
    globalState.actualizarEstado('contador', 0);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp(); // Llama a la función de inicialización cuando el DOM esté listo
});