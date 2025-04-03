'use client'

import { motion } from "motion/react"
import menuLineart from '@/public/icons/menu-lineart.svg'
import Link from "next/link"
import Image from "next/image"
import { useLockBodyScroll } from "@uidotdev/usehooks"

export default function Menu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  useLockBodyScroll()

  return (
    <motion.div
      layout
      initial={{ translateX: '200%', pointerEvents: 'none', opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-dvw h-dvh bg-cream z-10 flex flex-col justify-end items-center lg:hidden"
      animate={{
        translateX: isOpen ? 0 : '200%',
        pointerEvents: isOpen ? 'auto' : 'none',
        opacity: 1,
      }}
    >
      <ul className="flex flex-col gap-16 items-center mb-20">
        <li className="text-dark-green text-base font-light font-sans leading-[160%] tracking-[4px] uppercase">
          <Link href='#our-story' scroll onClick={() => setIsOpen(false)}>OUR STORY</Link>
        </li>
        <li className="text-dark-green text-base font-light font-sans leading-[160%] tracking-[4px] uppercase">
          <Link href='#details' scroll onClick={() => setIsOpen(false)}>DETAILS</Link>
        </li>
        <li className="text-dark-green text-base font-light font-sans leading-[160%] tracking-[4px] uppercase">
          <Link href='#attire-and-gifts' scroll onClick={() => setIsOpen(false)}>ATTIRE &amp; GIFTS</Link>
        </li>
        <li className="text-dark-green text-base font-light font-sans leading-[160%] tracking-[4px] uppercase">
          <Link href='#rsvp' scroll onClick={() => setIsOpen(false)}>RSVP</Link>
        </li>
      </ul>
      <Image src={menuLineart} width={309} height={333} alt="Bea & Neil" />
    </motion.div>
  )
}
