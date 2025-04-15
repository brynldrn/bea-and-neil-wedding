'use client';

import church from '@/public/icons/church.svg';
import reception from '@/public/icons/reception.svg';
import flowerLeft from '@/public/icons/flower-left.svg';
import flowerRight from '@/public/icons/flower-right.svg';
import Image from 'next/image';

export default function Location() {
  return (
    <section id="details" className="mt-16 py-16 pt-[100px] bg-light-green flex flex-col gap-20 items-center justify-center rounded-tl-full rounded-tr-full px-12 relative overflow-hidden max-w-[1440px] xl:mx-auto">
      <span className="block text-white font-serif italic text-[32px] text-center w-[277px] line-clamp-2 -mt-5 md:px-34 md:w-[730px] md:line-clamp-3 lg:mt-20 lg:w-[953px] lg:text-[56px]">
        Together with hearts full of love, we invite you to be part of our wedding day
      </span>
      <span className="text-white font-serif text-[80px] text-center leading-[90px] w-[211px] break-words md:break-normal md:w-full md:text-[100px]">07.12.2025</span>

      {/* church location */}
      <div className='flex flex-col gap-16 xl:flex-row xl:justify-between'>
        <div className="flex flex-col gap-10">
          <div className='relative h-[153px] w-full aspect-[277/153]'>
            <Image alt='church' src={church} fill className='object-fill' />
          </div>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <span className='font-sans text-white font-bold text-2xl'>Ceremony</span>
            <span className='text-white font-serif text-lg text-center md:block md:w-[320px]'>Sta. Maria Della Strada Parish, Katipunan Ave. Quezon City</span>
            <span className='font-sans text-white font-bold text-2xl'>2:30 PM</span>
          </div>
        </div>

        {/* reception location */}
        <div className="flex flex-col gap-10">
          <div className='relative h-[153px] w-full aspect-[277/153]'>
            <Image alt='reception' src={reception} fill className='object-fill' />
          </div>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <span className='font-sans text-white font-bold text-2xl'>Reception</span>
            <span className='text-white font-serif text-lg text-center md:block md:w-[320px]'>Glass Garden, 257 Evangelista Ave. Santolan, Pasig City</span>
            <span className='font-sans text-white font-bold text-2xl'>5:00 PM</span>
          </div>
        </div>
      </div>

      {/* flowers */}
      <div className='hidden md:block absolute bottom-0 left-0 lg:-left-10 2xl:left-3 2xl:rotate-6'>
        <div className='aspect-[310/549] h-[549px] w-[110px] lg:w-[310px] relative'>
          <Image src={flowerLeft} alt='flower' fill className='object-fill' />
        </div>
      </div>
      <div className='hidden md:block absolute bottom-0 right-0 lg:-right-10 2xl:right-0 2xl:-rotate-6'>
        <div className='aspect-[414/612] h-[612px] w-[214px] lg:w-[414px] relative'>
          <Image src={flowerRight} alt='flower' fill className='object-fill' />
        </div>
      </div>
    </section>
  )
}
