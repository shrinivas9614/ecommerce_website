import React from "react";

const AddressCard = ({ address }) => {
  if (!address) {
    return <div>Address not available</div>;
  }

  return (
    <div className="space-y-3">
      {address.firstName && address.lastName && (
        <p>{address.firstName + "  " + address.lastName}</p>
      )}

      {address.streetAddress && <p>{address.streetAddress}</p>}
      {address.city && address.state && address.zipCode && (
        <p>
          {address.city}, {address.state}, {address.zipCode}
        </p>
      )}

      {address.mobile && (
        <>
          <p className="font-semibold">Phone Number</p>
          <p>{address.mobile}</p>
        </>
      )}
    </div>
  );
};
export default AddressCard;
