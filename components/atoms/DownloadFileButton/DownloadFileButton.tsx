"use client";

import { saveAs } from "file-saver";
import type { DownloadFileButtonProps } from "./types";
import { Button } from "@/components/atoms";

export const DownloadFileButton = ({
  fileUrl,
  fileName,
  buttonLabel,
}: DownloadFileButtonProps) => (
  <Button onClick={() => saveAs(fileUrl, fileName)} rightIcon="File">
    {buttonLabel || "Download"}
  </Button>
);
