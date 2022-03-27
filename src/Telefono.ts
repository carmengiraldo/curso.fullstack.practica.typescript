export class Telefono {
  private _tipo: string;
  private _numero: string|number;

  constructor(
    tipo: string,
    numero: string|number,
    ) {

      this._tipo = tipo;
      this._numero= numero;
  }
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public set numero(numero:string|number) {
    this._numero = numero;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get numero(): string|number {
    return this._numero;
  }

  public toString() {
    return `\n\t* ${this.numero} (${this.tipo})`;
  }
}