const Cards = ({ locations }) => {
  return (
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-gradient-primary text-white py-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="card-title text-primary mb-1 fw-bold">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {locations?.name || "Unknown Location"}
            </h2>
            <p className="card-subtitle text-primary mb-0 opacity-75">
              <i className="bi bi-info-circle me-1  text-primary"></i>
              Location Details
            </p>
          </div>
          <span className="badge bg-white text-primary fs-6 px-3 py-2">
            ID: {locations?.id || "N/A"}
          </span>
        </div>
      </div>

      <div className="card-body p-4">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
              <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                <i className="bi bi-tag-fill text-primary fs-4"></i>
              </div>
              <div>
                <p className="text-muted mb-1 small">TYPE</p>
                <h5 className="mb-0 fw-bold">{locations?.type || "Unknown"}</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
              <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                <i className="bi bi-globe-americas text-success fs-4"></i>
              </div>
              <div>
                <p className="text-muted mb-1 small">DIMENSION</p>
                <h5 className="mb-0 fw-bold">
                  {locations?.dimension || "Unknown"}
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
              <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                <i className="bi bi-people-fill text-warning fs-4"></i>
              </div>
              <div>
                <p className="text-muted mb-1 small">POPULATION</p>
                <h5 className="mb-0 fw-bold">
                  {locations?.residents?.length || 0}
                  <span className="text-muted fs-6 ms-2">residents</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted small">
              <i className="bi bi-clock me-1"></i>
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <button className="btn btn-outline-primary btn-sm">
              <i className="bi bi-three-dots me-1"></i>
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
