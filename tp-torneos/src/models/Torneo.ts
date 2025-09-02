import { Partido } from "./Partido.js";
export class Torneo {
    readonly id: string;
    nombre: string;
    private partidos: Partido[];

    constructor(id: string, nombre: string, partidos: Partido[]) {
        this.id = id;
        this.nombre = nombre;
        this.partidos = [];
    }

    programarPartido(partido: Partido): void {
        this.partidos.push(partido);
    }

    listarPartidos(): string[] {
        return this.partidos.map((partido) => partido.toString());
    }

    buscarPartido(id: string): Partido | undefined {
        return this.partidos.find((partido) => partido.id === id);
    }
}