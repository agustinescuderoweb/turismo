import React from 'react'
import quienes from '../../public/img/quienes.jpg'
import Image from 'next/image'


function aventura() {
  return (
   <div id="quienes-somos" className="relative w-full mt-[100px] h-auto lg:h-screen">
  {/* Imagen de fondo en pantallas grandes */}
  <Image
    src={quienes}
    alt="quienes-somos"
    className="w-full h-[300px] lg:h-screen object-cover"
  />

  {/* Capa con el texto */}
  <div className="lg:absolute lg:top-0 lg:right-0 lg:w-1/2 w-full bg-black/80 h-auto lg:h-screen flex flex-col items-center justify-center text-center gap-6 px-6 py-10">
    <h1 className="text-lg lg:text-4xl text-white">¿Quiénes Somos?</h1>
    <p className="text-sm lg:text-xl text-white max-w-[90%] lg:max-w-[80%]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      reprehenderit officiis blanditiis, illo placeat illum at distinctio
      dignissimos eos magnam iusto voluptates ipsa maiores, iste minima
      quibusdam quasi ipsam mollitia.
    </p>
  </div>
</div>

  )
}

export default aventura
