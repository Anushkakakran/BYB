import { Link } from "react-router-dom";
import Button from '../../Components/Button';

const CallToAction = () => {
  return (
    <div  className="bg-black text-white py-16 text-center px-4 mb-16">
          
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Ready to Secure Your Event?</h2>
        <p className="mb-6">Book trained and verified bouncers in just a few clicks.</p>
        <Link to="/Book-Bouncer">
          <Button text="Book Your Bouncer" />
        </Link>
    </div>
  )
}

export default CallToAction
