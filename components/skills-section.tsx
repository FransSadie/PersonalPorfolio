import { FloppyDisk } from "@/components/floppy-disk";
import { SectionHeader } from "@/components/section-header";
import { skillCollections } from "@/data/skills";

const previewCount = 4;

export function SkillsSection() {
  return (
    <section tabIndex={-1} id="skills" className="section anchor-section site-width" aria-labelledby="skills-title">
      <SectionHeader id="skills-title" title="Skills" description="The languages, frameworks, and tools I use across data pipelines, applications, and integrations." />
      <div className="skill-collections">
        {skillCollections.map((collection) => {
          const shown = previewCount;
          const additional = collection.skills.slice(shown);
          return (
            <section key={collection.id} id={`collection-${collection.id}`} className="skill-collection" aria-labelledby={`${collection.id}-title`} data-accent={collection.accent}>
              <header className="collection-heading">
                <h3 id={`${collection.id}-title`}>{collection.name}</h3>
                <p>{collection.description}</p>
              </header>
              <div className="collection-disks"><ul className="floppy-grid" aria-label={`${collection.name} skills`}>
                {collection.skills.slice(0, shown).map((skill) => <FloppyDisk key={skill.name} skill={skill} accent={collection.accent} />)}
              </ul>
              {additional.length > 0 ? (
                <details className="collection-more">
                  <summary><span className="when-closed">View {additional.length} more</span><span className="when-open">Show less</span><span className="disclosure-mark" aria-hidden="true">+</span></summary>
                  <ul className="floppy-grid" aria-label={`More ${collection.name.toLowerCase()} skills`}>
                    {additional.map((skill) => <FloppyDisk key={skill.name} skill={skill} accent={collection.accent} />)}
                  </ul>
                </details>
              ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
