import React from 'react';
import renderer from 'react-test-renderer';

import { product1 } from '../data/products';
import { ProductTitle, ProductCard } from '../../src/components';

describe('ProductTitle', () => {
  test('Should render correctly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Test Product"></ProductTitle>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should render correctly with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle></ProductTitle>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
