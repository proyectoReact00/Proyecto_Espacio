// src/app/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'; // Importar React para JSX

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('ciencia'); // <--- Añadiendo tipo string
  const router = useRouter();

  return (
    <>
      <section className="nasa-hero">
        <div className="hero-text">
          <h1>Curiosidades del Espacio</h1>
          <p>
            Explora el universo y descubre tu planeta natal con nosotros, en tu idioma.
          </p>
        </div>
        {/* Los botones de autenticación de Clerk se han movido a Navbar.tsx */}
      </section>

      <section className="tabs">
        <div
          className={`tab ${activeTab === 'ciencia' ? 'active' : ''}`}
          onClick={() => setActiveTab('ciencia')}
        >
          Ciencia
        </div>
        <div
          className={`tab ${activeTab === 'ninos' ? 'active' : ''}`}
          onClick={() => setActiveTab('ninos')}
        >
          Space Place para niños
        </div>
        <div
          className={`tab ${activeTab === 'aeronautica' ? 'active' : ''}`}
          onClick={() => setActiveTab('aeronautica')}
        >
          Aeronáutica
        </div>
      </section>

      <section className="content-section">
    
        {activeTab === 'ciencia' && (
          <div className="ciencia-section">
            <h2>Exploración Científica de la NASA</h2>
            <p className="ciencia-sub">
              La NASA lidera investigaciones científicas que nos ayudan a entender el origen del universo, la evolución de los planetas y la vida misma.
            </p>
            <div className="ciencia-contenido">
              <img src="/ciencia.jpg" alt="Imagen del espacio profundo" className="ciencia-img" />
              <div className="ciencia-texto">
                <h3>El Universo bajo la lupa</h3>
                <p>
                  Con potentes telescopios como el **James Webb** y el **Hubble**, la NASA explora regiones lejanas del universo.
                </p>
                <p>
                  Además, con misiones como **Perseverance** en Marte, se investigan rastros de vida antigua.
                </p>
                <h4>🔭 Dato Curioso:</h4>
                <p>
                  La luz de muchas estrellas comenzó su viaje hace millones o miles de millones de años. ¡Estás viendo el pasado!
                </p>
              </div>
            </div>
          </div>
        )}

    
        {activeTab === 'ninos' && (
          <div className="ninos-section">
            <h2>Space Place para niños</h2>
            <p className="ninos-sub">
              ¡Hola, exploradores pequeños! Aprende y diviértete con el espacio.
            </p>

            <div className="ninos-contenido">
              <img src="/space-kids.jpg" alt="Niños astronautas" className="ninos-img" />
              <div className="ninos-texto">
                <h3>¿Sabías qué?</h3>
                <p>
                  En el espacio no hay gravedad, por lo que los astronautas **flotan**.
                </p>
                <h4>Dato Curioso:</h4>
                <p>
                  Un día en la Estación Espacial Internacional dura solo 90 minutos.
                </p>
                <h4>Actividad divertida:</h4>
                <ol>
                  <li>Dibuja un cohete colorido y ponle un nombre especial.</li>
                  <li>¿Qué tres objetos llevarías a otro planeta?</li>
                  <li>Escribe tu mini diario de astronauta.</li>
                </ol>
              </div>
            </div>

            <p className="ninos-video-intro">
              🚀 ¡Y aquí tienes un video educativo en español sobre el origen de nuestro universo!
            </p>
            <div className="ninos-video">
              <iframe
                width="100%"
                height="315"
                src="/niños.mp4"
                title="Sistema Solar para niños - video educativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: '0', borderRadius: '10px' }}
              ></iframe>
            </div>
          </div>
        )}

        {/* Aeronáutica */}
        {activeTab === 'aeronautica' && (
          <div className="aeronautica-section">
            <h2>Innovación Aeronáutica de la NASA</h2>
            <p className="aeronautica-sub">
              La NASA impulsa avances que mejoran cómo volamos, haciendo los viajes más rápidos y eficientes.
            </p>

            <div className="aeronautica-contenido">
              <img src="/aeronautica-nasa.jpg" alt="Avión experimental X-59" className="aeronautica-img" />
              <div className="aeronautica-texto">
                <h3>Aviación silenciosa y eficiente</h3>
                <p>
                  Con proyectos como el X‑59 QueSST y X‑57 Maxwell, la NASA trabaja en tecnologías para vuelos sin boom sónico y eléctricos.
                </p>
                <h4>✈ Datos Curiosos:</h4>
                <ul>
                  <li>X‑59: vuela a Mach 1.42 sin boom sónico.</li>
                  <li>X‑57: eléctrico, silencioso y eficiente.</li>
                </ul>
              </div>
            </div>

            <p className="aeronautica-video-intro">
              🎬 Mira este video sobre el X‑59, el avión supersónico silencioso:
            </p>
            <div className="aeronautica-video">
                      <iframe
                width="100%"
                height="315"
                src="/avion.mp4"
                title="Avion superSonico silencioso Explicado"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: '0', borderRadius: '10px' }}
                ></iframe>
            </div>
          </div>
        )}
      </section>

    <button
  className="boton-flotante"
  onClick={() => window.open('https://www.spacex.com/', '_blank')}
  title="Explora SpaceX"
>
  🚀 Ir a mas  contenido
</button>
    </>
  );
}