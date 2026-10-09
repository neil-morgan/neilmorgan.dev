import { isDraftModeEnabled } from "@/app/_helpers/preview-mode";
import { PreviewMode } from "./PreviewMode";

export const PreviewModeServer = async () => {
  if (process.env.NODE_ENV === "production") return null;

  const previewConfig = await isDraftModeEnabled();

  return (
    <PreviewMode
      previewConfig={previewConfig}
      environmentId={process.env.CONTENTFUL_ENVIRONMENT_ID ?? ""}
    />
  );
};
