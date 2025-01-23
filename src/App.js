import Navigation from "./comps/Navigation";
import Hero from "./comps/Hero";
import Footer from "./comps/Footer";
import AnleitungenPage from "./pages/AnleitungenPage";
import WhatsAppUebersichtPage from "./pages/WhatsAppUebersichtPage";
import WhatsAppVideokonferenzPage from "./pages/WhatsAppVideoKonferenzPage";

function App() {
  return (
    <div>
      <Navigation />
      <WhatsAppVideokonferenzPage />
      <Footer />
    </div>
  );
}

export default App;
