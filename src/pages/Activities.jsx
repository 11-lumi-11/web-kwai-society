import ActivityCard from "../components/ActivityCard.jsx";
import { activities } from "../data/activities.js";
import "../styles/Activities.css";

export default function Activities() {
  return (
    <section className="activities">
      <header className="activities__header">
        <h1>Actividades</h1>
        <p>Momentos que hemos compartido como grupo.</p>
      </header>
      <div className="activities__grid">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}
