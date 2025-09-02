import readline from "readline";
import { Jugador } from "./tp-torneos/src/models/Jugador.js";
import { Equipo } from "./tp-torneos/src/models/Equipo.js";
import { Basquet } from "./tp-torneos/src/models/Basquet.js";
import { Futbol } from "./tp-torneos/src/models/Futbol.js";
import { Partido } from "./tp-torneos/src/models/Partido.js";
import { Torneo } from "./tp-torneos/src/models/Torneo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const preguntar = (texto: string): Promise<string> =>
  new Promise((resolve) => rl.question(texto, resolve));

async function crearEquipo(): Promise<{ equipo: Equipo; deporte: Futbol | Basquet }> {
  const nombre = await preguntar("Nombre del equipo: ");
  const tipo = await preguntar("¿Deporte? (futbol/basquet): ");

  let deporte: Futbol | Basquet;
  let maxJugadores: number;

  if (tipo.toLowerCase() === "futbol") {
    deporte = new Futbol();
    maxJugadores = deporte.maxPorEquipo; 
  } else {
    deporte = new Basquet();
    maxJugadores = deporte.maxPorEquipo; 
  }

  const equipo = new Equipo(nombre, []);

  let agregar = "s";
  while (agregar.toLowerCase() === "s") {
    if (equipo.Cantidad >= maxJugadores) {
      console.log(`⚠️ No se puede agregar más jugadores. El máximo para ${deporte.nombre} es ${maxJugadores}.`);
      break;
    }

    const id = Math.random().toString(36).substring(2, 8); // id aleatorio
    const nombreJ = await preguntar("Nombre del jugador: ");
    const edad = parseInt(await preguntar("Edad del jugador: "));
    const posicion = await preguntar("Posición (opcional, Enter para omitir): ");

    equipo.agregarJugador(new Jugador(id, nombreJ, edad, posicion || undefined));

    if (equipo.Cantidad >= maxJugadores) {
      console.log(`⚠️ Se alcanzó el límite de jugadores para ${deporte.nombre} (${maxJugadores})`);
      break;
    }

    agregar = await preguntar("¿Agregar otro jugador? (s/n): ");
  }

  console.log(`Equipo creado: ${equipo.toString()}`);
  console.log(`¿Cumple con las reglas del ${deporte.nombre}? ${deporte.validar(equipo)}`);

  return { equipo, deporte };
}


async function main() {
  console.log("=== Gestión de Torneo ===");

  const torneoNombre = await preguntar("Nombre del torneo: ");
  const torneo = new Torneo("T1", torneoNombre, []);

  console.log("\n--- Crear equipo local ---");
  const { equipo: local, deporte: deporteLocal } = await crearEquipo();

  console.log("\n--- Crear equipo visitante ---");
  const { equipo: visitante, deporte: deporteVisitante } = await crearEquipo();

  // Validar que juegan el mismo deporte
  if (deporteLocal.nombre !== deporteVisitante.nombre) {
    console.log("⚠️  Los equipos no juegan el mismo deporte, no se puede programar el partido.");
    rl.close();
    return;
  }

  const partido = new Partido("P1", local, visitante, deporteLocal);
  torneo.programarPartido(partido);

  console.log("\n--- Partidos programados ---");
  console.log(torneo.listarPartidos());

  const jugar = await preguntar("\n¿Jugar el partido? (s/n): ");
  if (jugar.toLowerCase() === "s") {
    partido.jugar();
    console.log("\n--- Resultado ---");
    console.log(partido.toString());
  }

  rl.close();
}

main();
