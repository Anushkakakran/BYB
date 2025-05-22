import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BouncerDetails = () => {
  const { state: bouncer } = useLocation();

  if (!bouncer) {
    return (
      <div className="mt-28 px-4 text-center text-gray pb-24">
        <p className="text-lg font-semibold mb-4">No bouncer data available. Please go back and select one.</p>
        <Link
          to="/book-bouncer"
          className="inline-block text-black hover:text-gray transition underline font-medium"
        >
          &larr; Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 max-w-4xl mx-auto">
      <Link
        to="/book-bouncer"
        className="mb-6 inline-block text-black hover:text-gray transition underline font-medium"
      >
       &larr; Back to Bouncers 
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={bouncer.Profile_Image__c}
          alt={bouncer.Name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-black mb-2">{bouncer.Name}</h1>
          <p className="text-gray font-semibold mb-4">{bouncer.Rating} ★ Bouncer</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray">
            <Detail label="Age" value={bouncer.Age__c} />
            <Detail label="Phone" value={bouncer.Phone} />
            <Detail label="Height" value={bouncer.Height__c} />
            <Detail label="Weight" value={`${bouncer.Weight} kg`} />
            <Detail label="Chest" value={bouncer.Chest__c} />
            <Detail label="Biceps" value={bouncer.Biceps__c} />
            <Detail
              label="Date of Registration"
              value={new Date(bouncer.Date_of_Registration__c).toLocaleDateString()}
            />
            <Detail label="Active" value={bouncer.Active__c ? 'Yes' : 'No'} />
          </div>

          <AddressSection
            title="Billing Address"
            address={bouncer.BillingAddress}
          />
          <AddressSection
            title="Shipping Address"
            address={bouncer.ShippingAddress}
          />
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <p>
    <span className="font-semibold text-black">{label}:</span> {value || 'N/A'}
  </p>
);


const AddressSection = ({ title, address }) => {
  if (!address) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
      <address className="not-italic text-gray leading-relaxed">
        {address.street},<br />
        {address.city}, {address.state} {address.postalCode},<br />
        {address.country}
      </address>
    </div>
  );
};

export default BouncerDetails;
