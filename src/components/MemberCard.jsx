import { Link } from "react-router-dom";
import "../styles/MemberCard.css";

export default function MemberCard({ member }) {
  return (
    <Link to={`/integrantes/${member.id}`} className="member-card">
      <img src={member.foto} alt={member.nombre} className="member-card__image" />
      <div className="member-card__body">
        <p className="member-card__category">{member.categoria}</p>
        <h2 className="member-card__name">{member.nombre}</h2>
        <p className="member-card__description">{member.descripcion}</p>
      </div>
    </Link>
  );
}
