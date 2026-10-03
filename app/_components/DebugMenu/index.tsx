import { isDraftModeEnabled } from "@/app/_helpers/debugMenu";
import { DebugMenu } from "./DebugMenu";

export const DebugMenuServer = async () => {
  if (process.env.NODE_ENV === "production") return null;

  const debugConfig = await isDraftModeEnabled();
  if (!debugConfig) return null;

  return (
    <DebugMenu
      debugConfig={debugConfig}
      environmentId={process.env.CONTENTFUL_ENVIRONMENT_ID ?? ""}
    />
  );
};
