import Image from 'next/image'

export default function WeatherBar(props: any) {
    return (
        <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
          
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Image
                src={props.weatherValues.weatherImage}
                alt="Weather Icon"  
                width={32}
                height={32}
            />
            <div>
              <div className="text-2xl font-semibold text-foreground">{props.weatherValues.weatherText[0].text}</div>
              <div className="text-muted-foreground">{props.weatherValues.weatherText[1].text}</div>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-center md:text-left">
            <div>
              <div className="text-sm text-muted-foreground mb-1">{props.weatherValues.weatherText[2].text}</div>
              <div className="font-semibold text-foreground">{props.weatherValues.weatherText[3].text}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">{props.weatherValues.weatherText[4].text}</div>
              <div className="font-semibold text-foreground">{props.weatherValues.weatherText[5].text}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">{props.weatherValues.weatherText[6].text}</div>
              <div className="font-semibold text-foreground">{props.weatherValues.weatherText[7].text}</div>
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <div className="text-sm text-muted-foreground">{props.weatherValues.weatherText[8].text}</div>
            <div className="text-sm text-muted-foreground">{props.weatherValues.weatherText[9].text}</div>
          </div>
        </div>
      </div>
    )
}