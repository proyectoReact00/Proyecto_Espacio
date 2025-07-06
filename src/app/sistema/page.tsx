'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SistemaSolarPage() {
  const planetas = [
    {
      nombre: '☀️ Sol',
      descripcion: 'Es una estrella amarilla que representa más del 99.8% de la masa del sistema solar.',
      estilo: 'top-[18%] left-[49%]',
    },
    {
      nombre: '🪐 Júpiter',
      descripcion: 'El planeta más grande del sistema solar, con una atmósfera densa de hidrógeno y helio.',
      estilo: 'top-[45%] left-[8%]',
    },
    {
      nombre: '🌑 Mercurio',
      descripcion: 'El planeta más cercano al Sol, sin atmósfera significativa y con temperaturas extremas.',
      estilo: 'top-[59%] left-[26%]',
    },
    {
      nombre: '🟡 Venus',
      descripcion: 'Segundo planeta del sistema solar, conocido por su atmósfera densa y temperaturas extremas.',
      estilo: 'top-[50%] left-[31%]',
    },
    {
      nombre: '🌍 Tierra',
      descripcion: 'Nuestro hogar, el único planeta conocido con vida y agua líquida en su superficie.',
      estilo: 'top-[65%] left-[80%]',
    },
    {
      nombre: '🔴 Marte',
      descripcion: 'Conocido como el planeta rojo, por su superficie rica en óxido de hierro.',
      estilo: 'top-[60%] left-[92%]',
    },
    {
      nombre: '🟤 Saturno',
      descripcion: 'Famoso por sus impresionantes anillos formados por hielo y roca.',
      estilo: 'top-[47%] left-[69%]',
    },
    {
      nombre: '🔵 Urano',
      descripcion: 'Un gigante helado que gira de lado, con un color azul verdoso por su metano.',
      estilo: 'top-[52%] left-[22%]',
    },
    {
      nombre: '🟣 Neptuno',
      descripcion: 'El planeta más lejano del Sol, con fuertes vientos y color azul profundo.',
      estilo: 'top-[50%] left-[86%]',
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/system.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

  
      <div className="absolute top-8 w-full text-center z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow-lg">
          Viaje Interactivo al Sistema Solar
        </h1>
        <p className="text-black mt-2 text-lg italic">
          Explora los planetas como nunca antes
        </p>
      </div>

      {planetas.map((p, index) => (
        <div
          key={index}
          className={`absolute ${p.estilo} z-20`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <span
            className={`text-lg md:text-xl font-bold px-4 py-2 rounded-full bg-black/50 cursor-pointer hover:scale-110 transition-all duration-300 ${p.nombre === '☀️ Sol' ? 'text-black' : 'text-white'}`}
          >
            {p.nombre}
          </span>

          {hovered === index && (
            <div
              className="absolute top-10 left-1/2 -translate-x-1/2 w-64 p-4 rounded-xl bg-white/[0.8] backdrop-blur-sm shadow-lg animate-fadeIn"
            >
              {/* CAMBIO CLAVE AQUÍ: Título de la descripción */}
              <h3 className={`text-base font-bold mb-1 ${p.nombre === '☀️ Sol' ? 'text-black' : 'text-black'}`}>{p.nombre}</h3>
              {/* CAMBIO CLAVE AQUÍ: Párrafo de la descripción */}
              <p className={`text-sm leading-snug ${p.nombre === '☀️ Sol' ? 'text-black/90' : 'text-black/90'}`}>{p.descripcion}</p>
            </div>
          )}
        </div>
      ))}

      {/* Animación fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}