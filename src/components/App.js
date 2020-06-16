import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';
import Product from './Product';
import Cart from './Cart';

function App(props) {
  let { products } = props;

  const productsList = products.map((el) => {
    return <Product key={el.id} data={el}></Product>;
  });

  return (
    <div className="app">
      <div className="products">{productsList}</div>
      <Cart></Cart>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
