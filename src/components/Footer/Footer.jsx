
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Mohit Raj<span>.</span></h2>
        <p>Building things with code, creativity and curiosity.</p>

        <div className="footer-links">
          <a href="https://github.com/Mohitr2006/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mohit-raj-b1837735a/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mohitrajworks123@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mohit Raj. All rights reserved.</p>
        <p>Designed & built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
