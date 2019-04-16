import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ address }) => {
  const { street, street2, city, state, zip } = address;
  return (
    <React.Fragment>
      {street ? (
        <React.Fragment>
          {street}
          <br />
        </React.Fragment>
      ) : (
        ''
      )}
      {street2 ? (
        <React.Fragment>
          {street2}
          <br />
        </React.Fragment>
      ) : (
        ''
      )}
      {city ? (
        <React.Fragment>
          {city}
          <br />
        </React.Fragment>
      ) : (
        ''
      )}
      {state ? (
        <React.Fragment>
          {state}
          <br />
        </React.Fragment>
      ) : (
        ''
      )}
      {zip ? (
        <React.Fragment>
          {zip}
          <br />
        </React.Fragment>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

Address.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    street2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }),
};

export default Address;
