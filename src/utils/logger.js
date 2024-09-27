// Niveles de log
const LogLevel = {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    DEBUG: 'debug'
};

class Logger {
    constructor() {
        this.enableLogs = true; // Cambiar a false para desactivar logs en producción
    }

    log(message, level = LogLevel.INFO) {
        if (!this.enableLogs) return;

        switch (level) {
            case LogLevel.INFO:
                console.info(message);
                break;
            case LogLevel.WARN:
                console.warn(message);
                break;
            case LogLevel.ERROR:
                console.error(message);
                break;
            case LogLevel.DEBUG:
                console.debug(message);
                break;
            default:
                console.log(message);
                break;
        }
    }
}

export const logger = new Logger();