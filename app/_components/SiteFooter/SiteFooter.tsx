// "use client";

// import { FooterElement, FooterItems, CopyRight } from "./styles";
// import type { FooterProps } from "./SiteFooter.types";
// import { Logo, NavLists } from "@/components/molecules";
// import { Container, Text } from "@/components/atoms";

export const SiteFooter = ({ content }) => {
  return <div>Site Footer Component</div>;
  // <FooterElement>
  //   <Container>
  //     <FooterItems>
  //       <CopyRight>
  //         <Logo isLink size="md" />
  //         <Text
  //           color="$white"
  //           size={4}
  //           weight={600}
  //           css={{ marginTop: "$4", marginBottom: "$1" }}>
  //           Neil Morgan
  //         </Text>
  //         <Text size={0} weight={300}>
  //           All rights reserved <br />© 2024
  //         </Text>
  //       </CopyRight>
  //       <NavLists
  //         lists={[
  //           { heading: "Pages", items: content.navigation },
  //           {
  //             heading: "Links",
  //             items: content.socialItems.map(item => ({
  //               label: item.title as string,
  //               slug: item.href as string,
  //             })),
  //           },
  //         ]}
  //       />
  //     </FooterItems>
  //   </Container>
  // </FooterElement>
};
