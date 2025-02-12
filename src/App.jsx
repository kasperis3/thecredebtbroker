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
          <img src={commloan_logo} className="react logo" alt="CommLoan logo" />
        </a>
      </div>
      <h1>Commercial Mortgage Options</h1>
      <div>
        <FilloutPopupEmbedButton
          filloutId="js1DZCG8E4us"
          inheritParameters
          text="Fill questionnaire"
          color="green"
          size="large"
          float="Middle"
        />
      </div>
    </>
  );
}

export default App;
