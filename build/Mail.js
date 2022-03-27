export class Mail {
    _tipo;
    _direccion;
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }
    toString() {
        return `\n\t* ${this.direccion} (${this.tipo})`;
    }
}
