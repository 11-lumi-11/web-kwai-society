import { Link, useParams } from "react-router-dom";
import { getActivityById } from "../data/activities.js";
import { formatDate } from "../utils/formatDate.js";
import "../styles/ActivityDetail.css";

export default function ActivityDetail() {
  const { id } = useParams();
  const activity = getActivityById(id);

  if (!activity) {
    return (
      <section className="activity-detail">
        <p>No se encontró esta actividad.</p>
        <Link to="/actividades">Volver a actividades</Link>
      </section>
    );
  }

  return (
    <article className="activity-detail">
      <Link to="/actividades" className="activity-detail__back">
        ← Volver a actividades
      </Link>
      <img
        src={activity.imagen}
        alt={activity.nombre}
        className="activity-detail__cover"
      />
      <h1>{activity.nombre}</h1>
      <p className="activity-detail__date">{formatDate(activity.fecha)}</p>
      <p>{activity.descripcionCompleta}</p>
      <section className="activity-detail__gallery">
        <h2>Galería</h2>
        <div className="activity-detail__gallery-grid">
          {activity.galeria.map((image, index) => (
            <img
              key={`${activity.id}-${index}`}
              src={image}
              alt={`${activity.nombre} ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
