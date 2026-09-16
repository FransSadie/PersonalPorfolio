import type { Skill, SkillAccent } from "@/data/skills";

/** One server-rendered object for every technology; decoration never hydrates. */
export function FloppyDisk({ skill, accent = "coral" }: { skill: Skill; accent?: SkillAccent }) {
  return (
    <li className="floppy-disk" data-accent={skill.accent ?? accent}>
      <div className="floppy-body">
        <div className="floppy-shutter" aria-hidden="true"><span /></div>
        <div className="floppy-label">
          <span className="floppy-name">{skill.name}</span>
          <span className="floppy-category">{skill.category}</span>
          {skill.serial && <span className="floppy-serial">{skill.serial}</span>}
        </div>
      </div>
    </li>
  );
}
