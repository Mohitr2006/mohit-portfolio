
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-page">
      <h1>My Projects</h1>

      <p className="projects-subtitle">
        Things I've built while exploring AI, ML and software development.
      </p>

      <div className="projects-grid">

        <ProjectCard
          title="Loan Approval Predictor"
          category="Classification"
          description="Predicting loan approval using machine learning classification models."
          technologies={["Python", "Scikit-learn", "Flask"]}
          seed={15}
          githubUrl="https://github.com/Mohitr2006/Loan-Approval-Predicator"
          demoUrl="https://loan-prediction-app-9xyy.onrender.com/"
        />

        <ProjectCard
          title="Transport Delay Prediction"
          category="Machine Learning"
          description="Predicting transportation arrival delays using regression models."
          technologies={["Python", "Pandas", "Scikit-learn"]}
          seed={7}
          githubUrl="https://github.com/Mohitr2006/TransportDelay"
        />

        <ProjectCard
          title="Transformer Anomaly Detection"
          category="Deep Learning"
          description="Detecting anomalies in multivariate time-series telemetry using Transformers."
          technologies={["PyTorch", "Transformers", "NumPy"]}
          seed={25}
          comingSoon={true}
        />
      </div>
    </section>
  );
}

export default Projects;
