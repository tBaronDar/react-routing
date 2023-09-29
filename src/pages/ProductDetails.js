import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <p>Product details...</p>
      <p>{params.productId} </p>
    </>
  );
}

export default ProductDetails;
