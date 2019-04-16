import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

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
            <h6 className="card-subtitle mb-2 text-muted">
              {address.street ? (
                <React.Fragment>
                  {address.street}
                  <br />
                </React.Fragment>
              ) : (
                ''
              )}
              {address.street2 ? (
                <React.Fragment>
                  {address.street2}
                  <br />
                </React.Fragment>
              ) : (
                ''
              )}
              {address.city ? (
                <React.Fragment>
                  {address.city}
                  <br />
                </React.Fragment>
              ) : (
                ''
              )}
              {address.state ? (
                <React.Fragment>
                  {address.state}
                  <br />
                </React.Fragment>
              ) : (
                ''
              )}
              {address.zip ? (
                <React.Fragment>
                  {address.zip}
                  <br />
                </React.Fragment>
              ) : (
                ''
              )}
            </h6>
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
    averageRatings: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, rating: Number })
    ),
  }),
  format: PropTypes.string,
};

export default Business;
