/* eslint-disable @typescript-eslint/ban-types */
declare module "editor_components/ThemeChangerIcon" {
    type MantineSize = "xs" | "sm" | "md" | "lg" | "xl";
    interface ThemeChangerIconProps {
      onThemeChange: (theme: string) => void;
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
  interface EditorProps {
    content?: string;
    isEnabled?: boolean;
    onUpdate?: (value: string) => void;
    onImageUpload?:  (files: File) =>  Promise<string>|string;
  }
  const Editor: React.ComponentType<EditorProps>;
  export default Editor;
}