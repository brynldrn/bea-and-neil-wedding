'use client';

import Image from "next/image";
import heroImage from '@/public/images/hero.jpeg'

export default function Hero() {
  return (
    <section className="w-dvw h-dvh relative">
      <Image src={heroImage} fill alt="Bea and Neil Hugging (awwww)" className="object-cover object-(--hero-position)" />
      <div className="absolute top-0 left-0 flex flex-col lg:flex-row lg:px-5 xl:max-w-[1240px] lg:right-0 lg:mx-auto lg:bottom-0 justify-between items-center w-full h-full py-[104px] lg:py-0 text-white">
        <h1 className="font-serif font-light text-[40px] lg:text-[64px] text-center tracking-[11px] leading-[120%]">BEA <br /> PONCE</h1>
        <h1 className="font-serif font-light text-[40px] lg:text-[64px] text-center tracking-[11px] leading-[120%]">NEIL <br /> APALE</h1>
      </div>
    </section>
  )
}
