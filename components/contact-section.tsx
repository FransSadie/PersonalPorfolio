import { socialLinks } from "@/data/profile";

export function ContactSection() {
  return (
    <section tabIndex={-1} id="contact" className="contact-section anchor-section" aria-labelledby="contact-title">
      <div className="site-width contact-inner">
        <h2 id="contact-title" className="display-font">Contact</h2>
        <p className="contact-description">Get in touch about software projects, data systems, or integrations.</p>
        <a className="contact-email" href={socialLinks.find((link) => link.label === "Email")!.href}>sadiefransjr1@hotmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-socials">{socialLinks.filter((link) => link.label !== "Email").map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
        <div className="contact-stripes" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </section>
  );
}
