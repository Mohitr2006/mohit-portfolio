import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Background />

      <div className="app-content">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;