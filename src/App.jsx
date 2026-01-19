import { useState } from "react";
import Cards from "./components/Cards";
import CardsLocation from "./Hooks/CardsLocation";
import Residents from "./components/Residents";
import InputSearch from "./components/InputSearch";

function App() {
  const [searchLocation, setSearchLocation] = useState();
  const [loading, setLoading] = useState(false);

  const locations = CardsLocation({ searchLocation });

  const handleSearch = (value) => {
    setLoading(true);
    setSearchLocation(value);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <div className="App bg-light min-vh-100">
      {/* Navbar Fijo */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg">
        <div className="container-fluid">
          {/* Logo alineado a la izquierda */}
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-globe-americas me-2"></i>
            Rick & Morty
          </a>

          {/* Título centrado */}
          <div className="navbar-nav mx-auto">
            <div className="nav-item">
              <h2 className="mb-0 text-white fw-bold text-center">
                Universe Explorer
              </h2>
              <p className="mb-0 text-center text-white-50 small">
                Discover locations across dimensions
              </p>
            </div>
          </div>

          {/* Espacio para balance (o elementos adicionales a la derecha) */}
          <div className="navbar-text invisible">
            <i className="bi bi-globe-americas me-2"></i>
            Rick & Morty
          </div>
        </div>
      </nav>

      {/* Espacio para compensar el navbar fijo */}
      <div style={{ height: "100px" }}></div>

      {/* Hero Section debajo del navbar */}
      <header className="bg-gradient-primary text-primary py-5 shadow mb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="display-5 fw-bold mb-4">
                Welcome to the Multiverse
              </h1>
              <p className="lead mb-4 opacity-75">
                Search for any location across infinite dimensions and discover
                their inhabitants
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span className="badge bg-white text-primary px-3 py-2">
                  <i className="bi bi-star-fill me-1"></i>
                  {locations?.residents?.length || 0} Residents
                </span>
                <span className="badge bg-white text-primary px-3 py-2">
                  <i className="bi bi-pin-map me-1"></i>
                  126+ Locations
                </span>
                <span className="badge bg-white text-primary px-3 py-2">
                  <i className="bi bi-infinity me-1"></i>
                  Infinite Dimensions
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-3">
        {/* Resto del contenido igual que antes... */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 col-xl-6">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-header bg-dark text-white py-4">
                <h3 className="mb-0 text-center">
                  <i className="bi bi-search me-2"></i>
                  Search Locations
                </h3>
              </div>
              <div className="card-body p-4">
                <InputSearch setSearchLocation={handleSearch} />
              </div>
            </div>
          </div>
        </div>

        {/* Resto del código igual... */}
        {loading ? (
          <div className="text-center py-5">
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {locations && (
              <div className="row mb-5">
                <div className="col-12">
                  <Cards locations={locations} />
                </div>
              </div>
            )}

            {locations?.residents && locations.residents.length > 0 && (
              <div className="row">
                <div className="col-12">
                  <h2 className="fw-bold mb-4 text-center">
                    <i className="bi bi-people-fill text-success me-2"></i>
                    Residents ({locations.residents.length})
                  </h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {locations.residents.map((resident) => (
                      <Residents key={resident} resident={resident} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-2">
            Made with <i className="bi bi-heart-fill text-danger"></i> by a fan
          </p>
          <p className="small text-white-50 mb-0">
            This is a fan project using the Rick and Morty API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
