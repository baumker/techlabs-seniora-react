import StartPage from "./pages/StartPage";
import AnleitungenPage from "./pages/AnleitungenPage";
import WhatsAppUebersichtPage from "./pages/WhatsAppUebersichtPage";
import WhatsAppVideokonferenzPage from "./pages/WhatsAppVideoKonferenzPage";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/techlabs-seniora-react">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/anleitungen" element={<AnleitungenPage />} />
        <Route path="/whatsapp" element={<WhatsAppUebersichtPage />} />
        <Route
          path="/whatsapp/videokonferenz"
          element={<WhatsAppVideokonferenzPage />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
