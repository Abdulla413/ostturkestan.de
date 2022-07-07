import React from 'react'
import Link from "next/link"

function Footer() {
  return (
    
        <footer className="bg-blue-500 text-center text-white p-5">
<p >Copyright &copy; Ostturkestanischer Jugendverein in Deutschland e.V.  2022</p>
<p className='uppercase m-2 '><Link href="/about"> über uns</Link> </p>
    </footer>
    
  )
}

export default Footer