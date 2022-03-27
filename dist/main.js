import { Direccion } from './Direccion';
import { Directorio } from './Directorio';
import { Mail } from './Mail';
import { Persona } from './Persona';
import { Telefono } from './Telefono';
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
;
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
