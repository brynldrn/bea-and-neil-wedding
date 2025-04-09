import AttireAndGifts from "@/components/attire-and-gifts";
import Carousel from "@/components/carousel";
import Hero from "@/components/hero";
import Location from "@/components/location";
import Rsvp from "@/components/rsvp";
import TwoUp from "@/components/two-up";

export default function Home() {
  return (
    <main>
      <Hero />
      <TwoUp />
      <Carousel />
      <Location />
      <AttireAndGifts />
      <Rsvp />
    </main>
  );
}
