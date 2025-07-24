import Image from 'next/image';
import { mockAboutText } from "../../../data/mock-data";
import { mockHeaderImg } from "../../../data/mock-data";

export default function About() {
    return (
        <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">
                                {mockAboutText[0].text}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {mockAboutText[1].text}
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {mockAboutText[2].text}
                            </p>
                        </div>
                        <div className="relative rounded-lg shadow-lg max-w-[630px] h-96 overflow-hidden">
                            <Image
                                src={mockHeaderImg[0].url}
                                alt="About Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
        
                <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                </h3>
                </div>
            </section>
    );
}