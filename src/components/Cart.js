import React from 'react';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';

function Cart(props) {
  let { cart } = props;

  console.log(cart);
  let cartProducts = cart.map((el) => {
    return <CartProduct key={el.id} data={el}></CartProduct>;
  });

  return (
    <div className="cart">
      <h3>YO CART</h3>
      {cartProducts}
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Cart);
