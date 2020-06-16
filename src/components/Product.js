import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

function Product(props) {
  let { title, price, inventory, id } = props.data;

  return (
    <div className="product">
      <p>{title}</p>
      <p>{price}</p>
      <p>{inventory}</p>
      <button onClick={() => props.addToCart(id)}>Add to cart</button>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { addToCart })(Product);
