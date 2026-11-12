import Image from "next/image";
import { halls } from "@/lib/content";

export default function Halls() {
  return (
    <section className="halls" id="halls">
      <div className="halls-stage">
        <div className="halls-track">
          <div className="halls-intro">
            <span className="eyebrow">Architectural Grandeur</span>
            <h2>Tailored Banquet Spaces</h2>
           
          </div>

          {halls.map((hall) => (
            <article className="hall-card" key={hall.name}>
              <div className="hall-media">
                <span className="hall-tag">{hall.tag}</span>
                <Image
                  src={hall.image}
                  alt={`${hall.name} banquet hall at Imperial Park`}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 33vw"
                />
              </div>
              <div className="hall-body">
                <h3>{hall.name}</h3>
                <p className="hall-guests">{hall.guests}</p>
                <p>{hall.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
