import React from 'react';
import renderer from 'react-test-renderer';

import { product1 } from '../data/products';
import { ProductCard } from '../../src/components';

const { act } = renderer;

describe('ProductImage', () => {
  test('Should render correctly with the custom image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should increment the quantity', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ quantity, incrementBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{quantity}</span>
            <button onClick={() => incrementBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
