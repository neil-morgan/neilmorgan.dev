import { teal, iris, olive } from "./palette";

const colors = {
  primary: teal[11],
  primaryA1: `${teal[11]}90`,
  primaryA2: `${teal[11]}80`,
  primaryA3: `${teal[11]}70`,
  primaryA4: `${teal[11]}60`,
  primaryA5: `${teal[11]}50`,
  primaryA6: `${teal[11]}40`,
  primaryA7: `${teal[11]}30`,
  primaryA8: `${teal[11]}20`,
  primaryA9: `${teal[11]}10`,
  primaryA10: `${teal[11]}05`,

  primary2: teal[9],

  secondary: iris[11],
  secondaryA1: `${iris[11]}90`,
  secondaryA2: `${iris[11]}80`,
  secondaryA3: `${iris[11]}70`,
  secondaryA4: `${iris[11]}60`,
  secondaryA5: `${iris[11]}50`,
  secondaryA6: `${iris[11]}40`,
  secondaryA7: `${iris[11]}30`,
  secondaryA8: `${iris[11]}20`,
  secondaryA9: `${iris[11]}10`,
  secondaryA10: `${iris[11]}05`,

  secondary2: iris[9],

  heading: olive[12],
  text: olive[11],

  border1: olive[11],
  border2: olive[9],
  border3: olive[7],
  border4: olive[5],
  border5: olive[3],

  layer1: olive[1],

  layer2: olive[2],
  layer2a1: `${olive[2]}90`,
  layer2a2: `${olive[2]}80`,
  layer2a3: `${olive[2]}70`,
  layer2a4: `${olive[2]}60`,
  layer2a5: `${olive[2]}50`,
  layer2a6: `${olive[2]}40`,
  layer2a7: `${olive[2]}30`,
  layer2a8: `${olive[2]}20`,
  layer2a9: `${olive[2]}10`,
  layer2a10: `${olive[2]}05`,

  layer3: olive[3],
  layer3a1: `${olive[3]}90`,
  layer3a2: `${olive[3]}80`,
  layer3a3: `${olive[3]}70`,
  layer3a4: `${olive[3]}60`,
  layer3a5: `${olive[3]}50`,
  layer3a6: `${olive[3]}40`,
  layer3a7: `${olive[3]}30`,
  layer3a8: `${olive[3]}20`,
  layer3a9: `${olive[3]}10`,
  layer3a10: `${olive[3]}05`,

  layer4: olive[4],

  interaction: `${olive[12]}07`,
  glowInner: `${olive[12]}13`,
  glowOuter: `${olive[11]}07`,
};

const spacing = {
  sitePaddingDesktop: "2rem",
  sitePaddingMobile: "1rem",
  siteWidth: "1200px",
};

export const styles = { ...colors, ...spacing };
