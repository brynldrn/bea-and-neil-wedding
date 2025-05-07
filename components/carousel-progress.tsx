'use client';

import { useCarouselContext } from "./base-carousel";
import { motion } from 'motion/react';

export default function CarouselProgress() {
  const { selectedIndex, slidesArr } = useCarouselContext();
  const width = (selectedIndex + 1) / slidesArr.length

  return (
    <div className='block h-0.5 w-full bg-off-white lg:w-1/3 xl:w-[607px] relative overflow-hidden lg:hidden'>
      <motion.span transition={{ type: 'tween', duration: 0.5 }} layout style={{ width: `${width * 100}%` }} className="absolute top-0 left-0 h-0.5 bg-dark-green w-full" />
    </div>
  )
}
