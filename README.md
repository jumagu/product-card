# Product Card

## Example

```
<ProductCard
    key={products[0].id}
    product={products[0]}
    className="bg-dark text-white"
    initialValues={{ quantity: 5, maxQuantity: 10 }}
>
    {({ quantity, maxQuantity, incrementBy, reset }) => (
        <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
        </>
    )}
</ProductCard>
```
