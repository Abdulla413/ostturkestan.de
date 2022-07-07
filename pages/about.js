import React from 'react'
import { Layout } from '../components'

function about() {
  return (
    <Layout title="About Page">
        <h2 className='text-xl text-center font-bold'>Wer sind Wir?</h2>
        <p>Der Ostturkestanischer Jugendverein in Deutschland e.V. ist ein eingetragener Verein in München und ein Mitglied des ostturkestanischen Jugendkongresses.</p>
        <p><span className='font-bold'>Email:</span>ot.jugend.ev@gmail.com</p>
        <p><span className='font-bold'>Website:</span>www.ostturkestan.de</p>
        <p><span className='font-bold'>Facebook:</span>...</p>
        <p><span className='font-bold'>Twitter:</span>...</p>
        <p><span className='font-bold'>Instagram:</span>...</p>        
    </Layout>
  )
}

export default about