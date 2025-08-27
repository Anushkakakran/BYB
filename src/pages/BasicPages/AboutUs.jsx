import ChooseUs from '../../Components/ChooseUs';
import Button from "../../Components/Button";

const AboutUs = () => {
  return (
    <div className=" text-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center bg-white rounded-b-3xl shadow-md mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-royalBlue">
          Protecting Moments, One Event at a Time
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-darkBlue">
          At <span className="text-red font-semibold">Book Your Bouncer</span>, we provide professional and reliable security solutions — made simple and accessible.
        </p>
      </section>

      {/* Our Vision */}
      <section className="py-24 px-4 bg-black mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Vision"
            className="w-44 h-44 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-lg text-white">
              A safer, worry-free world — delivering trusted protection for every event and occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-4 bg-white mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            alt="Mission"
            className="w-44 h-44 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-royalBlue">Our Mission</h2>
            <ul className="space-y-4 text-lg list-disc list-inside text-darkBlue">
              <li>Make professional security accessible for everyone.</li>
              <li>Leverage technology for a seamless booking experience.</li>
              <li>Uphold the highest standards of trust and service.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Lorem Ipsum Paragraph Section */}
      <section className="py-24 px-4 bg-LightGray mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
            alt="Information"
            className="w-44 h-44 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Empowering Events with Excellence</h2>
            <p className="text-lg text-darkBlue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Why Book Your Bouncer */}
      <ChooseUs/>

      {/* Our Story */}
      <section className="py-24 px-4 bg-LightGray mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1792/1792931.png"
            alt="Our Story"
            className="w-44 h-44 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Story</h2>
            <p className="text-lg text-darkBlue mb-4">
              Born from the vision of experienced event managers and security professionals, Book Your Bouncer is India's trusted platform for event security services.
            </p>
            <p className="text-lg text-darkBlue">
              Our commitment? Empowering every event organizer with trusted, high-quality protection — made easy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-24 px-4 text-center rounded-t-3xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black">Let's Secure Your Next Event</h2>
          <p className="text-lg mb-8 text-LightGray">
            Book professional bouncers easily, reliably, and affordably.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button text="Book Now"
              className = "w-40 px-6 py-3 text-base rounded-full"
             />
            <button className="border border-white py-3 px-10 rounded-full font-semibold text-white hover:text-black bg-black hover:bg-lightGray transition">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
