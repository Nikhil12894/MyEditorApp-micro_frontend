/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  MantineSize,
  MantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ColorSchema.module.css";

const ThemeChangerIcon = ({
  // onThemeChange,
  setTheme,
  iconStroke = 2,
  iconSize = "md",
}: {
  // onThemeChange: (theme: string) => void;
  setTheme: () => MantineColorScheme | null;
  iconStroke?: number;
  iconSize?: MantineSize | (string & {}) | number;
}) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const onThemeChangeHandler = () => {
    setColorScheme(setTheme() || 'auto');
  };

  return (
    <ActionIcon
      onClick={onThemeChangeHandler}
      variant="transparent"
      size={iconSize}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <IconSun
          className={cx(classes.icon, classes.light)}
          stroke={iconStroke}
        />
      ) : (
        <IconMoon
          className={cx(classes.icon, classes.dark)}
          stroke={iconStroke}
        />
      )}
    </ActionIcon>
  );
};

export default ThemeChangerIcon;
