import { Persona } from "./Persona";

export class Directorio {
    private personas:Array<Persona>;

    constructor() {
        this.personas = [];
    }

    agregarPersona(persona:Persona) {
        this.personas[this.personas.length] = persona;
    }

    buscarPorDni(dni:string) {
        return this.personas.find(persona => persona.dni === dni);
    }

    public mostrar() {
        return this.personas.forEach(persona => console.log(persona.toString()));
    }
}