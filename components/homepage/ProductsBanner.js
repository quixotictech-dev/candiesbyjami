import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import { connect } from 'react-redux';

class ProductsBanner extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="productcards bg-grad6 custom-container py-2 my-3">
        <div className="d-flex flex-column align-items-center mb-1 pb-2">
          <p className="font-color-white mb-1 font-size-display1 font-family-tertiary">
            New and seasonal products added year-round.
          </p>
          <p
            className="text-center font-color-white font-size-title mb-3 font-weight-medium font-family-secondary"
            style={{ maxWidth: '52rem' }}
          >
            For info on all our newest products and promotions sign up below to recieve our email newsletter.
          </p>
          <Link href="/collection">
            <a className="d-flex py-3 align-items-center font-color-white font-size-subheader border-bottom border-color-black">
              <p className="mr-3"> Explore our products.</p>
              <img src="/icon/arrow-long-right.svg" alt="arrow" />
            </a>
          </Link>
        </div>
        <ProductRow products={products.slice(0, 4)} />
      </div>
    );
  }
}

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default connect(state => state)(ProductsBanner);
