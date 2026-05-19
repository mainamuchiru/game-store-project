import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found";
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="p-5 mb-4 bg-light rounded-3 shadow text-center w-100"
        style={{ maxWidth: "600px" }}
      >
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold text-danger mb-3">
            404 - Page Not Found
          </h1>
          <p className="lead mb-4"> Fun Fact:</p>
          <p className="col-md-12 fs-4 text-muted mb-4">
            Most Gamers Prefer Playing On Mobile Platforms 📱
          </p>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
