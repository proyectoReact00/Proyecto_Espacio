// src/components/Navbar.tsx
'use client';

import { User, ChevronDown, Search } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

const Navbar: React.FC<{ onTabChange?: (tab: string) => void }> = ({ onTabChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link href="/" passHref>
          <div className="navbar-logo cursor-pointer">
            CosmosCurioso
          </div>
        </Link>


        <div className="nav-menu">

          <Link href="/" passHref>
            <button
              onClick={() => onTabChange?.('inicio')}
              className="nav-button"
            >
              Inicio
            </button>
          </Link>


          <Link href="/sistema" passHref>
            <button
              onClick={() => onTabChange?.('explorar')}
              className="nav-button"
            >
              Explorar
            </button>
          </Link>


          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="nav-button nav-dropdown-toggle"
            >
              Más
              <ChevronDown
                size={16}
                className={`nav-dropdown-icon ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="nav-dropdown-menu">

                <Link href="/espacio" passHref>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    className="nav-dropdown-item"
                  >
                    Datos Extras
                  </button>
                </Link>

                {/* --- NUEVA OPCIÓN DE CONTACTO --- */}
                <Link href="/comentarios" passHref>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onTabChange?.('contacto');
                    }}
                    className="nav-dropdown-item"
                  >
                    Contacto
                  </button>
                </Link>
                


                <a
                  href="https://www.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                  }}
                >
                  Nasa
                </a>
              </div>
            )}
          </div>

          <div className="nav-search">
            <span className="nav-search-icon">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="nav-search-input"
            />
          </div>


          <div className="nav-auth-buttons">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className="nav-user-button"
                  aria-label="Iniciar sesión"
                  type="button"
                >
                  <User size={20} />
                </button>
              </SignInButton>
            </SignedOut>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;