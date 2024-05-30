import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  // img: "./coffee-mug.png",
};

const App = () => {
  return (
    <ProductCard
      product={product}
      className="bg-dark text-white"
      initialValues={{ quantity: 5, maxQuantity: 10 }}
    >
      {({ quantity, maxQuantity, incrementBy, reset }) => (
        <>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />

          <button onClick={() => incrementBy(-2)}>-2</button>
          <button onClick={reset}>Reset</button>
          <button onClick={() => incrementBy(2)}>+2</button>
          <span>
            {quantity} / {maxQuantity}
          </span>
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
