import "./App.css";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Components/Buttons";
import { Global, css } from "@emotion/react";
import { normalize } from "polished";
import { defaultTheme } from "./Utilities";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          ${normalize()};
          html {
            font-size: 5px;
          }

          body {
            font-family: ${defaultTheme.primaryFont};
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 30px;
          }
        `}
      />
      <PrimaryButton>click</PrimaryButton>
      <SecondaryButton>click</SecondaryButton>
      <TertiaryButton>click</TertiaryButton>
    </div>
  );
}

export default App;
