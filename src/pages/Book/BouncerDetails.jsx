import { useLocation, Link } from 'react-router-dom';

const BouncerDetails = () => {
  const { state: bouncer } = useLocation();

  if (!bouncer) {
    return (
      <div className="mt-28 px-4 text-center text-gray-600 pb-24">
        <p className="text-lg font-semibold mb-4">
          No bouncer data available. Please go back and select one.
        </p>
        <Link
          to="/book-bouncer"
          className="inline-block text-black hover:text-gray-700 transition underline font-medium"
        >
          &larr; Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-24 pb-24 max-w-5xl mx-auto">
      <Link
        to="/book-bouncer"
        className="mb-6 inline-block text-black hover:text-gray-700 transition underline font-medium"
      >
        &larr; Back to Bouncers
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={bouncer.Profile_Image__c}
          alt={bouncer.Name}
          className="w-full h-64 sm:h-80 md:h-[22rem] object-cover"
        />

        <div className="p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            {bouncer.Salutation} {bouncer.FirstName} {bouncer.LastName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
            <Detail label="Age" value={bouncer.Age__c} />
            <Detail label="Phone" value={bouncer.Phone} />
            <Detail label="Height" value={bouncer.Height_in_Centimeters__c} />
            <Detail label="Weight" value={`${bouncer.Weight_in_Kilograms__c} kg`} />
            <Detail label="Chest" value={bouncer.Chest_in_Inches__c} />
            <Detail label="Biceps" value={bouncer.Biceps_in_Inches__c} />
            <Detail
              label="Date of Registration"
              value={new Date(bouncer.Date_of_Registration__c).toLocaleDateString()}
            />
            <Detail label="Active" value={bouncer.Active__c ? 'No' : 'Yes'} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <AddressSection title="Billing Address" address={bouncer.BillingAddress} />
            <AddressSection title="Shipping Address" address={bouncer.ShippingAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <p className="text-sm sm:text-base">
    <span className="font-semibold text-black">{label}:</span>{' '}
    {value || 'N/A'}
  </p>
);

const AddressSection = ({ title, address }) => {
  if (!address) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-black mb-1">{title}</h3>
      <address className="not-italic text-gray-700 text-sm leading-relaxed">
        {address.street},<br />
        {address.city}, {address.state} {address.postalCode},<br />
        {address.country}
      </address>
    </div>
  );
};

export default BouncerDetails;
