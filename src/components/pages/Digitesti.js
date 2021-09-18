import { Card, Button, ImageWithCard } from "hds-react";
import React, { useState } from 'react';
import GuyWithLaptop from './../../images/Man-studying-with-laptop.jpg';
import { useHistory } from 'react-router-dom';

function Digitesti() {
  return (
    <>
      <h1>Testien etusivu</h1>
      <div className="testNavCards">
        <Card
          className="testNavCard"
          heading="Using a computer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <Button
          // onClick={() => handleClick("Kysymys1")}
          >
            Take the test
          </Button>
        </Card>

        <Card
          className="testNavCard"
          heading="Using a computer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <Button
          // onClick={() => handleClick("Kysymys1")}
          >
            Take the test
          </Button>
        </Card>


      </div>
    </>
  )
}

// function menu() {
//   const history = useHistory();
//   function handleClick(path) {
//     history.pushState(path);
//   }
// }

export default Digitesti;

