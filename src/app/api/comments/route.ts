// src/app/api/comments/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Asegúrate que esta línea es correcta

export async function POST(request: Request) {
  // --- ESTA ES LA LÍNEA CRÍTICA ---
  console.log('*** API ROUTE DE COMENTARIOS INICIADA ***'); 
  // --- FIN DE LÍNEA CRÍTICA ---

  try {
    const body = await request.json();
    console.log('Cuerpo recibido:', body); // Para ver si los datos llegan

    const { name, email, comment } = body;

    if (!name || !email || !comment) {
      console.warn('Datos incompletos:', { name, email, comment });
      return NextResponse.json({ message: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    const newComment = await prisma.comment.create({
      data: {
        name,
        email,
        comment,
      },
    });

    console.log('Comentario guardado:', newComment); // Si llega hasta aquí

    return NextResponse.json({ message: 'Comentario enviado con éxito!', comment: newComment }, { status: 200 });

  } catch (error) {
    console.error('Error al guardar comentario:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}