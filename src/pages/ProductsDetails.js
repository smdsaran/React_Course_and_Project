import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();

  return (
    <section>
      <hl>Product</hl>
      <p>{params.productName}</p>
    </section>
  );
};

export default ProductsDetails;
