import { useState } from "react";
import commloan_logo from "./assets/commloan_logo.jpeg";
import "./App.css";
import "@fillout/react/style.css";
import {
  FilloutStandardEmbed,
  FilloutFullScreenEmbed,
  FilloutPopupEmbedButton,
} from "@fillout/react";

function App() {
  return (
    <>
      <div>
        <a href="">
          <img src={commloan_logo} className="logo" alt="CommLoan logo" />
        </a>
      </div>
      <h1>
        My name is Kushaal. I'm an experienced commercial mortgage broker. I
        studied Mathematics at UC Berkeley and I personally invest in CRE.
      </h1>
      <p>
        CommLoan is a debt marketplace powered by technology and built with over
        750 lenders nationwide. We have created a real time database where our
        lenders update what their credit committee buy box is every 10 days.
        What makes us unique is that we are lender neutral, we create friendly
        competition between the lenders interested in your deal to get our
        borrowers the best rate and terms for their specific goals.
      </p>

      <div>
        <FilloutPopupEmbedButton
          filloutId="js1DZCG8E4us"
          inheritParameters
          text="I'm ready for loan options"
          color="green"
          size="large"
          float="Middle"
        />
      </div>
    </>
  );
}

export default App;
