export class Direccion {
    _calle;
    _numero;
    _piso;
    _letra;
    _codigoPostal;
    _poblacion;
    _provincia;
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    set calle(calle) {
        this._calle = calle;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set piso(piso) {
        this._piso = piso;
    }
    set letra(letra) {
        this._letra = letra;
    }
    set codigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    get poblacion() {
        return this._poblacion;
    }
    get provincia() {
        return this._provincia;
    }
    toString() {
        return `\n\t* ${this.calle} ${this.numero}, ${this.piso} ${this.letra}, ${this.codigoPostal}, ${this.poblacion}, ${this.provincia}`;
    }
}
