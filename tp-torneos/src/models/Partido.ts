import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";
import { Resultado } from "./Resultado.js";

export class Partido {
    readonly id: string;
    local: Equipo;
    visitante: Equipo;
    deporte: Deporte;
    resultado?: Resultado;

    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
        if (local.nombre === visitante.nombre) {
            throw new Error("Los equipos no pueden ser iguales");
        }
        
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
    }

    jugar(): void {
    if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
      throw new Error("Los equipos no pueden jugar el partido");
    }
}

    toString(): string {
        return `${this.local} vs ${this.visitante} en ${this.deporte}`;
    }
}