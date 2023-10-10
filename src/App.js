import "./styles/App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Services from "./pages/Services";
import Travaux from "./pages/Travaux";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Accueil />
      <APropos />
      <Services />
      <Travaux />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
