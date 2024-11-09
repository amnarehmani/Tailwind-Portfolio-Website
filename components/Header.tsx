"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { Bars2Icon, Bars3Icon } from '@heroicons/react/16/solid'

const headerLink = [
    {
        title: "Home",
        path: "#home"
    },
    {
         title: "Contact",
        path: "#contact"
    },
    {
        title: "About",
        path: "#about"
    }
]

function Header() {
const [navbarOpen , setNavbarOpen] = useState(false);
  return (
   <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#1A0B2E] bg-opacity-10">
   <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
     <Link href="/" className='text-2xl  md:text-3xl bg-gradient-to-r from-purple-400 to-pink-600 font-semibold'>My Portfolio
     </Link>
     <div className='mobile-menu block md:hidden'>
      {
        navbarOpen ? (
            <button className='text-slate-200 flex items-center px-3 py-2 border '>
            <Bars3Icon className='h-5 w-5' />
             </button>

        ) : (

        )
      }
     </div>
     <div id="header" className="hidden md:block md:w-auto menu">
     <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
     {headerLink.map((link, index) => (
              <li key={index}>
                <HeaderLink href={link.path} title={link.title} />
              </li>
            ))}
     </ul>
     
     </div>
    </div>
    </nav>
  )
}


export default Header
