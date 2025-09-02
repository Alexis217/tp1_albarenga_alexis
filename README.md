# 🏆 Gestión de Torneos Deportivos - CLI

Este proyecto permite **crear torneos deportivos, equipos y partidos** desde la línea de comandos usando **TypeScript** y **Node.js**.  
Se pueden gestionar jugadores, validar cupos según el deporte, y ver los resultados de los partidos.

---

## ⚙️ Tecnologías

- 🟦 **TypeScript**
- 🟩 **Node.js**
- 📦 **npm**

---

## 🚀 Funcionalidades

- 🏅 Crear torneos con nombre único.
- ⚽🏀 Crear equipos de **fútbol** o **básquet**.
- 👥 Agregar jugadores a cada equipo (con límite de cupo según el deporte).
- 📊 Programar partidos entre equipos del mismo deporte.
- 🎯 Ver los resultados de los partidos.
- ✅ Validar reglas de cada deporte (máximo de jugadores por equipo).

---

## 📋 Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/Alexis217/tp1_albarenga_alexis.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en modo desarrollo:

```bash
npm run dev
```

4. Seguir las instrucciones por consola:

   - Ingresar nombre del torneo
   - Crear equipos y agregar jugadores
   - Programar partidos
   - Ver resultados

---

## 💡 Ejemplo de flujo

```
=== Gestión de Torneo ===
Nombre del torneo: Super Liga

--- Crear equipo local ---
Nombre del equipo: Boca
¿Deporte? (futbol/basquet): futbol
Nombre del jugador: Cavani
Edad: 36
Posición (opcional): Delantero
¿Agregar otro jugador? (s/n): s
...

--- Crear equipo visitante ---
Nombre del equipo: River
...
--- Partidos programados ---
Boca tiene 11 integrantes vs River tiene 11 integrantes en Futbol → Partido aún no jugado

¿Jugar el partido? (s/n): s

Resultado aleatorio

--- Resultado ---
Boca tiene 11 integrantes vs River tiene 11 integrantes en Futbol → 3 goles local y 2 goles visitante
```

---

## 🛠️ Estructura del proyecto

```
tp-torneos/
  src/
    interfaces/
      IIdentificable.ts
      ICompetidor.ts
    models/
      Jugador.ts
      Equipo.ts
      Deporte.ts
      Futbol.ts
      Basquet.ts
      Resultado.ts
      Partido.ts
      Torneo.ts
    main.ts
  tsconfig.json
  package.json
  README.md
```

---

## 📌 Notas

- ⚠️ No se pueden agregar más jugadores de los permitidos por el deporte.
- ✅ Se valida automáticamente que los equipos cumplan las reglas antes de jugar un partido.
- 🎮 Los resultados se hacen aleatoriamente para simular un partido real.

---

## ✨ Autor

Alexis Albarenga - [GitHub](https://github.com/Alexis217)
