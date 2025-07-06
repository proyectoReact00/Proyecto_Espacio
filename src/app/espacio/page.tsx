'use client';

import { useEffect } from 'react';

export default function Home() {


  
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
      pos: 'top-[20vh] left-[5vw] lg:left-[10vw] xl:left-[15vw]', 
    },
    {
      title: '🌍 Planetas',
      text: 'Cuerpos celestes que orbitan estrellas. En el sistema solar hay ocho, incluyendo la Tierra, cada uno con características únicas.',
      pos: 'top-[20vh] right-[5vw] lg:right-[10vw] xl:right-[15vw]', 
    },
    {
      title: '🌌 Galaxias',
      text: 'Conjuntos masivos de estrellas, polvo, gas y materia oscura. La Vía Láctea es nuestra galaxia y alberga cientos de miles de millones de estrellas.',
      pos: 'top-[45vh] left-[2vw] lg:left-[5vw] xl:left-[8vw]', 
    },
    {
      title: '🌑 Lunas',
      text: 'Satélites naturales que orbitan planetas. La Luna de la Tierra influye en mareas y fue clave para la exploración espacial.',
      pos: 'top-[45vh] right-[2vw] lg:right-[5vw] xl:right-[8vw]', 
    },
    {
      title: '🪐 Gravedad',
      text: 'Fuerza fundamental que mantiene los planetas en órbita y da forma al universo. Sin ella, no existirían galaxias ni sistemas planetarios.',
      pos: 'top-[70vh] left-[5vw] lg:left-[10vw] xl:left-[15vw]',
    },
    {
      title: '💫 Agujeros Negros',
      text: 'Regiones del espacio con gravedad tan intensa que ni la luz puede escapar. Se forman tras el colapso de estrellas masivas.',
      pos: 'top-[70vh] right-[5vw] lg:right-[10vw] xl:right-[15vw]',
    },
    {
      title: '🧬 Materia Oscura',
      text: 'Sustancia invisible que compone gran parte del universo. No emite luz ni energía, pero afecta la gravedad a gran escala.',
      pos: 'bottom-[20vh] right-[25vw] lg:right-[25vw] xl:right-[30vw]', 
    },
    {
      title: '⚡ Energía Oscura',
      text: 'Una forma de energía que impulsa la expansión acelerada del universo. Su naturaleza exacta sigue siendo un misterio.',
      pos: 'top-[20vh] left-[50vw] lg:left-[40vw] xl:left-[35vw]', 
    },
    {
      title: '🛰️ Telescopios Espaciales',
      text: 'Instrumentos como Hubble o James Webb permiten observar regiones profundas del cosmos sin la interferencia de la atmósfera terrestre.',
      pos: 'top-[25vh] right-[55vw] lg:right-[90vw] xl:right-[40vw]', 
    },
    {
      title: '☄️ Cometas y Asteroides',
      text: 'Pequeños cuerpos rocosos o de hielo que orbitan el Sol. Pueden revelar información del origen del sistema solar.',
      pos: 'bottom-[28vh] left-[35vw] lg:left-[40vw] xl:left-[35vw]', 
    },
    {
      title: '🌠 Nebulosas',
      text: 'Nubes de gas y polvo donde nacen nuevas estrellas. Algunas son visibles desde la Tierra como la nebulosa de Orión.',
      pos: 'bottom-[45vh] right-[35vw] lg:right-[40vw] xl:right-[35vw]', 
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
 
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/blackhole.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/95 z-10" />


      <div className="absolute top-[10vh] left-1/2 transform -translate-x-1/2 text-center z-50 animate-title-slide-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Exploración Al Infinito
        </h1>
        <p
          id="typing"
          className="mt-3 text-base md:text-xl text-white font-medium tracking-wide italic drop-shadow-sm whitespace-nowrap overflow-hidden border-r-2 border-white pr-2 max-w-full"
        ></p>
      </div>

 
      {caracteristicas.map((c, i) => (
        <div
          key={i}

          className={`absolute ${c.pos} w-[260px] md:w-[280px] max-w-[90vw] p-4 rounded-2xl bg-black/[0.6] backdrop-blur-sm shadow-xl z-20 transition-all duration-300 ease-in-out hover:scale-105 card-glow card-reveal-text`}
          style={{ animation: `cardFadeIn 0.8s ease-out forwards ${0.1 * i}s` }}
        >

          <h3 className="text-base font-semibold mb-2 text-black">{c.title}</h3>


          <p className="text-sm text-black/90 leading-snug card-description">{c.text}</p>
        </div>
      ))}
    </div>
  );
}