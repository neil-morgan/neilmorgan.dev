"use client";

import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { Aside, Body, List, ListItem, Content } from "./styles";
import { buildRichtextHeadings } from "./helpers";
import type { NavigableRichtextProps } from "./types";
import { Richtext, CopyButton } from "@/components/molecules";
import { Icon, AspectImage, ExpandedEdge, Text } from "@/components/atoms";
import { SITE_BASE_URL } from "@/lib/site";

export const NavigableRichtext = ({
  content,
  image,
  base64Map,
}: NavigableRichtextProps) => {
  const pathname = usePathname();
  const [currentId, setCurrentId] = useState("");
  const currentIdIcon = <Icon name="ChevronRight" />;

  return (
    <Body>
      <Content>
        {image?.title && image?.url && image?.description && (
          <ExpandedEdge css={{ marginBottom: "$7" }}>
            <AspectImage
              url={image?.url}
              fit="cover"
              description={image?.description}
              blurDataUrl={base64Map?.[image?.title]}
            />
          </ExpandedEdge>
        )}
        <Richtext
          content={content}
          setCurrentId={setCurrentId}
          base64Map={base64Map}
        />
      </Content>
      <Aside>
        <Text size={2} print>Content</Text>
        <List>
          {buildRichtextHeadings(content.json.content).map(
            ({ heading, subHeadings }, i1) => (
              <Fragment key={`${heading.label}-${i1}`}>
                {
                  <ListItem>
                    {heading.id === currentId && currentIdIcon}

                    <a href={heading.href}>{heading.label}</a>
                  </ListItem>
                }
                {subHeadings.length > 0 && (
                  <List>
                    {subHeadings.map(({ heading: subHeading }, i2) => (
                      <ListItem key={`${heading.label}-${i2}`}>
                        {subHeading.id === currentId && currentIdIcon}
                        <a href={subHeading.href}>{subHeading.label}</a>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Fragment>
            ),
          )}
        </List>

        <CopyButton
          size="sm"
          value={`${SITE_BASE_URL}${pathname}`}
          message="Url copied to clipboard"
        />
      </Aside>
    </Body>
  );
};
