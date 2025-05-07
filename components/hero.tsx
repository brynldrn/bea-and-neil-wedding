'use client';

import Image from "next/image";
import heroImage from '@/public/images/hero.jpeg'
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="h-dvh relative overflow-hidden" id="top">
      <Image src={heroImage} fill alt="Bea and Neil Hugging (awwww)" className="object-cover object-(--hero-position)" />
      <div className="absolute top-0 left-0 flex flex-col lg:flex-row lg:px-5 xl:max-w-[1240px] 2xl:max-w-[1540px] lg:right-0 lg:mx-auto lg:bottom-0 justify-between items-center w-full h-full py-[104px] lg:py-0 text-white">
        <motion.div className="absolute top-0 left-0 flex flex-col lg:flex-row lg:px-5 xl:max-w-[1240px] 2xl:max-w-[1540px] lg:right-0 lg:mx-auto lg:bottom-0 justify-between items-center w-full h-full py-[104px] lg:py-0 text-white z-40">
          <motion.h1
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif font-light text-[40px] lg:text-[64px] text-center tracking-[11px] leading-[120%] z-50">
            BEA <br /> PONCE
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-serif font-light text-[40px] lg:text-[64px] text-center tracking-[11px] leading-[120%] z-50">
            NEIL <br /> APALE
          </motion.h1>
        </motion.div>
      </div>
    </section>
  )
}
