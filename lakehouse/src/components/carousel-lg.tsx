import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent } from './ui/card';

export default function CarouselLg(props: any) {

    return (
        <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent className="-ml-1">
                {props.cardValues.cardImg.map((item: any, index: number) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                            <Card className="py-0">
                                <CardContent className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group bg-white">
                                    <Image 
                                        src={item.url}
                                        alt={`Gallery Image ${index + 1}`}
                                        fill
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-blue-600 border-blue-200 shadow-lg" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white text-blue-600 border-blue-200 shadow-lg" />
        </Carousel>
    );
}