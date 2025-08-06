import ChooseUs from "./ChooseUs";
import Services from "./Services";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Testimonals from "./Testimonals";
import CallToAction from "./CallToAction";
import FeaturedBouncer from "./FeaturedBouncer";
import HeroCarousel from "./HeroCarousel";

function Home() {
  return (
    <div className="min-h-screen text-black">
    <HeroCarousel/>

       <Services/>
       <Banner/>
      <ChooseUs />
        <NewsLetter/>
        <Testimonals/>
     <CallToAction/>
      <FeaturedBouncer/>
     
    </div>
  );
}

export default Home;
