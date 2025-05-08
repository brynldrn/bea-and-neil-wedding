import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./nextJsImage";
import { useCarouselContext } from "./base-carousel";
import { StaticImageData } from "next/image";

type CarouselPopupProps = {
  open: boolean,
  setOpen: (open: boolean) => void,
  allSlides: StaticImageData[],
  selectedIndex: number
}

export default function CarouselPopup({ open, setOpen, allSlides, selectedIndex = 0 }: CarouselPopupProps) {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={allSlides}
      render={{ slide: NextJsImage }}
      index={selectedIndex ?? 0}
    />
  )
}
