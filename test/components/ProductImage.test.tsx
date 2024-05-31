import React from 'react';
import renderer from 'react-test-renderer';

import { product2 } from '../data/products';
import { ProductImage, ProductCard } from '../../src/components';

describe('ProductImage', () => {
  test('Should render correctly with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img='test-product.jpg'></ProductImage>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should render correctly with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage></ProductImage>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
