import { Definitions } from "./Definitions";
import {
  Body,
  Terminals,
  LightingBefore,
  LightingAfter,
  Graphics,
  Dna,
} from "./parts";

export const DnaHologramAnimation = () => (
  <svg viewBox="0 0 450 550">
    <Definitions />
    <g>
      <LightingBefore />
      <Body />
      <Dna />
      <Graphics />
      <Terminals />
      <LightingAfter />
    </g>
  </svg>
);
