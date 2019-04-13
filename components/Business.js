import React from 'react';
import PropTypes from 'prop-types';

const Business = ({ format = 'long', business }) => (
  <section>
    <h5>{business.name}</h5>
    {format === 'long' && <p>{business.address}</p>}
    <dl>
      <dt>Red</dt>
      <dd>5</dd>

      <dt>Green</dt>
      <dd>5</dd>
    </dl>
  </section>
);

Business.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
  }),
  format: PropTypes.string,
};

export default Business;
