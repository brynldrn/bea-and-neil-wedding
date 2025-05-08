'use client'

import Image, { StaticImageData } from "next/image"
import { motion } from 'motion/react'

type CarouselSlideProps = {
  slide: StaticImageData,
  index: number,
  setPopupOpen: (open: boolean) => void,
  setSelectedIndex: (index: number) => void
}

export default function CarouselSlide({ slide, index, setPopupOpen, setSelectedIndex }: CarouselSlideProps) {
  const handleClick = () => {
    setPopupOpen(true)
    setSelectedIndex(index)
  }

  return (
    <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] lg:min-w-[469px] lg:min-h-[608px] max-h-[423px] overflow-hidden'>
      <Image src={slide} fill alt={`Slide ${index + 1}`} className="hover:scale-110 duration-1000 ease-in-out object-cover" onClick={handleClick} />
    </motion.div>
  )
}
