// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Declaración global para evitar la instanciación múltiple de PrismaClient
// en desarrollo (hot-reloading de Next.js)
declare global {
  var prisma: PrismaClient | undefined;
}

// Inicializamos PrismaClient.
// Agregamos la opción 'log' para ver las consultas SQL y otros mensajes
// en la consola de tu terminal de desarrollo.
const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // <-- ¡Esta línea es la importante que necesitas añadir!
});

// En desarrollo, guardamos la instancia en la variable global
// para que Next.js no cree una nueva en cada hot-reload.
if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;