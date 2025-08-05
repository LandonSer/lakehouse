import Image from 'next/image';
import { mockAboutText } from "../../../data/mock-data";
import { mockHeaderImg } from "../../../data/mock-data";

export default function About() {
    return (
        <section id="about" className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
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

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">{mockAboutText[3].text}</h4>
                                    <p className="text-muted-foreground">{mockAboutText[4].text}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">{mockAboutText[5].text}</h4>
                                    <p className="text-muted-foreground">{mockAboutText[6].text}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">{mockAboutText[7].text}</h4>
                                    <p className="text-muted-foreground">{mockAboutText[8].text}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">{mockAboutText[9].text}</h4>
                                    <p className="text-muted-foreground">{mockAboutText[10].text}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-lg shadow-lg w-full h-96 overflow-hidden">
                            <Image
                                src={mockHeaderImg[0].url}
                                alt="About Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
    );
}