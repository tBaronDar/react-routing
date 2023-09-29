import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1", price: 34 },
  { id: "p2", title: "Product 2", price: 4 },
  { id: "p3", title: "Product 3", price: 99 },
  { id: "p4", title: "Product 4", price: 65 },
];

function Products() {
  return (
    <>
      <h1>Some products</h1>
      <ul>
        {PRODUCTS.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
