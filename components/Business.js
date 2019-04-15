import React from 'react';
import PropTypes from 'prop-types';

const ratingByCategory = (ratings, category) => {
  return ratings.filter(rating => rating.category === category)[0];
};

const Business = ({ format = 'long', business }) => {
  const redRating = ratingByCategory(business.averageRatings, 'Red Chile');
  const greenRating = ratingByCategory(business.averageRatings, 'Green Chile');

  return (
    <li>
      <h3>{business.name}</h3>
      {format === 'long' && <div>{business.address}</div>}
      <div>
        <p>
          <span>Red: </span>
          {redRating && redRating.rating}
        </p>
        <p>
          <span>Green: </span>
          {greenRating && greenRating.rating}
        </p>
      </div>
    </li>
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
