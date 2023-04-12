import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
    id: "m1",
    quantity: 1,
  },
  {
    title: "Test 1",
    price: 8,
    description: "This is a second product - amazing!",
    id: "m2",
    quantity: 1,
  },
];

const Products = (props) => {
  const cartItems = DUMMY_ITEMS.map((item) => (
    <ProductItem
      title={item.title}
      price={item.price}
      description={item.description}
      key={item.id}
      id={item.id}
      quantity={item.quantity}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{cartItems}</ul>
    </section>
  );
};

export default Products;
