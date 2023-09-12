import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const About = (props) => {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" style={myStyle}>
            <Accordion.Header>
              <strong>Analize your text</strong>
            </Accordion.Header>
            <Accordion.Body>
              TextUtil is a free character counter tool that provides instant
              character count & word count static for a given text. TextUtil
              reports the number of characters and words .Thus it is suitable
              for writing text with characters/words linmit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header>
              <strong>Free to use</strong>
            </Accordion.Header>
            <Accordion.Body>
              TextUtil is a free character counter tool that provides instant
              character count & word count static for a given text. TextUtil
              reports the number of characters and words .Thus it is suitable
              for writing text with characters/words linmit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={myStyle}>
            <Accordion.Header>
              <strong>Brouser Campatible</strong>
            </Accordion.Header>
            <Accordion.Body>
              TextUtil is a free character counter tool that provides instant
              character count & word count static for a given text. TextUtil
              reports the number of characters and words .Thus it is suitable
              for writing text with characters/words linmit.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default About;
