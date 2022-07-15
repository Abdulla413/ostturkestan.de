import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (


        <div className="bg-blue-500 text-white dark:bg-gray-800">
            <nav className="container hidden md:block dark:bg-gray-800 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-3 py-2.5">
                    <div className="flex items-center ">
                        <Link href="/" >
                            <a> <Image src="/logo.png"
                                height={300}
                                width={200}
                                alt="Logo" />

                            </a>

                        </Link>
                        <Link href="/">
                            <a>
                                <h2 className="self-center text-2xl font-semibold ml-4 whitespace-nowrap dark:text-white"> Ostturkestanischer

                                    <br />Jugendverein<br />in Deutschland</h2>
                            </a>
                        </Link>

                    </div>
                    <div className="flex justify-end text-lg items-center hidden md:block ">
                        <Link href="/">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="mx-2cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                about
                            </a>
                        </Link>
                        <Link href="/ostturkestan">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 rounded bg-opacity-50 px-1 hover:text-indigo-300">
                                Ostturkestan
                            </a>
                        </Link>
                        <Link href="/uiguren">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                uiguren
                            </a>
                        </Link>
                        <Link href="/genocide">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                genozid
                            </a>
                        </Link>
                        <Link href="/category/nachrichten">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                nachrichten
                            </a>
                        </Link>
                        <Link href="/category/blog">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                blog
                            </a>
                        </Link>
                        <Link href="/category/project">
                            <a className="mx-2 cursor-pointer uppercase bg-blue-500 bg-opacity-50 rounded px-1 hover:text-indigo-300">
                                Projekte
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-blue-500 dark:bg-gray-700 hidden md:block">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center md:order-2 justify-end">
                        <Menu as="div" className="relative inline-block text-left z-50">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-lg font-medium text-gray-100 uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                    Deutsch
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/" className='hover:bg-gray-300'>
                                                    <a

                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Deutsch
                                                    </a>
                                                </Link>


                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/creating">

                                                <a
                                                    
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    ئۇيغۇرچە
                                                </a>
                                                </Link>

                                            )}
                                        </Menu.Item>
                                        <Menu.Item>

                                            {({ active }) => (
                                                <Link href="/creating">
                                                <a
                                                    
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    English
                                                </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/creating" >
                                                <a
                                                    
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Türk
                                                </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <div className="flex justify-center text-lg items-center md:justify-end">
                            <Link href="http://deuydic.herokuapp.com/" passHref={true}>
                                <a className="mx-1 inline-block text-xl px-4 py-2 leading-none border bg-opacity-50 rounded text-white bg-blue-500 rounded px-1 border-white uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Wortbuch</a>
                            </Link>
                            <Link href="/creating" passHref={true}>
                                <a className="mx-1 inline-block text-xl px-4 py-2 leading-none border bg-opacity-50 rounded text-white bg-blue-500 rounded px-1 border-white uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">spenden</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>



            <div className="flex flex-auto px-4 py-2 items-center justify-between">

                <Link href="/">
                    <a className="md:hidden sm:block">
                        <Image src="/logo.png"
                            width={30}
                            height={43} alt="logo" />
                    </a>
                </Link>

                <>
                    <Menu as="div" className="relative inline-block text-left z-50 md:hidden">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-blue-500 text-sm font-medium text-gray-100 uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                DE
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/">
                                            <a
                                            
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                DE
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link 
                                            href="/creating">
                                            <a
                                                
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                ئۇ
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/creating">
                                            <a
                                                
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                EN
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/creating">
                                            <a
                                                
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Türk
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </>

                <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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

                            <Link href="/ostturkestan">
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
                            <Link href="/genocide" >
                                <a
                                    className="text-gray-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Genozid
                                </a>
                            </Link>
                            <Link href="/category/nachrichten" >
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
                            <Link href="/category/project">
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
                    </div>)}
            </Transition>
            <div className="flex bg-blue-500 pb-4 justify-center text-lg items-center md:hidden">
                <Link href="http://deuydic.herokuapp.com/" passHref={true}>
                    <a className="mx-1 inline-block text-sm px-4 py-2 leading-none border bg-opacity-50 rounded text-white bg-blue-500 rounded px-1 border-white uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Wortbuch</a>
                </Link>
                <Link href="/creating">
                    <a className="mx-1 inline-block text-sm px-4 py-2 leading-none border bg-opacity-50 rounded text-white bg-blue-500 rounded px-1 border-white uppercase hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">spenden</a>
                </Link>
            </div>




        </div>
    )
}

export default Header