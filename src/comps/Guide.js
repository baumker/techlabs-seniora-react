import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function Guide({ totalSteps, stepDescription, stepImage }) {
  const [actualStep, setSteps] = useState(1);

  const handleClick = (steps) => {
    if (actualStep + steps > totalSteps) {
      return;
    }
    setSteps(actualStep + steps);
    console.log(actualStep);
  };

  const buttonNext = (actualStep) => {
    if (actualStep < totalSteps) {
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

  const buttonBack = (actualStep) => {
    if (actualStep > 1) {
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

  const title = (actualStep) => {
    return <h1>Schritt {actualStep}</h1>;
  };

  const description = (actualStep) => {
    return <p className="block">{stepDescription[actualStep]}</p>;
  };

  const img = (actualStep) => {
    const url = require(`../assets/${stepImage}${actualStep}.png`);

    return <img src={url} alt={`Schritt ${actualStep}`} />;
  };

  return (
    <div>
      <Container className="col-xxl-8 px-4 py-5">
        <Row>
          <Col className="gap-3">
            {title(actualStep)}
            {description(actualStep)}
            {buttonBack(actualStep)}
            {buttonNext(actualStep)}
          </Col>
          <Col>{img(actualStep)}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Guide;
