import { SectionHeader } from "@/components/section-header";
import Image from "next/image";
import { passions } from "@/data/passions";

export function OutsideSection() {
  return (
    <section tabIndex={-1} id="outside" className="section anchor-section outside-section" aria-labelledby="outside-title">
      <div className="site-width">
        <SectionHeader id="outside-title" title="Outside tech" description="Climbing, training, music, games, and books fill my time away from software." />
        <div className="outside-grid">
          {passions.map((passion) => (
            <article key={passion.slug} className="interest-card">
              <div className="interest-image"><Image src={passion.image} alt={passion.imageAlt} fill sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 360px" placeholder="blur" /></div>
              <div className="interest-copy"><h3 className="display-font">{passion.title}</h3><p>{passion.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
