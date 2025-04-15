'use client'

import { motion } from 'motion/react'
import BaseCarousel, {
  Slider,
  SliderContainer,
  SliderNextButton,
  SliderPrevButton,
} from './base-carousel';

import slide01 from '@/public/images/slide01.png'
import slide02 from '@/public/images/slide02.png'
import slide03 from '@/public/images/slide03.png'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'
import leftArrow from '@/public/icons/arrow-left.svg'

export default function Carousel() {
  const [_width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth((carousel?.current?.scrollWidth ?? 0) - (carousel.current?.offsetWidth ?? 0));
  }, [carousel]);

  return (
    <section className='overflow-hidden relative'>
      <BaseCarousel className='bg-transparent !rounded-none' options={{
        containScroll: 'trimSnaps'
      }}>
        <SliderContainer className='gap-2 lg:gap-4'>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] lg:min-w-[469px] lg:min-h-[608px] max-h-[423px]'>
              <Image src={slide01} fill alt='Slide 1' />
            </motion.div>
          </Slider>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] lg:min-w-[469px] lg:min-h-[608px] max-h-[423px]'>
              <Image src={slide02} fill alt='Slide 2' />
            </motion.div>
          </Slider>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] lg:min-w-[469px] lg:min-h-[608px] max-h-[423px]'>
              <Image src={slide03} fill alt='Slide 3' />
            </motion.div>
          </Slider>
        </SliderContainer>

        {/* carousel details */}
        <div className='flex flex-col px-12 gap-10 mt-10 lg:flex-row lg:gap-12 lg:items-center w-full lg:justify-center'>
          <span className='block mx-auto lg:mx-0 w-full text-center font-sans text-xl lg:w-auto'>Photo and video by <a href="https://www.instagram.com/_frameofmnd/" target="_blank" rel="noopener noreferrer">Frame of Mind</a></span>

          {/* divider */}
          <span className='block h-0.5 w-full bg-dark-green lg:w-1/3 xl:w-[607px]' />

          {/* carousel controls */}
          <div className='flex gap-2 items-center justify-center'>
            <SliderPrevButton className='flex items-center justify-center w-10 h-10 bg-transparent rounded-full border-2 border-dark-green min-w-10 min-h-10 lg:min-w-16 lg:min-h-16'>
              <Image src={leftArrow} width={14} height={14} alt='left arrow' className='lg:size-6' />
            </SliderPrevButton>
            <SliderNextButton className='flex items-center justify-center w-10 h-10 bg-transparent rounded-full border-2 border-dark-green rotate-180 min-w-10 min-h-10 lg:min-w-16 lg:min-h-16'>
              <Image src={leftArrow} width={14} height={14} alt='right arrow' className='lg:size-6' />
            </SliderNextButton>
            <button className='rounded-full border-2 border-dark-green py-3.5 px-11 uppercase text-dark-green font-sans text-lg font-bold leading-2 min-w-[166px] lg:px-6 lg:text-2xl lg:py-6'>View All</button>
          </div>
        </div>
      </BaseCarousel>
    </section>
  )
}
