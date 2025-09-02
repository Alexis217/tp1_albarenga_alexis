export class Resultado {
    golesLocal: number;
    golesVisitante: number;

    constructor(golesLocal: number, golesVisitante: number) {
        this.golesLocal = golesLocal
        this.golesVisitante = golesVisitante
    }

    toString(): string {
        return `${this.golesLocal} goles local y ${this.golesVisitante} goles visitante`
    }
}