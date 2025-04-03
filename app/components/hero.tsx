'use client';

import Image from "next/image";
import heroImage from '@/public/images/hero.jpeg'

export default function Hero() {
  return (
    <section className="w-dvw h-dvh">
      <Image src={heroImage} fill alt="Bea and Neil Hugging (awwww)" className="object-cover object-(--hero-position)" />
    </section>
  )
}
