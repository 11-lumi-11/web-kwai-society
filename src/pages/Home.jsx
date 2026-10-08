import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-text">
          <h1>La Sociedad Kwai</h1>
          <p>
            Un grupo de amigos, un espacio para compartir actividades y un
            archivo sencillo de quienes formamos parte. Esta primera versión
            solo arma la estructura de la web.
          </p>
        </div>
        <img
          src="/images/grupo.svg"
          alt="Foto grupal de La Sociedad Kwai"
          className="home__hero-image"
        />
      </section>

      <section className="home__sections">
        <h2>Explorar</h2>
        <div className="home__section-list">
          <Link to="/actividades" className="home__section-link">
            <h3>Actividades</h3>
            <p>Registro de reuniones, salidas y momentos del grupo.</p>
          </Link>
          <Link to="/integrantes" className="home__section-link">
            <h3>Integrantes</h3>
            <p>Fichas de cada persona que forma parte de La Sociedad Kwai.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
