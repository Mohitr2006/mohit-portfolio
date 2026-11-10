import TechText from "../../components/Hero/TechText";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      <section className="hero-content">
        <TechText
          text="Mohit Raj"
          color="#06436c"
          accentColor="#000000"
          fontSize={120}
          fontWeight={700}
          reveal="letter"
          selection
          labels
          draggable
          sweep
        />

        <p className="hero-subtitle">
          AI & Data Science Student | Aspiring AI Engineer
        </p>
      </section>
    </main>
  );
}

export default Home;