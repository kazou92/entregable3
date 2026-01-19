import axios from "axios";
import React, { useEffect, useState } from "react";

const Residents = ({ resident }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(resident)
      .then((res) => {
        setCharacter(res.data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [resident]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "success";
      case "dead":
        return "danger";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "bi-heart-fill";
      case "dead":
        return "bi-emoji-dizzy-fill";
      default:
        return "bi-question-circle-fill";
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
        <div
          className="card shadow-sm border-0 w-100"
          style={{ maxWidth: "280px", minHeight: "350px" }}
        >
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <div className="spinner-border text-primary mb-3" />
            <small className="text-muted">Loading character...</small>
          </div>
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (loading) {
    return (
      <div
        className="card shadow-sm border-0"
        style={{ maxWidth: "280px", minHeight: "350px" }}
      >
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <div className="spinner-border text-primary mb-3" />
          <small className="text-muted">Loading character...</small>
        </div>
      </div>
    );
  }

  /* ================= CARD ================= */
  return (
    <div
      className="card border-0 shadow-sm"
      style={{ width: "100%", maxWidth: "280px" }}
    >
      <div
        className="card border-0 shadow-sm h-100 w-100"
        style={{ maxWidth: "280px" }}
      >
        {/* IMAGE */}
        <div className="position-relative">
          <img
            src={character.image}
            alt={character.name}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <span
            className={`position-absolute top-0 end-0 m-2 badge bg-${getStatusColor(character.status)}`}
          >
            <i className={`bi ${getStatusIcon(character.status)} me-1`} />
            {character.status}
          </span>
        </div>

        {/* BODY */}
        <div className="card-body d-flex flex-column gap-2">
          <h6
            className="fw-bold text-center text-truncate"
            title={character.name}
          >
            {character.name}
          </h6>

          <div className="small d-flex justify-content-between">
            <span className="text-muted">Origin</span>
            <span
              className="text-end text-truncate"
              style={{ maxWidth: "55%" }}
            >
              {character.origin?.name || "Unknown"}
            </span>
          </div>

          <div className="small d-flex justify-content-between">
            <span className="text-muted">Episodes</span>
            <span className="fw-bold text-primary">
              {character.episode?.length || 0}
            </span>
          </div>

          <div className="small d-flex justify-content-between">
            <span className="text-muted">Gender</span>
            <span>{character.gender}</span>
          </div>

          <div className="small d-flex justify-content-between">
            <span className="text-muted">Species</span>
            <span>{character.species}</span>
          </div>

          {/* BUTTONS */}
          <div className="mt-auto d-flex gap-2 pt-2">
            <button className="btn btn-outline-primary btn-sm w-100">
              Details
            </button>
            <button className="btn btn-outline-success btn-sm w-100">
              Episodes
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="card-footer bg-transparent border-0 text-center small text-muted">
          {new Date(character.created).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Residents;
