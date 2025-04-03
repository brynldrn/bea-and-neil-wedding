'use client'

import Link from "next/link"
import Image from "next/image"
import logo from "@/public/icons/bea-neil-logo.svg"
import logoDark from "@/public/icons/bea-neil-logo-dark.svg"
import menu from '@/public/icons/Menu.svg'
import close from '@/public/icons/Close.svg'
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import Menu from "./menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="justify-between items-center flex p-8 absolute top-0 left-0 bg-transparent z-40 w-full lg:pt-10 lg:px-16">

      {/* mobile menu */}
      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
      {/* left-side menu */}
      <div className="hidden lg:flex flex-col gap-6 items-start">
        <Link href='#our-story' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">OUR STORY</Link>
        <Link href='#details' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">DETAILS</Link>
      </div>

      {/* logo */}
      <Link href="#top" scroll className='size-[44px] lg:size-[80px] relative flex items-center justify-center z-30'>
        <Image src={isOpen ? logoDark : logo} fill alt="Home" className="w-fit h-fit" />
      </Link>

      {/* menu */}
      <button className={twMerge('lg:hidden z-30')} onClick={() => setIsOpen(!isOpen)}>
        <Image src={isOpen ? close : menu} width={40} height={40} alt={isOpen ? 'Close' : 'Menu'} />
      </button>

      {/* right-side menu */}
      <div className="hidden lg:flex flex-col gap-6 items-end">
        <Link href='#attire-and-gifts' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">ATTIRE &amp; GIFTS</Link>
        <Link href='#rsvp' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">RSVP</Link>
      </div>
    </nav>
  )
}
