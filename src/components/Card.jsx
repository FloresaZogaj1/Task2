import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, price, discountPrice }) => (
  <div className="card border rounded-lg shadow-lg p-6 flex flex-col justify-between items-center h-70 m-4 bg-white">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-2xl font-semibold text-black mb-1">{price}</p>
    <p className="text-xl text-gray-500 mb-8">{discountPrice}</p>
    <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-md shadow hover:bg-blue-500 hover:text-white transition duration-300">
      Buy Now
    </button>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
};

Card.defaultProps = {
  discountPrice: 'No Discount',
};

export default Card;
