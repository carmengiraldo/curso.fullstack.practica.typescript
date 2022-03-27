(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class Direccion {
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

    class Directorio {
        personas;
        constructor() {
            this.personas = [];
        }
        agregarPersona(persona) {
            this.personas[this.personas.length] = persona;
        }
        buscarPorDni(dni) {
            return this.personas.find(persona => persona.dni === dni);
        }
        mostrar() {
            return this.personas.forEach(persona => console.log(persona.toString()));
        }
    }

    class Mail {
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

    class Persona {
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

    class Telefono {
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

    // Declarar Direcciones
    const direccion1 = new Direccion('calle cangrejal', 11, 252, 'A', '47001', 'Magdalena', 'Santa Marta');
    const direccion2 = new Direccion('calle del pozo', 18, 117, 'B', '47001', 'Magdalena', 'Santa Marta');
    const direccion3 = new Direccion('calle tumbacuatro', 19, 229, 'C', '47001', 'Magdalena', 'Santa Marta');
    // Declarar Mail
    const mail1 = new Mail('Correo Electronico', 'lourdes.giraldo@gmail.com');
    const mail2 = new Mail('Correo Electronico', 'diana.giraldo@gmail.com');
    const mail3 = new Mail('Correo Electronico', 'america.espinosa@gmail.com');
    // Declarar Telefono
    const telefono1 = new Telefono('Celular', '312565963');
    const telefono2 = new Telefono('Celular', '310724813');
    const telefono3 = new Telefono('Celular', '300622883');
    const directorio = new Directorio();
    // Declarar Persona
    const persona1 = new Persona('lourdes', 'giraldo', 28, '1082890369', new Date(1995, 11, 17), 'rosa', 'mujer', 'Le gusta bailar', [telefono1], [mail1], [direccion1]);
    const persona2 = new Persona('diana', 'giraldo', 40, '85468395', new Date(1982, 5, 9), 'verde', 'mujer', 'Le gusta realizar actividades por la comunidad', [telefono2], [mail2], [direccion2]);
    const persona3 = new Persona('lamerica', 'espinosa', 70, '7235654', new Date(1952, 11, 3), 'negro', 'mujer', 'Le gusta ir al bingo', [telefono3], [mail3], [direccion3]);
    directorio.agregarPersona(persona1);
    directorio.agregarPersona(persona2);
    directorio.agregarPersona(persona3);
    // Mostrar todo el directorio
    directorio.mostrar();
    // Buscar por DNI
    const lourdes = directorio.buscarPorDni('1082890369');
    //Agrega teléfono
    lourdes.agregarTelefono(new Telefono('Fijo', '3105555555'));
    lourdes.agregarMail(new Mail('movil', 'lourdes95@yahoo.com'));
    lourdes.agregarDireccion(new Direccion('calle Benidorn', 29, 0, 'C', '28017', 'Madrid', 'Madrid'));
    console.log('.........:: Despues de cambios ::.............');
    console.log(lourdes.toString());

}));
