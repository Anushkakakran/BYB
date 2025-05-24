import React from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/hero-bouncer.jpg";
import heroImage2 from "../assets/hero.png";
import heroImage3 from "../assets/hero2.png";
import { GiSecurityGate } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { FaShieldAlt, FaUser } from "react-icons/fa";
import ChooseUs from "../Components/ChooseUs";
import Button from "../Components/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const heroImages = [
    heroImage1,
     heroImage2,
      heroImage3,
  ];
  return (
    <div className="min-h-screen top-0  text-black">
      {/* Hero Section */}
  <section className="relative flex items-center justify-center text-white mb-16">
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showThumbs={false}
    showStatus={false}
    showArrows={false}
    showIndicators={false}
    swipeable={false}
    emulateTouch={false}
  >
    {heroImages.map((image, index) => (
      <div
        key={index}
        className="w-full h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Secure Your Event with Confidence
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
            Trained, professional bouncers for all occasions — parties,
            weddings, corporate events, and more.
          </p>
          <Link to="/Book-Bouncer">
            <Button text="Book Now" />
          </Link>
        </div>
      </div>
    ))}
  </Carousel>
</section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Event Security",
              desc: "Ensuring safety at concerts, weddings, and private gatherings.",
              icon: (
                <GiSecurityGate className="w-12 h-12 text-darkBlue mx-auto mb-4" />
              ),
            },
            {
              title: "VIP Protection",
              desc: "Confidential and reliable security for high-profile clients.",
              icon: (
                <FaShieldAlt className="w-12 h-12 text-darkBlue mx-auto mb-4" />
              ),
            },
            {
              title: "Nightclub Security",
              desc: "Trained personnel for clubs, bars, and late-night venues.",
              icon: (
                <Ri24HoursFill className="w-12 h-12 text-darkBlue mx-auto mb-4" />
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {service.icon}
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-royalBlue">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Black Banner Section */}
      <section className="bg-black text-white py-20 px-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Book Your Bouncer Today
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Professional Security Services for Every Occasion
        </p>
        <Link
          to="/Book-Bouncer"
        
        >
           <Button text="Book Now"/>
        </Link>
      </section>

      {/* Why Choose Us Section */}
    <ChooseUs/>

      {/* Newsletter Section */}
      <section className="relative text-white py-16 px-4 text-center mb-16">
        <div className="absolute inset-0 bg-black clip-shape"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive security tips and event
            updates.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-full text-black outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:text-gray transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .clip-shape {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
        }
      `}</style>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100 text-center mb-16">
        <h2 className="text-3xl font-semibold text-black mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              testimonial:
                "The bouncers were very professional, made sure everyone was safe, and handled the crowd perfectly.",
            },
            {
              name: "Sarah Smith",
              testimonial:
                "Highly recommend! They were punctual, friendly, and provided great security for our event.",
            },
            {
              name: "Emily Clark",
              testimonial:
                "Great experience. Their team made our wedding day feel safe and stress-free.",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p className="text-sm text-darkBlue italic">
                "{client.testimonial}"
              </p>
              <p className="font-semibold mt-4">{client.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white py-16 text-center px-4 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Ready to Secure Your Event?
        </h2>
        <p className="mb-6">
          Book trained and verified bouncers in just a few clicks.
        </p>
        <Link
          to="/Book-Bouncer"
        >
           <Button text="Book Your Bouncer"/>
        </Link>
      </section>

      {/* Featured Bouncers Section */}
      <section className="bg-white py-16 px-4 text-center mb-16">
        <h2 className="text-3xl font-semibold text-darkBlue mb-12">
          Featured Bouncers
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Mike",
              role: "Head Bouncer",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
            {
              name: "Liam",
              role: "Security Expert",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
            {
              name: "Sophia",
              role: "VIP Protection",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
          ].map((bouncer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                {bouncer.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{bouncer.name}</h3>
              <p className="text-sm text-royalBlue">{bouncer.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
