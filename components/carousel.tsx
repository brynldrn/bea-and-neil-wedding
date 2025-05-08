'use client'

import BaseCarousel, {
  Slider,
  SliderContainer,
  SliderNextButton,
  SliderPrevButton,
} from './base-carousel';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'
import leftArrow from '@/public/icons/arrow-left.svg'
import NextJsImage from './nextJsImage';
import CarouselProgress from './carousel-progress';

// import all images from images/slides folder
import slide01Image from '@/public/images/slides/NeilxBeaDay01-01.jpg'
import slide03Image from '@/public/images/slides/NeilxBeaDay01-03.jpg'
import slide04Image from '@/public/images/slides/NeilxBeaDay01-04.jpg'
import slide05Image from '@/public/images/slides/NeilxBeaDay01-05.jpg'
import slide06Image from '@/public/images/slides/NeilxBeaDay01-06.jpg'
import slide08Image from '@/public/images/slides/NeilxBeaDay01-08.jpg'
import slide12Image from '@/public/images/slides/NeilxBeaDay01-12.jpg'
import slide13Image from '@/public/images/slides/NeilxBeaDay01-13.jpg'
import slide14Image from '@/public/images/slides/NeilxBeaDay01-14.jpg'
import slide15Image from '@/public/images/slides/NeilxBeaDay01-15.jpg'
import slide16Image from '@/public/images/slides/NeilxBeaDay01-16.jpg'
import slide19Image from '@/public/images/slides/NeilxBeaDay01-19.jpg'
import slide20Image from '@/public/images/slides/NeilxBeaDay01-20.jpg'
import slide21Image from '@/public/images/slides/NeilxBeaDay01-21.jpg'
import slide22Image from '@/public/images/slides/NeilxBeaDay01-22.jpg'
import slide23Image from '@/public/images/slides/NeilxBeaDay01-23.jpg'
import slide24Image from '@/public/images/slides/NeilxBeaDay01-24.jpg'
import slide25Image from '@/public/images/slides/NeilxBeaDay01-25.jpg'
import slide30Image from '@/public/images/slides/NeilxBeaDay01-30.jpg'
import slide31Image from '@/public/images/slides/NeilxBeaDay01-31.jpg'
import slide32Image from '@/public/images/slides/NeilxBeaDay01-32.jpg'
import slide33Image from '@/public/images/slides/NeilxBeaDay01-33.jpg'
import slide34Image from '@/public/images/slides/NeilxBeaDay01-34.jpg'
import slide35Image from '@/public/images/slides/NeilxBeaDay01-35.jpg'
import slide36Image from '@/public/images/slides/NeilxBeaDay01-36.jpg'
import slide41Image from '@/public/images/slides/NeilxBeaDay01-41.jpg'
import slide46Image from '@/public/images/slides/NeilxBeaDay01-46.jpg'
import slide49Image from '@/public/images/slides/NeilxBeaDay01-49.jpg'
import slide51Image from '@/public/images/slides/NeilxBeaDay01-51.jpg'
import slide52Image from '@/public/images/slides/NeilxBeaDay01-52.jpg'
import CarouselSlide from './carousel-slide';
import CarouselPopup from './carousel-popup';

export default function Carousel() {
  const [_width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allSlides = [
    slide01Image,
    slide03Image,
    slide04Image,
    slide05Image,
    slide06Image,
    slide08Image,
    slide12Image,
    slide13Image,
    slide14Image,
    slide15Image,
    slide16Image,
    slide19Image,
    slide20Image,
    slide21Image,
    slide22Image,
    slide23Image,
    slide24Image,
    slide25Image,
    slide30Image,
    slide31Image,
    slide32Image,
    slide33Image,
    slide34Image,
    slide35Image,
    slide36Image,
    slide41Image,
    slide46Image,
    slide49Image,
    slide51Image,
    slide52Image
  ]

  useEffect(() => {
    setWidth((carousel?.current?.scrollWidth ?? 0) - (carousel.current?.offsetWidth ?? 0));
  }, [carousel]);

  return (
    <section className='overflow-hidden relative'>
      <BaseCarousel className='bg-transparent !rounded-none' options={{
        containScroll: 'trimSnaps'
      }}>
        <SliderContainer className='gap-2 lg:gap-4'>
          {allSlides.map((slide, index) => (
            <Slider key={index}>
              <CarouselSlide slide={slide} index={index} setPopupOpen={setOpen} setSelectedIndex={setSelectedIndex} />
            </Slider>
          ))}
        </SliderContainer>

        {/* carousel details */}
        <div className='flex flex-col px-12 gap-10 mt-10 lg:flex-row lg:gap-12 lg:items-center w-full lg:justify-center'>
          <span className='block mx-auto lg:mx-0 w-full text-center font-sans text-xl lg:w-auto'>Photo and video by <a href="https://www.instagram.com/_frameofmnd/" target="_blank" rel="noopener noreferrer">Frame of Mind</a></span>

          {/* divider */}
          <span className='h-0.5 w-full bg-dark-green lg:w-1/3 xl:w-[607px] hidden lg:block' />
          <CarouselProgress />

          {/* carousel controls */}
          <div className='flex gap-2 items-center justify-center'>
            <SliderPrevButton className='flex items-center justify-center w-10 h-10 bg-transparent rounded-full border-2 border-dark-green min-w-10 min-h-10 lg:min-w-16 lg:min-h-16'>
              <Image src={leftArrow} width={14} height={14} alt='left arrow' className='lg:size-6' />
            </SliderPrevButton>
            <SliderNextButton className='flex items-center justify-center w-10 h-10 bg-transparent rounded-full border-2 border-dark-green rotate-180 min-w-10 min-h-10 lg:min-w-16 lg:min-h-16'>
              <Image src={leftArrow} width={14} height={14} alt='right arrow' className='lg:size-6' />
            </SliderNextButton>
            <button className='rounded-full border-2 border-dark-green py-3.5 px-11 uppercase text-dark-green font-sans text-lg font-bold leading-2 min-w-[166px] lg:px-6 lg:text-2xl lg:py-6' onClick={() => setOpen(true)}>View All</button>
          </div>
        </div>

        {/* Popup */}
        <CarouselPopup open={open} setOpen={setOpen} allSlides={allSlides} selectedIndex={selectedIndex} />
      </BaseCarousel>
    </section>
  )
}
