import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <p>Product details...</p>
      <p>{params.productId} </p>
      <Link to="..">Back</Link>
    </>
  );
}

export default ProductDetails;
