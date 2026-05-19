import { useEffect } from "react";
function Contacts() {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-sm p-4 text-center"
        style={{ maxWidth: "500px", borderRadius: "12px" }}
      >
        {/* Tagline */}
        <h1 className="card-title fw-bold text-primary mb-4">
          <span className="text-danger">Philip</span> is the name,{" "}
          <span className="text-danger">Coding</span> is the game.
        </h1>

        {/* Divider for spacing */}
        <hr className="my-4" />

        <div className="card-body">
          <h1 className="card-title fw-bold text-primary mb-3">Get In Touch</h1>
          <p className="card-text text-muted mb-4">
            Have questions or need support? Reach out to us anytime.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <span className="fs-4">📞</span>
            <span className="fs-5 fw-semibold">0710 437 446</span>
          </div>
          <p className="text-muted small">
            Available Monday - Friday, 9am - 6pm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
