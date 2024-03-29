import { Definitions } from "./Definitions";
import {
  Body,
  Terminals,
  LightingBefore,
  LightingAfter,
  Graphics,
  Dna,
} from "./parts";
import { Svg } from "./styles";

export const DnaHologramAnimation = () => (
  <Svg
    viewBox="0 0 450 550"
    width="450px"
    height="550px"
    xmlns="http://www.w3.org/2000/svg">
    <Definitions />
    <g>
      <LightingBefore />
      <Body />
      <Dna />
      <Graphics />
      <Terminals />
      <LightingAfter />
    </g>
  </Svg>
);
