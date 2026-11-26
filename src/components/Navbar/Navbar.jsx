import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GooeyNav from "./GooeyNav";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Photography", path: "/photography" },
  { label: "Contact", path: "/contact" }
];

const TOP_ZONE = 80;   // always show the navbar this close to the top
const THRESHOLD = 4;   // px of scrolling to ignore (stops jitter)

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const currentIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  const items = navItems.map((item) => ({
    label: item.label,
    href: "#"
  }));

  // hide when scrolling down, show again on a small scroll up
  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;

      if (y < TOP_ZONE) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (Math.abs(delta) < THRESHOLD) return;

      setHidden(delta > 0);
      lastY.current = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // always show the navbar after changing page
  useEffect(() => {
    setHidden(false);
    lastY.current = window.scrollY;
  }, [location.pathname]);

  return (
    <nav
      className={`navbar-container${hidden ? " navbar-hidden" : ""}`}
      onFocus={() => setHidden(false)}
    >
      <GooeyNav
        items={items}
        activeIndex={currentIndex === -1 ? 0 : currentIndex}
        theme="dark"
        size="lg"
        frame
        particleCount={15}
        spread={56}
        animationTime={600}
        timeVariance={300}
        gooeyness={0.5}
        wobble={0.5}
        hoverEffect
        onChange={(index) => {
          navigate(navItems[index].path);
        }}
      />
    </nav>
  );
}

export default Navbar;