class globalState {
    constructor() {
        this._estado = {
            contador: 0
        };
        this.observadores = [];
    }

    obtenerEstado(propiedad) {
        return this._estado[propiedad];
    }

    actualizarEstado(propiedad, valor) {
        this._estado[propiedad] = valor;
        this.notificarObservadores(propiedad, valor);
    }

    suscribirObservador(observador) {
        this.observadores.push(observador);
    }

    notificarObservadores(propiedad, valor) {
        this.observadores.forEach(observador => observador(propiedad, valor));
    }
}

export const globalState = new globalState();
