import { Link, Outlet } from "react-router-dom";

function AdminPanelLayout() {
  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="card shadow-sm mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Admin Dashboard</h4>

          <span className="badge bg-primary">Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="card shadow-sm mb-3">
        <div className="card-body d-flex gap-3">

          <Link className="btn btn-outline-primary btn-sm" to="/adminpanel">
            Overview
          </Link>

          <Link className="btn btn-outline-success btn-sm" to="addnewgame">
            Add Game
          </Link>

          <Link className="btn btn-outline-primary btn-sm" to="editgame">
            Edit Game
          </Link>

        </div>
      </div>

      {/* Content Area */}
      <div className="card shadow-sm">
        <div className="card-body">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminPanelLayout;