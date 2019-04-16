import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Address from './Address';

const ratingByCategory = (ratings, category) => {
  return ratings && ratings.length
    ? ratings.filter(rating => rating.category === category)[0]
    : [];
};

const Business = ({ format = 'long', business }) => {
  let redRating;
  let greenRating;
  let address;
  if (business) {
    redRating = ratingByCategory(business.averageRatings, 'Red Chile');
    greenRating = ratingByCategory(business.averageRatings, 'Green Chile');
    address = business.address;
  }

  return (
    <div className="card">
      {business ? (
        <div className="card-body">
          <h4 className="card-title">{business.name}</h4>
          {format === 'long' && (
            <React.Fragment>
              <h6 className="card-subtitle mb-2 text-muted">
                <Address address={address} />
              </h6>
              {business.phone && (
                <h6 className="card-subtitle mb-2 text-muted">
                  {business.phone}
                </h6>
              )}
            </React.Fragment>
          )}
          <div className="card-text">
            <p>
              <span>Red: </span>
              {redRating ? redRating.rating : '-'}
            </p>
            <p>
              <span>Green: </span>
              {greenRating ? greenRating.rating : '-'}
            </p>
          </div>
          {format === 'short' && (
            <Link href={`/detail/${business.id}`}>
              <a className="card-link">View</a>
            </Link>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

Business.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      street2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
    }),
    phone: PropTypes.string,
    averageRatings: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, rating: Number })
    ),
  }),
  format: PropTypes.string,
};

export default Business;
