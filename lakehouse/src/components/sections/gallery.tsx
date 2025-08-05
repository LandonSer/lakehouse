import GridSm from "@/components/grid-sm";
import { mockGalleryCarousel } from "../../../data/mock-data";
import { mockGalleryText } from "../../../data/mock-data";
import CarouselLg from "../carousel-lg";

export default function Gallery() {
    const carouselProps = {
        cardImg: mockGalleryCarousel,
    };

    const gridProps = {
        cardImg: mockGalleryCarousel,
    };

  return (
    <section id="gallery" className="py-20">
        <div className="relative mx-auto px-6 ">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                    {mockGalleryText[0].text}
                </h2>
                <p className="text-xl text-muted-foreground">
                    {mockGalleryText[1].text}
                </p>
            </div>

            <div className="mb-12 w-full overflow-hidden">
                <CarouselLg cardValues = {carouselProps} />
            </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {mockGalleryText[2].text}
          </h3>
          <GridSm gridValues = {gridProps} />
        </div>
    </section>
  );
}