import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, itemname: 'Laptop', price: 999.99 },
        { id: 2, itemname: 'Smartphone', price: 599.99 },
        { id: 3, itemname: 'Headphones', price: 149.99 },
        { id: 4, itemname: 'Smartwatch', price: 199.99 },
        { id: 5, itemname: 'Tablet', price: 349.99 }
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Online Shopping</h1>
        <div>
          {this.state.cartItems.map(item => (
            <Cart key={item.id} itemname={item.itemname} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
