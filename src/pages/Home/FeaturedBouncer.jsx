import { FaUser } from "react-icons/fa";

const FeaturedBouncer = () => {
  return (
    <div className="bg-white py-16 px-4 text-center mb-16">
        <h2 className="text-3xl font-semibold text-darkBlue mb-12">Featured Bouncers</h2>
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                {bouncer.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{bouncer.name}</h3>
              <p className="text-sm text-royalBlue">{bouncer.role}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FeaturedBouncer
