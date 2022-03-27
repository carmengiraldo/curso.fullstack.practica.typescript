export class Directorio {
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
