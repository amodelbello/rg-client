import React from 'react';
import PropTypes from 'prop-types';

const ratingByCategory = (ratings, category) => {
  return ratings.filter(rating => rating.category === category)[0];
};

const Business = ({ format = 'long', business }) => {
  const redRating = ratingByCategory(business.averageRatings, 'Red Chile');
  const greenRating = ratingByCategory(business.averageRatings, 'Green Chile');

  return (
    <section>
      <h5>{business.name}</h5>
      {format === 'long' && <p>{business.address}</p>}
      <dl>
        <dt>Red</dt>
        <dd>{redRating && redRating.rating}</dd>

        <dt>Green</dt>
        <dd>{greenRating && greenRating.rating}</dd>
      </dl>
    </section>
  );
};

Business.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    averageRatings: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, rating: Number })
    ),
  }),
  format: PropTypes.string,
};

export default Business;
