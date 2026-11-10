import Particles from "./particles";
import "./Background.css";

function Background() {
  return (
    <div className="hero-background">
      <Particles
        particleColors={["#050404", "#09e9e9", "#00bfff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        glow={0.5}
        twinkle={0.3}
        moveParticlesOnHover
        hoverEffect="parallax"
        sizeRandomness={1}
        shape="circle"
        depthOfField={0}
        connections={false}
        connectionDistance={110}
        particleHoverFactor={1}
        hoverRadius={140}
        drift="none"
        driftSpeed={1}
        alphaParticles={false}
        disableRotation={false}
        cameraDistance={20}
        variation={0}
        opacity={1}
        clickBurst
        intro
        lightMode={false}
      />
    </div>
  );
}

export default Background;