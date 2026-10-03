"use client";
import { useState } from "react";
import { updateDebugConfig, type DebugConfig } from "@/app/_helpers/debugMenu";
import { combineClassNames } from "@/app/_utils";
import { Spinner, Icon } from "@/app/_components";
import styles from "./DebugMenu.module.css";

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => Promise<void>;
}

const Checkbox = ({ value, onChange }: ToggleProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = async (newValue: boolean) => {
    setIsLoading(true);
    try {
      await onChange(newValue);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <label
      className={combineClassNames(styles.checkbox, value && styles.checked)}
      title={value ? "Disable preview mode" : "Enable preview mode"}
    >
      <input
        type="checkbox"
        checked={value}
        disabled={isLoading}
        aria-label="Preview mode"
        aria-busy={isLoading}
        onChange={(event) => handleChange(event.target.checked)}
      />
      <span className={styles.icon} aria-hidden="true">
        {isLoading ? (
          <Spinner />
        ) : (
          <Icon name={value ? "eyeOpen" : "eyeNone"} size="1.5rem" />
        )}
      </span>
    </label>
  );
};

export const DebugMenu = ({
  debugConfig,
}: {
  debugConfig: DebugConfig;
  environmentId: string;
}) => {
  const [currentConfig, setCurrentConfig] = useState(debugConfig);

  const handleUpdateConfig =
    (configKey: keyof DebugConfig) => async (newValue: boolean) => {
      const newConfig = await updateDebugConfig({ [configKey]: newValue });
      setCurrentConfig(newConfig);
    };

  return (
    <div className={styles.container}>
      <Checkbox
        value={currentConfig.previewMode ?? false}
        onChange={handleUpdateConfig("previewMode")}
      />
    </div>
  );
};
