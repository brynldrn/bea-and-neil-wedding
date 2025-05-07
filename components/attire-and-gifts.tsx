'use client'

import x from '@/public/icons/x.svg'
import men from '@/public/icons/men.svg'
import women from '@/public/icons/women.svg'
import qr from '@/public/icons/QR.svg'
import gifts from '@/public/images/gifts.png'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function AttireAndGifts() {

  return (
    <section id="attire-and-gifts" className='bg-white w-full'>
      <div className="py-16 bg-white flex flex-col gap-16 max-w-[1440px] xl:mx-auto xl:overflow-hidden">
        <h1 className="font-serif text-dark-green font-light text-[64px] uppercase px-8 text-center tracking-[5px] lg:text-[120px] xl:text-[150px]">Attire &amp; Gifts</h1>

        {/* details section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-center lg:items-center">
          {/* card */}
          <div className="flex flex-col items-center justify-center gap-10 basis-full px-12 lg:order-2 lg:px-4 xl:px-22 xl:w-1/3">
            {/* top section */}
            <div className="flex flex-col gap-6 items-center">
              {/* title */}
              <span className="uppercase font-sans text-dark-green font-bold text-2xl">Strictly Formal</span>
              {/* details */}
              <span className="text-dark-green font-serif text-base text-center">
                We kindly encourage our guests to wear formal attire in our color palette for our special day.
              </span>
            </div>
            {/* color palette */}
            <div className="flex flex-wrap gap-4 justify-center items-center px-5">
              <div className="size-16 rounded-full bg-brown-1" />
              <div className="size-16 rounded-full bg-brown-2" />
              <div className="size-16 rounded-full bg-brown-3" />
              <div className="size-16 rounded-full bg-green-1" />
              <div className="size-16 rounded-full bg-green-2" />
            </div>
            {/* divider */}
            <span className='block h-[1px] w-full bg-dark-green lg:w-1/3 xl:w-full' />

            {/* avoid section */}
            <div className="flex flex-col gap-6 items-center">
              <span className="text-lg uppercase font-sans text-dark-green">
                <strong className="font-bold">Avoid</strong> the following:
              </span>

              <div className="flex flex-col gap-4 items-center">
                <div className='flex gap-4 items-center'>
                  <div className='relative aspect-square size-6 '>
                    <Image alt="don't wear" src={x} fill className='object-fill' />
                  </div>
                  <span className='font-serif text-dark-green text-base'>Denim pants</span>
                </div>
                <div className='flex gap-4 items-center'>
                  <div className='relative aspect-square size-6 '>
                    <Image alt="don't wear" src={x} fill className='object-fill' />
                  </div>
                  <span className='font-serif text-dark-green text-base'>White gown</span>
                </div>
              </div>
            </div>
          </div>

          {/* card */}
          <motion.div
            whileHover={{ backgroundColor: 'var(--cream)' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-10 basis-full bg-bone-white py-16 px-12 rounded-tr-[50px] rounded-br-[50px] mr-8 lg:order-1 lg:mr-0 xl:rounded-tr-[100px] xl:rounded-br-[100px] xl:py-[72px]"
          >
            <div className='relative aspect-[244/281] w-full h-[281px]'>
              <Image src={men} alt="men's attire" fill className='object-fill' />
            </div>
            {/* details section */}
            <div className="flex flex-col gap-6 items-center">
              {/* title */}
              <span className="uppercase font-sans text-dark-green font-bold text-2xl">Gentlemen</span>
              {/* details */}
              <span className="text-dark-green font-serif text-base text-center">
                Suit or Long Sleeves and Trousers
              </span>
            </div>
          </motion.div>

          {/* card */}
          <motion.div
            whileHover={{ backgroundColor: 'var(--cream)' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-10 basis-full bg-bone-white py-16 px-12 rounded-tl-[50px] rounded-bl-[50px] ml-8 lg:order-3 lg:ml-0 xl:rounded-tl-[100px] xl:rounded-bl-[100px] xl:py-[72px]"
          >
            <div className='relative aspect-[244/281] w-full h-[281px]'>
              <Image src={women} alt="women's attire" fill className='object-fill' />
            </div>
            {/* details section */}
            <div className="flex flex-col gap-6 items-center">
              {/* title */}
              <span className="uppercase font-sans text-dark-green font-bold text-2xl">Ladies</span>
              {/* details */}
              <span className="text-dark-green font-serif text-base text-center">
                Long Gown or Suit
              </span>
            </div>
          </motion.div>
        </div>

        {/* gifts section */}
        <div className='flex flex-col px-8 lg:flex-row lg:gap-0 lg:items-center lg:px-10 xl:px-24'>
          <div className='flex gap-10 pl-16 flex-col relative before:absolute before:content-[""] before:w-[1px] before:h-full before:bg-dark-green before:left-8 before:top-3 lg:pl-0 lg:before:hidden xl:gap-16'>
            <span className='font-serif text-dark-green italic text-[28px] lg:pr-8 lg:pt-16 xl:text-[40px] xl:pr-10 xl:pt-20'>
              Your presence is the greatest gift we could ask for. However, if you&rsquo;d like to give something, we would appreciate a monetary gift.
            </span>

            {/* divider */}
            <span className='hidden lg:block h-[1px] w-full bg-dark-green' />

            {/* QR Group */}
            <div className='flex flex-col gap-6 justify-start pr-8 pb-10 lg:flex-row lg:gap-4 lg:items-center xl:justify-start xl:pr-[30%]'>
              <span className='font-sans text-dark-green text-sm'>
                Alternatively, you may visit <a href="http://bit.ly/BeaNeilRegistry" target='_blank'>bit.ly/BeaNeilRegistry</a> or scan the QR code for our gift registry.
              </span>
              <div className='relative aspect-square size-[82px]'>
                <Image src={qr} alt="QR code" fill className='object-fill' />
              </div>
            </div>
          </div>
          <div className='relative aspect-square min-h-[309px] w-full lg:min-h-[400px] xl:min-h-[470px] xl:max-h-[470px] xl:max-w-[470px] overflow-hidden'>
            <Image src={gifts} alt="gifts" fill className='object-fill hover:scale-110 duration-1000 ease-in-out' />
          </div>
        </div>
      </div>
    </section>
  )
}
