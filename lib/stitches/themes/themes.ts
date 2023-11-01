import { createTheme } from "@stitches/react";
import { base, root, primary } from "./palette";

export const darkTheme = createTheme({
  colors: {
    layer1: base.base14,
    layer2: base.base13,
    layer3: base.base12,
    layer4: base.base11,
    layer5: base.base10,
    layer6: base.base9,

    text1: root.white,
    text2: base.base3,
    text3: base.base5,

    primary1: primary.primary5,
    primary2: primary.primary4,
  },
});

export const lightTheme = createTheme({
  colors: {
    layer1: root.white,
    layer2: base.base1,
    layer3: base.base2,
    layer4: base.base3,
    layer5: base.base4,
    layer6: base.base5,

    text1: base.base14,
    text2: base.base11,
    text3: base.base8,

    primary1: primary.primary6,
    primary2: primary.primary9,
  },
});
