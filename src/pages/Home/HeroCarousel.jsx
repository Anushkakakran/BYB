import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";
import { Link } from "react-router-dom";
import Button from '../../Components/Button';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const HeroCarousel = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  return (
    <div className="relative text-white mb-16 w-full overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={true} 
        swipeable
        emulateTouch
      >
        {heroImages.map((image, index) => (
          <div key={index} className="relative w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[60vh] md:h-[90vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
                Secure Your Event with Confidence
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg mb-4 max-w-md">
                Trained, professional bouncers for all occasions — parties,
                weddings, corporate events, and more.
              </p>
              <Link to="/contact">
                <Button text = "Book Now"/>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroCarousel
