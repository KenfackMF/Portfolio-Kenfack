import "./styles/App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Acceuil from "./pages/Acceuil";
import APropos from "./pages/APropos";
import Services from "./pages/Services";
import Travaux from "./pages/Travaux";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Acceuil />
      <APropos />
      <Services />
      <Travaux />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
