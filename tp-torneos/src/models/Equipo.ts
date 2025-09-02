import type { ICompetidor } from "../interfaces/Icompetidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
    nombre: string;
    private jugadores: Jugador[];

    constructor(nombre: string, jugadores: Jugador[]) {
        this.nombre = nombre;
        this.jugadores = jugadores;
    }

    agregarJugador(jugador: Jugador): void {
        this.jugadores.push(jugador);
    }

    listarIntegrantes(): string[] {
        return this.jugadores.map((jugador) => jugador.toString());
    }

    toString(): string {
        return `${this.nombre} tiene ${this.jugadores.length} integrantes`;
    }

    get Cantidad(): number {
        return this.jugadores.length;
    }
}