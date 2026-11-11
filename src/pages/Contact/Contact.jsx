
import "./Contact.css";

const contacts = [
  {
    name: "Email",
    subtitle: "Let's discuss something interesting",
    detail: "mohitrajworks123@gmail.com",
    icon: "mail",
    tint: "#252a2e",
    line: "#5e8090",
    url: "mailto:mohitrajworks123@gmail.com",
  },
  {
    name: "LinkedIn",
    subtitle: "Let's connect professionally",
    detail: "Connect with me",
    icon: "linkedin",
    tint: "#0A66C2",
    line: "#70B5FF",
    url: "https://www.linkedin.com/in/mohit-raj-b1837735a/",
  },
  {
    name: "GitHub",
    subtitle: "Explore my code and projects",
    detail: "github.com/Mohitr2006",
    icon: "github",
    tint: "#24292e",
    line: "#8b949e",
    url: "https://github.com/Mohitr2006",
  },
  {
    name: "X / Twitter",
    subtitle: "Follow my thoughts and updates",
    detail: "@MohitRaj4702",
    icon: "twitter",
    tint: "#111111",
    line: "#777777",
    url: "https://x.com/MohitRaj4702",
  },
];

function ContactIcon({ type }) {
  switch (type) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 7L12 13L21 7"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8v11H3.3v-11Zm6.2 0h3.6V11h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v5.7h-3.8v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.2H9.5v-11Z" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.5l7.3-8.4L1.8 2h6.5l4.4 6.6L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
        </svg>
      );

    default:
      return null;
  }
}

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span className="contact-label">GET IN TOUCH</span>

        <h1>Let's Connect.</h1>

        <p>
          Have an idea, a project, or just want to say hello?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.name}>
            <div
              className="contact-specular"
              style={{
                background: contact.tint,
                borderColor: contact.line,
              }}
            >
              <div className="specular-button__label">
                <div className="contact-card-content">
                  <span className="contact-icon">
                    <ContactIcon type={contact.icon} />
                  </span>

                  <span className="contact-card-name">
                    {contact.name}
                  </span>

                  <span className="contact-card-subtitle">
                    {contact.subtitle}
                  </span>

                  <span className="contact-card-detail">
                    {contact.detail}
                  </span>

                  <a
                    href={contact.url}
                    target={
                      contact.url.startsWith("mailto:")
                        ? "_self"
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="contact-link-button"
                  >
                    {contact.name === "Email"
                      ? "Send Email"
                      : "Visit Profile"}
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
