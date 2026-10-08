import MemberCard from "../components/MemberCard.jsx";
import { members } from "../data/members.js";
import "../styles/Members.css";

export default function Members() {
  return (
    <section className="members">
      <header className="members__header">
        <h1>Integrantes</h1>
        <p>Las personas que forman La Sociedad Kwai.</p>
      </header>
      <div className="members__grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
