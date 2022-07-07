import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"


export default function NotFoundPage() {
  return (
    <Layout titile="Not Found">
        <div className="flex flex-col items-center mt-20">
          
            <Image src="/ostturkestan-logo-blue.png" width={70} height={70} className="bg-blue-700 rounded " alt="notfoundpage"  />
            
            <h1 className="text-6xl my-5"> Whoops!</h1>
            <h2 className="text-4xl text-gray-400 mb-5"> This page not exist.</h2>
            <h2 className="text-4xl text-blue-500 mb-5"> Ostturkestanischer Jugendverein in Deutschland e.V.</h2>
       </div>
    </Layout>
  )
}