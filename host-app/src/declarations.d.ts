/* eslint-disable @typescript-eslint/ban-types */

declare module "editor_components/ThemeChangerIcon" {
    type MantineSize = "xs" | "sm" | "md" | "lg" | "xl";
    interface ThemeChangerIconProps {
      setTheme?: () => EditorTheme;
      iconStroke?: number;
      iconSize?: MantineSize | (string & {}) | number;
    }
  const ThemeChangerIcon: React.ComponentType<ThemeChangerIconProps>;
  export default ThemeChangerIcon;
}

declare module "editor_components/MantineProviderWarper" {
  interface MantineProviderWarperProps {
    children?: React.ReactNode;
  }

  const MantineProviderWarper: React.ComponentType<MantineProviderWarperProps>;
  export default MantineProviderWarper;
}

declare module "editor_components/Editor" {
  export type Theme = "dark" | "light" | "auto";
 
  interface EditorProps {
    content?: string;
    isEnabled?: boolean;
    onUpdate?: (value: string) => void;
    onImageUpload?: (files: File) => Promise<string> | string;
    setTheme?: () => Theme;
  }
  const Editor: React.ComponentType<EditorProps>;
  export default Editor;
}