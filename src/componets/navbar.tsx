"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpeg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-screen bg-[url('/img/paisaje.jpg')] bg-cover bg-center clip-triangle">
          <div className="lg:absolute inset-0 bg-gradient-to-b via-transparent to-black/70"></div>
           {/* 🆕 Título centrado */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-black bg-white/80 text-6xl font-bold p-5">
          FIND YOUR DESTINY
        </h1>
        <h2 className="text-black bg-white/80 p-3 text-xl mt-3 z-20 lg:ml-[200px]">The Right <strong className="font-bold"  style={{ textShadow: '2px 6px 10px orange'}}>Tour for the Right</strong></h2>
      </div>
      <div className="w-full lg:w-[80%]  lg:w-[100%] lg:w-full mx-auto px-4 py-8 flex items-center justify-between bg-white/80 text-black relative z-10 shadow-lg"
        style={{ fontFamily: 'Exo 2, sans-serif' }}>
        <div className="text-xl font-bold shadow-xl"><Image src={logo} alt="logo" width={160}></Image></div>

        <div className="hidden lg:flex space-x-8 mr-6 text-bold text-lg">
          <Link href="#inicio" className="hover:text-blue-500">Inicio</Link>
          <Link href="#actividades" className="hover:text-blue-500">Nuestras actividades</Link>
          <Link href="#quienes-somos" className="hover:text-blue-500">Quiénes somos</Link>
          <Link href="#contactos" className="hover:text-blue-500">Contactos</Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="lg:hidden focus:outline-none transition duration-2000"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden px-4 py-6 pb-6 space-y-2 text-black bg-white flex flex-col gap-4 relative z-10 text-lg">
          <Link href="/" className="block hover:text-blue-500">Inicio</Link>
          <Link href="#actividades" className="block hover:text-blue-500">Nuestras actividades</Link>
          <Link href="#quienes-somos" className="block hover:text-blue-500">Quiénes somos</Link>
          <Link href="#contactos" className="block hover:text-blue-500">Contactos</Link>
        </div>
      )}
    </nav>
  );
}