'use client'

import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { CircleX, LoaderCircle, PlusIcon, X } from "lucide-react"
import Image from "next/image"
import flowerExtra from '@/public/icons/flower-extra.svg'
import flowerExtra2 from '@/public/icons/flower-extra-2.svg'
import { useEffect, useState } from "react"
import { writeToSheets } from "@/app/actions"
import { toast } from "sonner"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from "@/lib/utils"
import exclamationMark from '@/public/icons/exclamation.svg'

export default function Rsvp() {
  const formSchema = z.object({
    names: z.array(z.object({
      name: z.string().nonempty('Please enter a name here')
    }))
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const { control, handleSubmit, register, reset, formState: { errors } } = form || {}
  const { fields, append, remove } = useFieldArray({
    control,
    name: "names"
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isAttending, setIsAttending] = useState('yes')

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    setIsLoading(true)
    const { names } = data || {}

    const flattenedNames = names.map((name) => name.name.trim()).filter((name) => name !== '')

    await writeToSheets({
      names: flattenedNames,
      status: isAttending === 'yes' ? 'Accepted' : 'Declined'
    })

    setIsLoading(false)
    toast('Your RSVP has been submitted!')

    reset()
    setIsAttending('yes')

    // remove all and append 1
    remove()
    append({ name: '' })
  }

  useEffect(() => {
    append({ name: '' }, {
      shouldFocus: false
    })
  }, [])

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
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-start justify-start max-w-[470px] lg:w-full mt-10 relative">
            {/* flowers */}
            <div className="hidden xl:flex gap-0 absolute -left-[140%] -bottom-[250px]">
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
                    <RadioGroup value={isAttending} className="flex items-center gap-8 justify-start" onValueChange={(value) => setIsAttending(value)}>
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
              <span className="font-sans text-base text-cream font-bold">Enter your name and the names of those attending with you.</span>
              {fields?.map((field, index) => {
                const { message, name } = errors?.names?.[index] || {}

                return (
                  <FormField name={`names.${index}.name`} key={field.id} render={() => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center relative">
                          <input {...register(`names.${index}.name`)} type="text" placeholder="Enter yout name here" className={cn('placeholder:font-serif placeholder:italic placeholder:text-base placeholder:opacity-50 placeholder:text-cream border-1 py-2 text-cream font-serif italic w-full px-4 rounded-sm', {
                            'border-brown-6': name,
                            'border-brown-3': !name
                          })} />

                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-1">
                            {name && (
                              <div className="bg-brown-6 rounded-full size-5 flex items-center justify-center relative">
                                <Image src={exclamationMark} fill className="object-fill scale-50" alt="warning" />
                              </div>
                            )}
                            {index !== 0 && (
                              <button className="bg-white rounded-full size-5 text-center flex items-center justify-center" type="button" onClick={() => remove(index)}>
                                <X className="size-3" color="brown" strokeWidth={3} />
                              </button>
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-brown-6">{message}</FormMessage>
                    </FormItem>
                  )} />
                )
              })}
              {fields?.length <= 15 && (
                <button type="button" className="inline-flex items-center gap-2 font-sans text-cream mt-2 bg-white/10 self-start rounded-full py-1 px-2.5" onClick={() => append({ name: '' })}>
                  Add name <PlusIcon />
                </button>
              )}
            </div>

            <button disabled={isLoading} type="submit" className="uppercase font-sans bg-cream px-6 py-1 rounded-full text-2xl font-bold w-full text-brown-5 lg:py-4 text-center">
              {isLoading ? <LoaderCircle className="animate-spin mx-auto text-cream" size={32} /> : 'Submit'}
            </button>
          </form>
        </Form>
      </div>
    </section>
  )
}
