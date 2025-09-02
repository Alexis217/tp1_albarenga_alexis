import type { IIdentificable } from "../interfaces/IIdentificable.js";
export class Jugador implements IIdentificable {
    readonly id: string;
    nombre: string;
    edad: number;
    posicion?: string | undefined;

    constructor(id: string, nombre: string, edad: number, posicion?: string | undefined) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    toString(): string {
        return `${this.nombre} es ${this.edad} años`;
    }
}