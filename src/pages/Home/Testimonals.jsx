import React from 'react'

const Testimonals = () => {
  return (
    <div className="py-16 px-4 bg-gray-100 text-center mb-16">
        <h2 className="text-3xl font-semibold text-black mb-12">What Our Clients Say</h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              testimonial: "The bouncers were very professional, made sure everyone was safe, and handled the crowd perfectly.",
            },
            {
              name: "Sarah Smith",
              testimonial: "Highly recommend! They were punctual, friendly, and provided great security for our event.",
            },
            {
              name: "Emily Clark",
              testimonial: "Great experience. Their team made our wedding day feel safe and stress-free.",
            },
          ].map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-sm text-darkBlue italic">"{client.testimonial}"</p>
              <p className="font-semibold mt-4">{client.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonals
