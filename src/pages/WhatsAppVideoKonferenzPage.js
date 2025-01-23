import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./WhatsAppVideoKonferenzPage.css";

import { useState } from "react";

function WhatsAppVideokonferenzPage() {
  const [anleitungSchritt, setAnleitungSchritt] = useState(1);

  const handleClick = (Schritt) => {
    if (anleitungSchritt + Schritt > 6) {
      return;
    }
    setAnleitungSchritt(anleitungSchritt + Schritt);
    console.log(anleitungSchritt);
  };

  const buttonWeiter = (anleitungSchritt) => {
    if (anleitungSchritt < 6) {
      return (
        <Button
          variant="primary"
          className="me-md-2"
          onClick={() => handleClick(1)}
        >
          Weiter
        </Button>
      );
    }
    return null;
  };

  const buttonZurueck = function (anleitungSchritt) {
    if (anleitungSchritt > 1) {
      return (
        <Button
          variant="secondary"
          className="me-md-2 gap-3"
          onClick={() => handleClick(-1)}
        >
          Zurück
        </Button>
      );
    }
    return null;
  };

  const ueberschrift = function (anleitungSchritt) {
    return <h1>Schritt {anleitungSchritt}</h1>;
  };

  const beschreibung = function (anleitungSchritt) {
    switch (anleitungSchritt) {
      case 1:
        return <p className="block">Öffnen Sie die App</p>;
      case 2:
        return (
          <p className="block">
            Tippen Sie auf die Lupe (Suchfunktion) auf der oberen Ecke Ihres
            Bildschirms
          </p>
        );
      case 3:
        return (
          <p className="block">
            Geben Sie den Namen von der Person ein, mit der Sie einen Videoanruf
            starten möchten
          </p>
        );
      case 4:
        return (
          <p className="block">Wählen Sie den Kontakt bzw. die Person aus</p>
        );
      case 5:
        return (
          <p className="block">
            Der Chatverlauf mit der ausgewählten Person erscheint. Auf der
            oberen rechten Ecke sehen Sie mehrere Symbole. Tippen Sie auf das
            Kamera-Symbol. Der Videoanruf beginnt direkt danach.
          </p>
        );
      case 6:
        return <p className="block">Viel Spaß beim Videotelefonieren</p>;
      default:
        return "Fehler";
    }
  };

  const bild = function (anleitungSchritt) {
    const url = require(`../assets/whatsapp${anleitungSchritt}.png`);

    switch (anleitungSchritt) {
      case 1:
        return <img src={url} alt="Schritt 1" className="img-anleitung" />;
      case 2:
        return <img src={url} alt="Schritt 2" className="img-anleitung" />;
      case 3:
        return <img src={url} alt="Schritt 3" className="img-anleitung" />;
      case 4:
        return <img src={url} alt="Schritt 4" className="img-anleitung" />;
      case 5:
        return <img src={url} alt="Schritt 5" className="img-anleitung" />;
      case 6:
        return <img src={url} alt="Schritt 6" className="img-anleitung" />;
      default:
        return "Fehler";
    }
  };

  return (
    <div>
      <Container className="col-xxl-8 px-4 py-5">
        <Row>
          <Col className="gap-3">
            {ueberschrift(anleitungSchritt)}
            {beschreibung(anleitungSchritt)}
            {buttonZurueck(anleitungSchritt)}
            {buttonWeiter(anleitungSchritt)}
          </Col>
          <Col>{bild(anleitungSchritt)}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhatsAppVideokonferenzPage;
