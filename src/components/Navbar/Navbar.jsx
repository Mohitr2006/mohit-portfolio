
import { useNavigate, useLocation } from "react-router-dom";
import GooeyNav from "./GooeyNav";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Photography", path: "/photography" },
  { label: "Contact", path: "/contact" }
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  const items = navItems.map((item) => ({
    label: item.label,
    href: "#"
  }));

  return (
    <nav className="navbar-container">
      <GooeyNav
        items={items}
        initialActiveIndex={currentIndex === -1 ? 0 : currentIndex}
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
