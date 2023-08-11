import { ApolloWrapper } from "@/lib/apollo";
import { StitchesRegistry } from "@/lib/stitches";
import { ThemeToggleProvider } from "@/lib/stitches/ThemeToggleProvider";

export const Provider = ({ children }: React.PropsWithChildren) => (
  <ApolloWrapper>
    <StitchesRegistry>
      <ThemeToggleProvider>{children}</ThemeToggleProvider>
    </StitchesRegistry>
  </ApolloWrapper>
);
