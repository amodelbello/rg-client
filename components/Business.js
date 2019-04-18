import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Address from './Address';

class Business extends React.Component {
  static defaultProps = {
    format: 'long',
  };

  state = {
    redRating: '-',
    greenRating: '-',
  };

  ratingByCategory(ratings, category) {
    if (ratings && ratings.length) {
      const ratingArray = ratings.filter(
        rating => rating.category === category
      );
      if (ratingArray.length) {
        return ratingArray[0];
      }
    }
    return { rating: '-' };
  }

  componentDidMount() {
    const { business, updateParentTitle } = this.props;
    if (business) {
      if (updateParentTitle) {
        updateParentTitle(business.name);
      }

      this.setState({
        redRating: this.ratingByCategory(business.averageRatings, 'Red Chile')
          .rating,
        greenRating: this.ratingByCategory(
          business.averageRatings,
          'Green Chile'
        ).rating,
      });
    }
  }

  render() {
    const { business, format } = this.props;
    return (
      <div className="card">
        {business ? (
          <div className="card-body">
            <h4 className="card-title">{business.name}</h4>
            {format === 'long' && (
              <React.Fragment>
                <h6 className="card-subtitle mb-2 text-muted">
                  <Address address={business.address} />
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
                {this.state.redRating}
              </p>
              <p>
                <span>Green: </span>
                {this.state.greenRating}
              </p>
            </div>
            {format === 'short' && (
              <Link
                as={`/detail/${business.id}`}
                href={`/detail?id=${business.id}`}
              >
                <a className="card-link">View</a>
              </Link>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

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
  updateParentTitle: PropTypes.func,
};

export default Business;
