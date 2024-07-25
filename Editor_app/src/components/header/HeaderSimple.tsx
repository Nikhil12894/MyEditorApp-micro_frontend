import { Burger, Container, Group, MantineColorScheme, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import ThemeChangerIcon from "../colorSchemeChanger";
import classes from "./HeaderSimple.module.css";
import { useState } from "react";


export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [currentTheme, setCurrentTheme] = useState<MantineColorScheme>("light");
  // const [active, setActive] = useState(links[0].link);


  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Title order={2}>Editor</Title>
        <Group gap={5} visibleFrom="xs">
          <ThemeChangerIcon setTheme={() => {
            setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
            return currentTheme;
            }} />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
