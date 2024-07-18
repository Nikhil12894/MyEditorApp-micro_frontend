import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";


const theme = createTheme({
  /** Your theme override here */
  colors: {
    // override dark colors here to change them for all components
    dark: [
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#020617",
      "#01040e",
      "#00020a",
    ],

    primary: [
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#020617",
      "#01040e",
      "#00020a",
    ], // override primary colors
  },
});

const MantineProviderWarper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
};

export default MantineProviderWarper;
