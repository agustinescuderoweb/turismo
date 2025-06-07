import React from 'react'
import Image from 'next/image'
import Ciclismos from '../../public/img/ciclismos.jpeg'
import Escalar from '../../public/img/escalar.jpeg'
import Senderismo from '../../public/img/senderismo.jpeg'
import Tirolesa from '../../public/img/tirolesa.jpeg'
import { MountainSnow } from 'lucide-react';

function activity() {
  return (
    <div id='actividades' className='flex flex-col'>
      <div className='flex flex-col mt-8 justify-center text-center items-center w-full'>
        <h1 className='text-md lg:text-4xl font-extrabold m-4'><span className="font-light">BUSCA</span> TU PROPIA AVENTURA</h1>
         <div className='w-full flex flex-row justify-center aling-center text-center'><div className="w-full lg:w-[200px] h-px bg-gray-600 my-8"></div><MountainSnow className='w-8 m-4' /><div className="w-full lg:w-[200px] h-px bg-gray-600 my-8"></div></div>
        <p className='text-md w-full lg:w-[600px]'>¿Estás listo para explorar lo desconocido? En el turismo aventura, cada decisión te lleva por caminos inesperados. ¿Prefieres subir a una cima nevada o internarte en selvas misteriosas? ¿O tal vez desafiar rápidos turbulentos en un río caudaloso? La elección es tuya.</p>
      </div>
    <div className='flex flex-col lg:flex-row justify-center items-center w-full h-[screen] mt-4'>
  <div className='p-4'>
    <div className='relative border'>
      <Image src={Ciclismos} alt='Ciclismo' className='w-full h-auto' />
      <div className='absolute bottom-0 left-0 w-full text-white font-bold text-center py-8'
       style={{
       background: 'rgba(0,0,0, 0.6)',
       clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)'
      }}
      >
        Ciclismo
      </div>
    </div>
  </div>

  <div className='p-4'>
    <div className='relative border'>
      <Image src={Escalar} alt='Escalar' className='w-full h-auto' />
      <div className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.6)] text-white font-bold text-center py-8'
       style={{
       background: 'rgba(0,0,0, 0.6)',
       clipPath: 'polygon(0 0%, 100% 30%, 100% 100%, 0% 100%)'
      }}
      >
        Escalar
      </div>
    </div>
  </div>

  <div className='p-4'>
    <div className='relative border'>
      <Image src={Senderismo} alt='Senderismo' className='w-full h-auto' />
      <div className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.6)] text-white font-bold text-center py-8'
      style={{
       background: 'rgba(0,0,0, 0.6)',
       clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)'
      }}
      >
        Senderismo
      </div>
    </div>
  </div>

  <div className='p-4'>
    <div className='relative border'>
      <Image src={Tirolesa} alt='Tirolesa' className='w-full h-auto' />
      <div className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.6)] text-white font-bold  text-center py-8'
      style={{
       background: 'rgba(0,0,0, 0.6)',
       clipPath: 'polygon(0 0%, 100% 30%, 100% 100%, 0% 100%)'
      }}
      >
        Tirolesa
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default activity
