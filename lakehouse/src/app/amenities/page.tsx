import Image from 'next/image';
import { mockAmenitiesText } from "../../../data/mock-data";
import { mockHeaderImg } from "../../../data/mock-data";

export default function Amenities() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                        {mockAmenitiesText[0].text}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {mockAmenitiesText[1].text}
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 items-center">
                    {mockAmenitiesText.slice(2).map((amenity) => {
                        
                        const info = amenity.info?.[0];
                        if (!info) return null; 

                        return (
                            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden h-[154px]" key={info.Title}>
                                <div className="mb-4 flex justify-center">
                                    <Image
                                        src={mockHeaderImg[0].url}
                                        alt="Amenity Image"
                                        width={50}
                                        height={40}
                                    />
                                </div>
                                <div className="text-center overflow-hidden">
                                    <h3 className="font-semibold text-foreground mb-2">{info.Title}</h3>
                                    <p className="text-muted-foreground text-sm">{info.Description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}