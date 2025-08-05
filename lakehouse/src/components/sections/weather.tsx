import WeatherBar from "@/components/weather-bar";
import { mockWeatherText } from "../../../data/mock-data";
import { mockHeaderImg } from "../../../data/mock-data";

export default function Weather() {
    const weatherProps = {
            weatherText: mockWeatherText,
            weatherImage: mockHeaderImg[0].url,
        };

    return (
        <section id="weather" className="py-12 border-t border-border">
            <WeatherBar weatherValues = {weatherProps} /> 
        </section>
    )
}