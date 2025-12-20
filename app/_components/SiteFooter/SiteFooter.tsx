// "use client";

// import { FooterElement, FooterItems, CopyRight } from "./styles";
// import type { FooterProps } from "./SiteFooter.types";
// import { Logo, NavLists } from "@/components/molecules";
// import { Container, Text } from "@/components/atoms";
import { IconButton, SiteNavList } from "@/app/_components";
import { SiteNavContent } from "@/app/_content";

import styles from "./SiteFooter.module.css";

export const SiteFooter = () => {
  return (
    <SiteNavContent>
      {() => (
        <footer className={styles["site-footer"]}>
          <div className={styles["footer-credentials"]}>
            <IconButton icon="siteLogo" iconSize={0.6} href="/" />
            <h3>Neil Morgan</h3>
            <p>
              All rights reserved
              <br />© 2024
            </p>
          </div>

          <SiteNavList />
        </footer>
      )}
    </SiteNavContent>
  );
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
