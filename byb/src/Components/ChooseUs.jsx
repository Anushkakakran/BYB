import React from 'react'

const ChooseUs = () => {
  return (
    <div className="bg-white py-24 px-4 mb-20">
        {/* Why Book Your Bouncer */}
       <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Why Book Your Bouncer?</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Verified Professionals', desc: 'Certified, trained, and background-verified staff.' },
              { title: 'Transparent Pricing', desc: 'Clear, upfront rates with no hidden charges.' },
              { title: 'Nationwide Network', desc: 'Available across cities and towns in India.' },
              { title: 'Tailored Security Solutions', desc: 'Custom protection plans for every need.' },
              { title: '24/7 Booking Support', desc: 'Help is always just a call or click away.' },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-LightGray rounded-2xl shadow hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
   
      
    </div>
  )
}

export default ChooseUs
