import React from 'react'

function contacto() {
  return (
    <div id="contactos" className='bg-white h-[screen] flex flex-col lg:flex-row mt-10 p-6 lg:pl-22'> 
      <div className='w-full lg:w-1/2 flex items-center lg:items-center justify-center lg:justify-end mr-[100px]'>
        <form className="w-sm p-4 bg-white border rounded-md space-y-4">
  <div className="flex flex-col space-x-4">
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700"></label>
      <input
        type="text"
        name="apellido"
        placeholder='Nombre'
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700"></label>
      <input
        type="text"
        name="apellido"
        placeholder='Apellido'
        className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <label className="block text-sm font-medium text-gray-700"></label>
    <input
      type="email"
      name="correo"
      placeholder='Teléfono'
      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    <label className="block text-sm font-medium text-gray-700"></label>
    <textarea
      name="mensaje"
      placeholder='Escribe tu mensaje acá...'
      rows="4"
      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    ></textarea>

    <div className='flex justify-end'>
     <button
    type="submit"
    className="w-[100px] bg-black text-white py-2 rounded-md hover:bg-blue-700 transition mt-2"
  >
    Enviar
  </button>
  </div>
  </div>

 
</form>
      </div>
      <div className='w-full lg:h-[600px] lg:w-1/2 flex flex-col lg:items-center lg:items-start justify-center items-center gap-3 text-center mt-8 mb-8' >
        <h1 className='text-lg lg:text-4xl lg:w-1/2 font-bold'>CONTACTO</h1>
        <h2 className='text-md w-full lg:text-xl lg:w-1/2'>Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir a tus usuarios saber más sobre ti.</h2>
      </div>
    </div>
  )
}

export default contacto
