// app/comentarios/page.tsx
'use client'; // <-- ¡IMPORTANTE! Marca esto como un componente cliente

import React, { useState } from 'react';
import styles from './ComentariosPage.module.css'; // Importa el módulo CSS

const ComentariosPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState(''); // Para mostrar mensajes al usuario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)

    setMessage('Enviando comentario...');

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // <--- ¡Esto es CRÍTICO! Indica que el cuerpo es JSON
        },
        body: JSON.stringify({ name, email, comment }), // <--- Convierte los datos a JSON
      });

      const data = await res.json(); // Parsea la respuesta del API

      if (res.ok) {
        setMessage(data.message || 'Comentario enviado con éxito.');
        // Limpiar el formulario si el envío fue exitoso
        setName('');
        setEmail('');
        setComment('');
      } else {
        setMessage(data.message || 'Error al enviar el comentario.');
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('Error de red al enviar el comentario.');
    }
  };

  return (
    <div className={styles.videoBackgroundContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className={styles.formOverlay}>
        <form className={styles.futuristicForm} onSubmit={handleSubmit}> {/* <--- Usar onSubmit y no action */}
          <p className={styles.formIntroText}>Hola, déjanos tu comentario, lo tendremos en cuenta.</p>
          <h2>Contacto Futurista</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="comment">Comentario:</label>
            <textarea id="comment" name="comment" rows={5} value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
          {message && <p className={styles.messageText}>{message}</p>} {/* Muestra el mensaje al usuario */}
        </form>
      </div>
    </div>
  );
};

export default ComentariosPage;