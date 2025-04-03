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
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth((carousel?.current?.scrollWidth ?? 0) - (carousel.current?.offsetWidth ?? 0));
  }, [carousel]);

  return (
    <section>
      {/* <div className='w-full overflow-hidden'>
        <motion.div
          ref={carousel}
          drag='x'
          whileDrag={{ scale: 0.95 }}
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='flex will-change-transform cursor-grab active:cursor-grabbing gap-4'
        >
          <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
            <Image src={slide01} fill alt='Slide 1' />
          </motion.div>
          <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
            <Image src={slide02} fill alt='Slide 2' />
          </motion.div>
          <motion.div className='min-w-[20rem] min-h-[25rem] relative aspect-[469/608] max-h-[423px]'>
            <Image src={slide03} fill alt='Slide 3' />
          </motion.div>
        </motion.div>
      </div> */}
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
