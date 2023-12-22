export const renderText = (text: string) =>
  text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]);
