import { ApolloWrapper } from "@/lib/apollo";
import { StitchesRegistry } from "@/lib/stitches";
import { ThemeToggleProvider } from "@/lib/stitches/ThemeToggleProvider";
import { LikesProvider } from "@/contexts";

export const Provider = ({ children }: React.PropsWithChildren) => (
  <ApolloWrapper>
    <StitchesRegistry>
      <ThemeToggleProvider>
        <LikesProvider>{children}</LikesProvider>
      </ThemeToggleProvider>
    </StitchesRegistry>
  </ApolloWrapper>
);
