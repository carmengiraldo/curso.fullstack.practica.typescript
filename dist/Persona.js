export class Persona {
    _nombre;
    _apellidos;
    _edad;
    _dni;
    _cumpleanos;
    _colorfavorito;
    _sexo;
    _notas;
    _telefonos;
    _mails;
    _direcciones;
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorfavorito, sexo, notas, telefonos = [], mails = [], Direcciones = []) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorfavorito = colorfavorito;
        this._sexo = sexo;
        this._notas = notas;
        this._mails = mails;
        this._telefonos = telefonos;
        this._direcciones = Direcciones;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set cumpleaños(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    set colorfavorito(colorfavorito) {
        this._colorfavorito = colorfavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set notas(notas) {
        this._notas = notas;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    set mails(mails) {
        this._mails = mails;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    get colorfavorito() {
        return this._colorfavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get notas() {
        return this._notas;
    }
    get telefonos() {
        return this._telefonos;
    }
    get mails() {
        return this._mails;
    }
    get direcciones() {
        return this._direcciones;
    }
    agregarTelefono(telefono) {
        this.telefonos[this.telefonos.length] = telefono;
    }
    agregarDireccion(direccion) {
        this.direcciones[this.direcciones.length] = direccion;
    }
    agregarMail(mail) {
        this.mails[this.mails.length] = mail;
    }
    toString() {
        const meses = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiempre', 'octubre', 'noviembre', 'diciembre'
        ];
        return `
=====================================
${this.apellidos}, ${this.nombre}
=====================================
Edad: ${this.edad}
DNI: ${this.dni}
Cumpleaños: ${this.cumpleanos.getDate()} de ${meses[this.cumpleanos.getMonth()]} de ${this.cumpleanos.getFullYear()}
Color Favorito: ${this.colorfavorito}
Sexo: ${this.sexo}
Notas: ${this.notas}
Telefonos: ${this.telefonos}
Correos: ${this.mails}
Direcciones: ${this.direcciones}
      `;
    }
}
