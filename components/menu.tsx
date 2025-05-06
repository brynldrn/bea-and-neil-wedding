'use client'

import { AnimatePresence, motion } from "motion/react"
import menuLineart from '@/public/icons/menu-lineart.svg'
import Link from "next/link"
import Image from "next/image"
import { useLockBodyScroll } from "@uidotdev/usehooks"

export default function Menu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  useLockBodyScroll()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="bg-cream rounded-full size-10 absolute top-8 right-8 z-10"
            animate={{
              scale: 300
            }}
            exit={{
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            key='menu-bg'
          />
          <motion.div
            layout
            initial={{ pointerEvents: 'none', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-dvw h-dvh bg-transparent z-10 flex flex-col justify-end items-center lg:hidden"
            animate={{
              pointerEvents: 'auto',
              opacity: 1,
            }}
            key='menu'
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
        </>
      )}
    </AnimatePresence>
  )
}
