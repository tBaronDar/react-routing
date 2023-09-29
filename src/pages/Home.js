import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>This is my Home Page!</h1>
      <p>
        Go to the <Link to="/products">list of products</Link>.
      </p>
    </>
  );
}

export default HomePage;
