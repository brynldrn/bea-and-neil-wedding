'use client'

import { motion } from 'motion/react'
import BaseCarousel, {
  Slider,
  SliderContainer,
} from './base-carousel';

import slide01 from '@/public/images/slide01.png'
import slide02 from '@/public/images/slide02.png'
import slide03 from '@/public/images/slide03.png'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'

export default function Carousel() {
  const [_width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth((carousel?.current?.scrollWidth ?? 0) - (carousel.current?.offsetWidth ?? 0));
  }, [carousel]);

  return (
    <section>
      <BaseCarousel className='bg-transparent sm:px-10 px-2' options={{
        loop: false
      }}>
        <SliderContainer className='gap-2'>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
              <Image src={slide01} fill alt='Slide 1' />
            </motion.div>
          </Slider>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
              <Image src={slide02} fill alt='Slide 2' />
            </motion.div>
          </Slider>
          <Slider>
            <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
              <Image src={slide03} fill alt='Slide 3' />
            </motion.div>
          </Slider>
        </SliderContainer>
      </BaseCarousel>
    </section>
  )
}
