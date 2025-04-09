'use client'

export default function Rsvp() {
  return (
    <section id="rsvp" className="p-8 bg-brown-4 flex flex-col gap-16">
      <h1 className="font-serif text-cream font-light text-[100px] leading-[90%] tracking-[10px] text-center">RSVP</h1>

      {/* details section */}
      <div className="block space-y-4 px-12">
        <span className="block text-2xl text-off-white font-serif italic">We hope to celebrate with you!</span>
        <span className="block font-sans text-base text-cream pr-12">
          Kindly let us know if you plan to attend by filling out the RSVP form below. Please submit your confirmation on or before <strong>JUNE 15, 2025</strong>.
        </span>
      </div>

      {/* form section */}
      <form className="flex flex-col gap-10 items-start justify-start">
        {/* checkbox area */}

      </form>
    </section>
  )
}
