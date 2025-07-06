
import './globals.css';
import type { Metadata } from 'next';
import NavbarWrapper from '../components/NavbarWrapper';
import { ClerkProvider } from '@clerk/nextjs'; 
import React from 'react'; 

export const metadata: Metadata = { 
  title: 'Curiosidades del Espacio',
  description: 'Explora el universo y descubre tu planeta natal con nosotros, en tu idioma.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider> 
      <html lang="es">
        <body>
          <NavbarWrapper />
          {children}
        </body>
      </html>
    </ClerkProvider> 
  );
}