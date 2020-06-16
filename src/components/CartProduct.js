import React from 'react';
import { connect } from 'react-redux';

function CartProduct(props) {
  let { title, price, quantity } = props.data;
  console.log(props);
  return (
    <div className="product">
      <p>{title}</p>
      <p>{price * quantity}</p>
      <p>{quantity}</p>
    </div>
  );
}

export default CartProduct;
