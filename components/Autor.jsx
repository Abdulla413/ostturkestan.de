import React from 'react'
import Image from 'next/image'

function Autor({autor}) {
  return (
    <div className='text-center shadow-lg mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10'>
      <div className='absolute left-0 right-0 -top-12'>
      <Image
      alt={autor.name}
      unoptimized
      height="100px"
      width="100px"
      className='align-middle rounded-full'
      src={autor.foto.url}
      />
      </div>
      <h3 className='text-gray-900 my-4 text-xl font-bold'>
        {autor.name}
      </h3>
      <p className='text-gray-900 text-lg'>
        {autor.bio}
      </p>

     
    </div>
  )
}

export default Autor