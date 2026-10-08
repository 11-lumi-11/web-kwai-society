import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate.js";
import "../styles/ActivityCard.css";

export default function ActivityCard({ activity }) {
  return (
    <Link to={`/actividades/${activity.id}`} className="activity-card">
      <img
        src={activity.imagen}
        alt={activity.nombre}
        className="activity-card__image"
      />
      <div className="activity-card__body">
        <h2 className="activity-card__title">{activity.nombre}</h2>
        <p className="activity-card__date">{formatDate(activity.fecha)}</p>
        <p className="activity-card__description">{activity.descripcion}</p>
      </div>
    </Link>
  );
}
