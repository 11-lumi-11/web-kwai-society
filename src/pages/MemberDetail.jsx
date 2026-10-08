import { Link, useParams } from "react-router-dom";
import { getMemberById } from "../data/members.js";
import "../styles/MemberDetail.css";

export default function MemberDetail() {
  const { id } = useParams();
  const member = getMemberById(id);

  if (!member) {
    return (
      <section className="member-detail">
        <p>No se encontró este integrante.</p>
        <Link to="/integrantes">Volver a integrantes</Link>
      </section>
    );
  }

  return (
    <article className="member-detail">
      <Link to="/integrantes" className="member-detail__back">
        ← Volver a integrantes
      </Link>
      <div className="member-detail__layout">
        <img
          src={member.foto}
          alt={member.nombre}
          className="member-detail__photo"
        />
        <div className="member-detail__info">
          <p className="member-detail__category">{member.categoria}</p>
          <h1>{member.nombre}</h1>
          <p>{member.descripcion}</p>
          <section>
            <h2>Gustos</h2>
            <ul className="member-detail__likes">
              {member.gustos.map((gusto) => (
                <li key={gusto}>{gusto}</li>
              ))}
            </ul>
          </section>
          <blockquote className="member-detail__quote">
            “{member.frase}”
          </blockquote>
        </div>
      </div>
    </article>
  );
}
