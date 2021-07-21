import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>This is Products Page.</h1>
      <ul>
        <li>
          <Link to="products/book">A Book</Link>
        </li>
        <li>
          <Link to="products/ball">A Ball</Link>
        </li>
        <li>
          <Link to="products/bat">A Bat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
