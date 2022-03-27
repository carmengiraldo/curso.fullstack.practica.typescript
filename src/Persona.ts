import { Telefono } from './Telefono';
import { Direccion } from './Direccion';
import { Mail } from './Mail';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: Date;
    private _colorfavorito: string;
    private _sexo: string;
    private _notas: string;
    private _telefonos: Array<Telefono>;
    private _mails:  Array<Mail>;
    private _direcciones:  Array<Direccion>;

constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorfavorito: string,
    sexo: string,
    notas: string,
    telefonos: Array<Telefono> = [],
    mails:  Array<Mail> = [],
    Direcciones:  Array<Direccion> = [],
) {   

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

set nombre(nombre: string) {
    this._nombre = nombre;
  }
set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }
set edad(edad: number) {
    this._edad = edad;
  }
set dni(dni: string) {
    this._dni = dni;
  }
set cumpleaños(cumpleanos: Date,) {
    this._cumpleanos = cumpleanos;
  }
set colorfavorito(colorfavorito: string) {
    this._colorfavorito = colorfavorito;
  }
set sexo(sexo: string) {
    this._sexo = sexo;
  }
set notas(notas: string) {
    this._notas= notas;
  }
set telefonos(telefonos: Array<Telefono>) {
    this._telefonos = telefonos;
}
set mails(mails: Array<Mail>) {
    this._mails = mails;
}
set direcciones(direcciones: Array<Direccion>) {
    this._direcciones = direcciones;
}
get nombre():string  {
    return this._nombre;
  }
get apellidos():string {
    return this._apellidos;
  }
get edad() :number {
    return this._edad;
  }
 get dni() :string {
    return this._dni;
  }
  get cumpleanos():Date{
    return this._cumpleanos;
  }
  get colorfavorito():string  {
    return this._colorfavorito;
  }
  get sexo():string  {
    return this._sexo;
  }
  get notas():string  {
    return this._notas;
  }
  get telefonos():Array<Telefono> {
    return this._telefonos;
  }
  get mails() :Array<Mail> {
    return this._mails;
  }
  get direcciones():Array<Direccion> {
    return this._direcciones;
  }

  agregarTelefono(telefono:Telefono) {
    this.telefonos[this.telefonos.length] = telefono;
  }

  agregarDireccion(direccion:Direccion) {
    this.direcciones[this.direcciones.length] = direccion;
  }

  agregarMail(mail:Mail) {
    this.mails[this.mails.length] = mail;
  }

  public toString() {
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