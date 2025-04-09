'use client'

import { useFieldArray, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { PlusIcon } from "lucide-react"
import Image from "next/image"
import flowerExtra from '@/public/icons/flower-extra.svg'
import flowerExtra2 from '@/public/icons/flower-extra-2.svg'

export default function Rsvp() {
  const { control, ...rest } = useForm()
  const { fields, append } = useFieldArray({
    control,
    name: "names"
  })

  return (
    <section id="rsvp" className="p-8 bg-brown-4 flex flex-col gap-16 overflow-hidden lg:py-24">
      <h1 className="font-serif text-cream font-light text-[100px] leading-[90%] tracking-[10px] text-center lg:text-[120px] xl:text-[400px] xl:tracking-[60px]">RSVP</h1>

      {/* details section */}
      <div className="block space-y-4 px-12 max-w-[839px] lg:mx-auto relative xl:pl-36 xl:pr-0">
        <span className="block text-2xl text-off-white font-serif italic">We hope to celebrate with you!</span>
        <span className="block font-sans text-base text-cream pr-12">
          Kindly let us know if you plan to attend by filling out the RSVP form below. Please submit your confirmation on or before <strong>JUNE 15, 2025</strong>.
        </span>
        {/* form section */}
        <Form control={control} {...rest}>
          <form className="flex flex-col gap-10 items-start justify-start max-w-[470px] lg:w-full mt-10 relative">
            {/* flowers */}
            <div className="hidden xl:flex gap-0 absolute -left-[140%] -top-1/2">
              <div className='aspect-[414/612] h-[612px] w-[214px] lg:w-[414px] relative mt-14'>
                <Image src={flowerExtra} alt='flower' fill className='object-fill' />
              </div>
              <div className='aspect-[301/533] h-[533px] w-[301px] relative -ml-32'>
                <Image src={flowerExtra2} alt='flower' fill className='object-fill' />
              </div>
            </div>

            {/* checkbox area */}
            <div className='flex flex-col gap-4'>
              <span className="font-sans text-base text-cream font-bold">Are you attending the event?</span>
              <FormField name="attending" render={() => (
                <FormItem>
                  <FormControl>
                    <RadioGroup defaultValue="yes" className="flex items-center gap-8 justify-start">
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-cream text-base font-light font-sans">Yes</Label>
                      </div>
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-cream text-base font-light font-sans">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )} />
            </div>

            {/* names area */}
            <div className='flex flex-col gap-4 w-full'>
              <span className="font-sans text-base text-cream font-bold">List the name(s) of the person/people attending.</span>
              <FormField name="name" render={() => (
                <FormItem>
                  <FormControl>
                    <input type="text" placeholder="Enter yout name here" className="placeholder:font-serif placeholder:italic placeholder:text-base placeholder:opacity-50 placeholder:text-cream border-b-2 border-cream pb-2 text-cream font-serif italic w-full" />
                  </FormControl>
                </FormItem>
              )} />
              {fields?.map((field) => (
                <FormField name="name" key={field.id} render={() => (
                  <FormItem>
                    <FormControl>
                      <input type="text" placeholder="Enter yout name here" className="placeholder:font-serif placeholder:italic placeholder:text-base placeholder:opacity-50 placeholder:text-cream border-b-2 border-cream pb-2 text-cream font-serif italic w-full" />
                    </FormControl>
                  </FormItem>
                )} />
              ))}
              <button type="button" className="flex items-center gap-4 font-sans text-cream mt-2" onClick={() => append({ name: "" })}>
                Add name <PlusIcon />
              </button>
            </div>

            <button type="submit" className="uppercase font-sans text-cream px-6 py-1 rounded-full text-2xl font-bold w-full border-2 border-cream lg:py-4">
              SUBMIT
            </button>
          </form>
        </Form>
      </div>
    </section>
  )
}
