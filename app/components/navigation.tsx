'use client'

import Link from "next/link"
import Image from "next/image"
import logo from "@/public/icons/bea-neil-logo.svg"
import menu from '@/public/icons/Menu.svg'

export default function Navigation() {
  return (
    <nav className="justify-between items-center flex p-8 absolute top-0 left-0 bg-transparent z-40 w-full lg:pt-10 lg:px-16">
      {/* left-side menu */}
      <div className="hidden lg:flex flex-col gap-6 items-start">
        <Link href='#our-story' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">OUR STORY</Link>
        <Link href='#details' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">DETAILS</Link>
      </div>

      {/* logo */}
      <Link href="#top" scroll className="size-[44px] lg:size-[80px] relative flex items-center justify-center">
        <Image src={logo} fill alt="Home" className="w-fit h-fit" />
      </Link>

      {/* menu */}
      <button className="lg:hidden">
        <Image src={menu} width={40} height={40} alt="Menu" />
      </button>

      {/* right-side menu */}
      <div className="hidden lg:flex flex-col gap-6 items-end">
        <Link href='#attire-and-gifts' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">ATTIRE &amp; GIFTS</Link>
        <Link href='#rsvp' scroll className="text-white text-base font-light font-sans leading-[160%] tracking-[4px]">RSVP</Link>
      </div>
    </nav>
  )
}
