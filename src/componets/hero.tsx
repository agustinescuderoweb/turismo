import React from 'react';
import { Mountain, Bike, Send, FlagTriangleRight, MountainSnow } from 'lucide-react';
import Image from 'next/image';
import Ciclismo from '../../public/img/ciclismo.jpg';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='h-[200px] m-6 grid grid-cols-2 gap-12 md:flex-row md:grid-cols-4 justify-center items-center text-center mt-16'>
      <div className="w-32 h-32 border text-black flex flex-col items-center justify-center">
        <Mountain className="w-8 h-8 text-orange-600 mb-2" />
        <h1 className="text-center">SCALING</h1>
      </div>
      <div className='w-32 h-32 border flex flex-col items-center justify-center'>
        <Bike className="w-8 h-8 text-orange-600 mb-2" />
        <h1 className='text-center'>CYCLING</h1>
      </div>
      <div className='w-32 h-32 border flex flex-col items-center justify-center'>
        <Send className="w-8 h-8 text-orange-600 mb-2" />
        <h1 className='text-center'>HIKING</h1>
      </div>
      <div className='w-32 h-32 border flex flex-col items-center justify-center'>
        <FlagTriangleRight className="w-8 h-8 text-orange-600 mb-2" />
        <h1 className='text-center'>ZIPLINE</h1>
      </div>
    </div>
    <div className='flex flex-col lg:flex-row w-full mt-24'>
         <div className='flex items-center justify-center w-full lg:w-1/2 lg:items-center mt-12'>
            <Image src={Ciclismo} alt='ciclismo' />
         </div>
         <div className='w-full lg:w-1/2 flex-col justify-center text-center items-center mt-12'>
         <div className='w-full lg:w-[550px]'>
          <h1 className='text-md lg:text-4xl font-extrabold m-4'><span className="font-light">SOBRE</span>  AVENTURAS</h1>
          <div className='flex flex-row justify-center aling-center text-center'><div className="w-[200px] h-px bg-gray-600 my-8"></div><MountainSnow className='w-8 m-4' /><div className="w-[200px] h-px bg-gray-600 my-8"></div></div>
          <h2 className='text-md lg:text-lg font-bold m-4'>Este es tu planeta, explora sobre el.</h2>
          <p className='text-sm lg:text-base m-4 px-6'>La aventura te espera en cada rincón del planeta. El turismo aventura combina emoción, naturaleza y adrenalina en experiencias inolvidables: desde escalar montañas imponentes hasta cruzar ríos en kayak o recorrer senderos selváticos. Ideal para quienes buscan salir de la rutina y conectar con lo salvaje.</p> 
          <p className='px-6'>Sumergirse en este tipo de turismo es descubrir paisajes únicos, superar desafíos personales y compartir momentos intensos. Ya sea en bici, a caballo o caminando, la aventura transforma cada viaje en una historia que vale la pena contar.</p>
             <button className='bg-black m-12 p-6'><h1 className='text-white text-lg'>Why Travel with Adventure?</h1></button>
             </div>
         </div>
      </div>
    </div>
  );
}

export default Hero;
