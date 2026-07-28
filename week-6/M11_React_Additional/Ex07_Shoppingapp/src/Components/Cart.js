import React from 'react';

const Cart = ({ itemname, price }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Item: {itemname}</h3>
      <p style={{ margin: 0 }}>Price: ${price}</p>
    </div>
  );
};

export default Cart;
