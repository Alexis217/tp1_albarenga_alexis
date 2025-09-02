import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Basquet extends Deporte {
    constructor() {
        super("Basquet", 5);
    }

    validar(equipo: Equipo): boolean {
        return equipo.Cantidad <= this.maxPorEquipo;
    }
}