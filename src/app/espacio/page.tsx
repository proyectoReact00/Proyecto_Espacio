'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes fadeInSlow {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInSlow {
        animation: fadeInSlow 2s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Efecto de typing
  useEffect(() => {
    const text = "Misterios y datos fascinantes del universo";
    const element = document.getElementById("typing");
    let index = 0;

    if (!element) return;

    element.textContent = "";

    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const caracteristicas = [
    {
      title: '🌞 Estrellas',
      text: 'Son gigantes esferas de plasma que generan luz y calor mediante fusión nuclear. El Sol es la estrella más cercana a la Tierra.',
      pos: 'top-8 left-6',
    },
    {
      title: '🌍 Planetas',
      text: 'Cuerpos celestes que orbitan estrellas. En el sistema solar hay ocho, incluyendo la Tierra, cada uno con características únicas.',
      pos: 'top-8 right-6',
    },
    {
      title: '🌌 Galaxias',
      text: 'Conjuntos masivos de estrellas, polvo, gas y materia oscura. La Vía Láctea es nuestra galaxia y alberga cientos de miles de millones de estrellas.',
      pos: 'top-55 left-4',
    },
    {
      title: '🌑 Lunas',
      text: 'Satélites naturales que orbitan planetas. La Luna de la Tierra influye en mareas y fue clave para la exploración espacial.',
      pos: 'top-55 right-4',
    },
    {
      title: '🪐 Gravedad',
      text: 'Fuerza fundamental que mantiene los planetas en órbita y da forma al universo. Sin ella, no existirían galaxias ni sistemas planetarios.',
      pos: 'top-[14%] left-[20%]',
    },
    {
      title: '💫 Agujeros Negros',
      text: 'Regiones del espacio con gravedad tan intensa que ni la luz puede escapar. Se forman tras el colapso de estrellas masivas.',
      pos: 'top-[14%] right-[20%]',
    },
    {
      title: '🚀 Exploración Espacial',
      text: 'La humanidad ha enviado sondas, telescopios y astronautas para estudiar el universo, logrando descubrimientos sin precedentes.',
      pos: 'top-[60%] left-8',
    },
    {
      title: '🧬 Materia Oscura',
      text: 'Sustancia invisible que compone gran parte del universo. No emite luz ni energía, pero afecta la gravedad a gran escala.',
      pos: 'top-[60%] right-8',
    },
    {
      title: '⚡ Energía Oscura',
      text: 'Una forma de energía que impulsa la expansión acelerada del universo. Su naturaleza exacta sigue siendo un misterio.',
      pos: 'bottom-36 left-[20%]',
    },
    {
      title: '🛰️ Telescopios Espaciales',
      text: 'Instrumentos como Hubble o James Webb permiten observar regiones profundas del cosmos sin la interferencia de la atmósfera terrestre.',
      pos: 'bottom-36 right-[20%]',
    },
    {
      title: '☄️ Cometas y Asteroides',
      text: 'Pequeños cuerpos rocosos o de hielo que orbitan el Sol. Pueden revelar información del origen del sistema solar.',
      pos: 'bottom-16 left-6',
    },
    {
      title: '🌠 Nebulosas',
      text: 'Nubes de gas y polvo donde nacen nuevas estrellas. Algunas son visibles desde la Tierra como la nebulosa de Orión.',
      pos: 'bottom-16 right-6',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fondo de video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/blackhole.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Título animado */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-30 animate-fadeInSlow">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-white to-purple-500 bg-clip-text text-transparent drop-shadow-md">
          Exploración Al Infinito
        </h1>
        <p
          id="typing"
          className="mt-3 text-base md:text-xl text-white/80 font-medium tracking-wide italic drop-shadow-sm whitespace-nowrap overflow-hidden border-r-2 border-white pr-2 max-w-full"
        ></p>
      </div>

      {/* Características distribuidas */}
      {caracteristicas.map((c, i) => (
        <div
          key={i}
          className={`absolute ${c.pos} w-[270px] max-w-[90vw] p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-md border border-white/20 z-20`}
        >
          <h3 className="text-base font-semibold mb-2">{c.title}</h3>
          <p className="text-sm text-white/90 leading-snug">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
