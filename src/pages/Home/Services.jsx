import { GiSecurityGate } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto mb-16">
      {/* Services Section */}
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Event Security",
              desc: "Ensuring safety at concerts, weddings, and private gatherings.",
              icon: <GiSecurityGate className="w-12 h-12 text-darkBlue mx-auto mb-4" />,
            },
            {
              title: "VIP Protection",
              desc: "Confidential and reliable security for high-profile clients.",
              icon: <FaShieldAlt className="w-12 h-12 text-darkBlue mx-auto mb-4" />,
            },
            {
              title: "Nightclub Security",
              desc: "Trained personnel for clubs, bars, and late-night venues.",
              icon: <Ri24HoursFill className="w-12 h-12 text-darkBlue mx-auto mb-4" />,
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              {service.icon}
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-royalBlue">{service.desc}</p>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Services
