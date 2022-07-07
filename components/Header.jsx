import Link from "next/link"
import Image from "next/image"




export default function Header() {
    
    const hanleClick = ()=>{
        
    }

    return (
        <header className="flex text-gray-100 h-1/2 items-center justify-between flex-wrap bg-[url('/image/toghraq2.jpg')] p-6">
            <div className='flex items-center'>
                <Link href="/">
                    <a className="mb-4 bg-blue-500 bg-opacity-10 hidden md:mb-0 md:block">
                        <Image src="/ostturkestan-logo-blue.png"
                            width={300}
                            height={300} alt="logo" />

                    </a>
                </Link>
                <Link href="/" className="">
                    <a className="mb-4 md:hidden sm:block">
                        <Image src="/ostturkestan-logo-blue.png"
                            width={40}
                            height={40} alt="logo" />

                    </a>
                </Link>
                <h2 className='text-2xl text-blue-700 px-3 hidden md:block'>Ostturkestanischer <br /> Jugendverein<br /> in Deutchland</h2>

            </div>
            <div className="block md:hidden">
                <button onClick={hanleClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className='w-full block flex-col lg:flex lg:items-center lg:w-auto'>
                <div className='w-full flex flex-col flex md:flex-row items-center justify-between'>
                    <Link href="/">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="mx-2cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            about
                        </a>
                    </Link>
                    <Link href="/ostturkestan">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 rounded bg-opacity-40 px-1 hover:text-indigo-300">
                            Ostturkestan
                        </a>
                    </Link>
                    <Link href="/uiguren">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            uiguren
                        </a>
                    </Link>
                    <Link href="/genocide">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            genozid
                        </a>
                    </Link>
                    <Link href="/category/nachrichten">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            nachrichten
                        </a>
                    </Link><Link href="/category/blog">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            blog
                        </a>
                    </Link>
                    <Link href="/category/project">
                        <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-40 rounded px-1 hover:text-indigo-300">
                            Projekte
                        </a>
                    </Link>

                </div>
                <div className='flex w-full items-center justify-end pt-3'>
                    <Link href="/de">
                        <a className="mx-1 cursor-pointer uppercase bg-blue-500 rounded px-1 bg-opacity-40  border w-8 b-2 p-1 hover:text-indigo-300">De</a>
                    </Link>
                    <Link href="/uy">
                        <a className="mx-1 cursor-pointer uppercase bg-blue-500 rounded px-1 bg-opacity-40  border b-2 p-1 w-8 hover:text-indigo-300">ئۇ</a>
                    </Link>

                    <Link href="http://deuydic.herokuapp.com/" passHref={true}>
                        <a className="mx-1 cursor-pointer bg-blue-500 rounded px-1 bg-opacity-40   uppercase hover:text-indigo-300">Wortbuch</a>
                    </Link>
                    <Link href="http://deuydic.herokuapp.com/" passHref={true}>
                        <a className="mx-1 inline-block text-sm px-4 py-2 leading-none border bg-opacity-40 rounded text-white bg-blue-500 rounded px-1 border-white uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">spenden</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}


