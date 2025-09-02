import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Futbol extends Deporte {
    constructor() {
        super("Futbol", 11);
    }

    validar(equipo: Equipo): boolean {
        return equipo.Cantidad <= this.maxPorEquipo;
    }
}