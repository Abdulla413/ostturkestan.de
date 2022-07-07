import Link from "next/link"
import Image from "next/image"
import {useState}from "react"
import { Transition } from "@headlessui/react";





export default function Header() {
    const [isOpen, setIsOpen]=useState(false)


    return (
        <>        <header className="flex text-gray-100 h-1/2 items-center justify-between flex-wrap bg-[url('/image/toghraq2.jpg')] p-6">
            <div className='flex items-center'>
                <Link href="/">
                    <a className="mb-4 bg-blue-500 bg-opacity-10 hidden md:mb-0 md:block">
                        <Image src="/ostturkestan-logo-blue.png"
                            width={300}
                            height={300} alt="logo" />

                    </a>
                </Link>

                <h2 className='text-2xl text-blue-700 px-3 hidden md:block'>Ostturkestanischer <br /> Jugendverein<br /> in Deutchland</h2>

            </div>

            <div className='w-full block flex-col lg:flex lg:items-center lg:w-auto hidden md:block'>
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
                    </Link>
                    <Link href="/category/blog">
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
            <div className="flex flex-auto items-center justify-between">
                <div className="bg-blue-500 bg-opacity-30">
                    <Link href="/" className="">
                        <a className="mb-4 md:hidden sm:block">
                            <Image src="/logo.png"
                                width={40}
                                height={40} alt="logo" />
                        </a>
                    </Link>
                </div>
                <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            </div>
        </header>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-blue-500" id="mobile-menu" >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                        <a

                            className="hover:bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a

                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
                    </Link>

                    <Link  href="/ostturkestan">
                        <a
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Ostturkestan
                        </a>
                    </Link>
                    <Link href="/uiguren">

                        <a
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Uiguren
                        </a>
                    </Link>
                    <Link    href="/genocide" >
                        <a
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Genozid
                        </a>
                    </Link>
                    <Link  href="/category/nachrichten" >
                        <a
                           
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Nachrichten
                        </a>
                    </Link>
                    <Link href="/category/blog">
                        <a
                            
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Blog
                        </a>
                    </Link>
                    <Link  href="/category/project">
                        <a
                           
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projekte
                        </a>
                    </Link>
                    <Link href="http://deuydic.herokuapp.com/" passHref={true} >
                        <a
                            
                            className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Wortbuch
                        </a>
                    </Link>
                </div>
            </div>  )}
            </Transition>
        </>

    )
}
