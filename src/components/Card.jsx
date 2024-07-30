import React from 'react';

const Card = ({ title, price, discountPrice }) => (
  <div className="border rounded-lg shadow-md p-4 text-center">
    <h2 className="text-2xl font-#fefefe mb-5">{title}</h2>
    <p className="text-2xl font-#F5F9FE mb-2">{price}</p>
    <p className="text-xl text-gray-500">{discountPrice}</p>
    <button className="bg-white text-blue-500 border-blue-500 w-64 h-10" style={{ borderBottomWidth: '2px', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid' }}>
  Buy Now
</button>
    </div>
);

export default Card;
