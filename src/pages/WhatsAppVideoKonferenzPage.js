import Guide from "../comps/Guide";
import Navigation from "../comps/Navigation";
import Footer from "../comps/Footer";

import "./WhatsAppVideoKonferenzPage.css";

function WhatsAppVideokonferenzPage() {
  const description = [
    "",
    "Öffnen Sie die App ",
    "Tippen Sie auf die Lupe",
    "Geben Sie den Namen ein",
    "Wählen Sie den Kontakt",
    "Tippen Sie auf das Kamera-Symbol",
    "Viel Spaß beim Videotelefonieren",
  ];

  return (
    <div>
      <Navigation />
      <Guide
        totalSteps={6}
        stepDescription={description}
        stepImage={"whatsapp"}
      />
      <Footer />
    </div>
  );
}

export default WhatsAppVideokonferenzPage;
