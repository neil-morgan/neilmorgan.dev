import { Root } from "@radix-ui/react-portal";
import Defs from "./Defs";
import Base from "./Base";
import { Wrapper, Element } from "./styles";

export const HeroAnimation = () => {
  return (
    <svg viewBox="0 0 450 550">
      <Defs />
      {/* <rect width={450} height={500} /> */}
      <Base />
    </svg>
  );
};
