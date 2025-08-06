import { Link } from "react-router-dom";
import Button from '../../Components/Button';

const Banner = () => {
  return (
    <div className="bg-black text-white py-20 px-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Book Your Bouncer Today</h2>
        <p className="text-lg sm:text-xl mb-6">
          Professional Security Services for Every Occasion
        </p>
        <Link to="/Book-Bouncer">
          <Button text="Book Now" />
        </Link>
    </div>
  )
}

export default Banner
