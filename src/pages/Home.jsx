import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
   useEffect(() => {
    document.title = "Home | My Gaming Store";
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <div className="p-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Hello, Welcome to the Gaming store
        </h1>
        <p className="lead text-muted mb-4">
          Discover the latest games and deals all in one place.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Browse Games
        </Link>
      </div>
    </div>
  );
}

export default Home;