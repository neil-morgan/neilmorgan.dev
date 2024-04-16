import { Fragment } from "react";
import { Text } from "../Text";
import { Link } from "../Link";
import { Wrapper } from "./styles";
import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => (
  <Wrapper>
    {crumbs.map(({ label, href }, i) => (
      <Fragment key={i}>
        {i === 0 ? null : <>&nbsp;&gt;&nbsp;</>}

        {href ? (
          <Link href={href}>{label}</Link>
        ) : (
          <Text weight={500} size={2}>
            {label}
          </Text>
        )}
      </Fragment>
    ))}
  </Wrapper>
);
