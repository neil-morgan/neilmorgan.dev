import { blue, teal, steel } from "./palette";

const colors = {
  border: steel[4],
  borderLight: steel[6],
  borderHighlight: steel[7],
  highlight: steel[2],
  primary: teal[11],
  secondary: blue[11],
  text: steel[11],
  disabled: steel[10],
  layer1: steel[1],
  layer2: steel[2],
  layer3: steel[4],
};

const spacing = {
  sitePaddingDesktop: "2rem",
  sitePaddingMobile: "1rem",
  siteWidth: "1200px",
};

export const styles = { ...colors, ...spacing };
