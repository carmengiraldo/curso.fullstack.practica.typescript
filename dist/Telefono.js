export class Telefono {
    _tipo;
    _numero;
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }
    toString() {
        return `\n\t* ${this.numero} (${this.tipo})`;
    }
}
