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
    throw new Error("Los equipos no cumplen con las reglas del deporte");
  }

  // Simular un resultado aleatorio
  const golesLocal = Math.floor(Math.random() * 6);      // 0 a 5
  const golesVisitante = Math.floor(Math.random() * 6); // 0 a 5

  this.resultado = new Resultado(golesLocal, golesVisitante);
}

    toString(): string {
  const res = this.resultado
    ? this.resultado.toString()
    : "Partido aún no jugado";

  return `${this.local.toString()} vs ${this.visitante.toString()} en ${this.deporte.nombre} → ${res}`;
}
}