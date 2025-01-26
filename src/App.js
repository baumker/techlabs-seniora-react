import StartPage from "./pages/StartPage";
import AnleitungenPage from "./pages/AnleitungenPage";
import WhatsAppUebersichtPage from "./pages/WhatsAppUebersichtPage";
import WhatsAppVideokonferenzPage from "./pages/WhatsAppVideoKonferenzPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/anleitungen" element={<AnleitungenPage />} />
        <Route path="/whatsapp" element={<WhatsAppUebersichtPage />} />
        <Route
          path="/whatsapp/videokonferenz"
          element={<WhatsAppVideokonferenzPage />}
        />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Navigation />
    //   {/* <Hero /> */}
    //   {/* <AnleitungenPage /> */}
    //   {/* <WhatsAppUebersichtPage /> */}
    //   <WhatsAppVideokonferenzPage />

    //   <Footer />
    // </div>
  );
}

export default App;
