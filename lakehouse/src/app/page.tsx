import { mockHeaderImg } from "../../data/mock-data";
import { mockHeaderText } from "../../data/mock-data";
import Hero from "../components/hero";

export default function Home() {
    const heroProps = {
        heroImg: mockHeaderImg[0].url,
        heroMainText: mockHeaderText[0].text,
        heroSubText: mockHeaderText[1].text,
    };

  return (
    <Hero heroValues = {heroProps} />
  );
}