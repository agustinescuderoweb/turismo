import React from 'react'
import Image from "next/image";
import logo from "../../public/logo.jpeg"


function footer() {
  return (
    <div className='flex flex-col lg:flex-row h-[300px] lg:h-[300px] bg-black justify-center lg:p-8 items-center text-white gap-[500px]'>
  <div className='flex lg:items-start items-center text-center flex-col justify-center w-[400px] lg:ml-[50px] lg:mt-6'>
    <div className='mb-12'>
      <Image src={logo} alt="logo" width={160} />
    </div>
    <div className='flex sm:items-start items-center flex-col justify-center gap-y-3'>
      <span>Términos y Condiciones</span>
      <span>Política de Privacidad</span>
    </div>
    <div className='flex items-start justify-center mt-5'>
      <span>© 2035 Creado por Agustín Escudero Web</span>
    </div>
  </div>

  {/* Este bloque solo se verá en pantallas sm (640px) o mayores */}
  <div className='hidden lg:flex flex-row gap-x-12 mt-12'>
    <div className='flex flex-col gap-y-3'>
      <span>Acerca de Tour</span>
      <span>Noticias</span>
      <span>Contactos</span>
    </div>
    <div className='flex flex-col gap-y-3'>
      <span>FACEBOOK</span>
      <span>INSTAGRAM</span>
    </div>
    <div className='flex flex-col gap-y-3'>
      <span className='bg-white text-black p-2'>Reserva Ahora</span>
    </div>
  </div>
</div>

  )
}

export default footer
