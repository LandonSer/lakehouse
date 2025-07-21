import Image from 'next/image'

export default function Hero(props: any) {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <Image 
                src = {props.heroValues.heroImg}
                alt = "Lakehouse Hero Image"
                fill = {true}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent z-0" />


            <div className="relative z-10 text-center text-white max-w-4xl px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    {props.heroValues.heroMainText}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {props.heroValues.heroSubText}
                </p>
            </div>
        </div>
    );
}