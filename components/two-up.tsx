'use client'

import twoUpImage from '@/public/images/two-up.png'
import secondHalfImage from '@/public/images/second-half.png'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function TwoUp() {
  return (
    <section className="flex px-4 bg-cream py-10 flex-col max-w-[1440px] xl:mx-auto" id="our-story">
      <div className='relative h-[611px] lg:h-[741px] w-full flex flex-col gap-20 items-center px-8 py-16'>
        <Image src={twoUpImage} fill alt='Bea and Neil holding hands' className='object-cover w-full h-full' />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white font-light text-[64px] text-center leading-[120%] tracking-widest font-serif z-20 lg:text-[120px] xl:text-[150px]'
        >
          OUR STORY
        </motion.h1>

        {/* supporting text */}
        <div className='flex flex-col gap-10 z-20 lg:w-full lg:px-10 xl:px-[120px]'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-off-white italic font-normal text-[20px] font-serif w-1/2 lg:text-[30px] lg:max-w-[348px] xl:text-[40px]'>
            Six years ago, our paths crossed...
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-off-white italic font-normal text-[20px] font-serif w-1/2 ml-auto lg:text-[30px] lg:max-w-[348px] xl:text-[40px]'
          >
            ...and we&rsquo;ve been inseparable ever since.
          </motion.h2>
        </div>
      </div>

      {/* translated section */}
      <div className='flex flex-col gap-10 px-8 translate-y-[-50px] lg:flex-row lg:flex-nowrap lg:gap-[130px] lg:items-end'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative h-[370px] w-[277px] lg:w-[348px] lg:h-[466px] flex mx-auto lg:mx-0'>
          <Image src={secondHalfImage} fill alt='Bea and Neil hugging' />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-[18px] font-serif font-normal leading-[160%] text-dark-green xl:text-2xl lg:basis-1/2 xl:basis-2/3'>
          These years have been the most incredible of our lives &ndash; filled with laughter, love, and memories we&rsquo;ll cherish forever. From spontaneous samgyupsal dates and discovering the best sushi spots to bonding over our love for badminton and enjoying peaceful moments by the beach, every experience has been a reminder of how lucky we are to share this journey together.
        </motion.p>
      </div>
    </section>
  )
}
