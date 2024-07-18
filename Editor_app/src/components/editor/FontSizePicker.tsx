
import { Menu } from "@mantine/core";
import {
  IconTextSize
} from "@tabler/icons-react";
import { useCallback } from 'react';
const FONT_SIZES = [
  // { label: "Smaller", value: "12px" },
  // { label: "Small", value: "14px" },
  // { label: "Medium", value: "16px" },
  // { label: "Large", value: "20px" },
  // { label: "Extra Large", value: "26px" },

  { label: "Smaller", value: "lg" },
  { label: "Small", value: "xl" },
  { label: "Medium", value: "2xl" },
  { label: "Large", value: "4xl" },
  { label: "Extra Large", value: "6xl" },
];

export type FontSizePickerProps = {
  onChange: (value: string) => void // eslint-disable-line no-unused-vars
  value: string
}

export const FontSizePicker = ({ onChange, value }: FontSizePickerProps) => {
  const currentValue = FONT_SIZES.find(size => size.value === value)
  const currentSizeLabel = currentValue?.label.split(' ')[0] || 'Medium'

  const selectSize = useCallback((size: string) => () => onChange(size), [onChange])

  return (
    <Menu trigger="hover" openDelay={50} closeDelay={200}>
      <Menu.Target>
        {currentSizeLabel}
        <IconTextSize stroke={2} />
      </Menu.Target>

      <Menu.Dropdown>
        {FONT_SIZES.map((size) => (
          <Menu.Item
            style={{ fontSize: size.value }}
            className={value === size.value ? "active" : ""}
            onClick={selectSize(size.value)}
            key={`${size.label}_${size.value}`}
          >
            <span style={{ fontSize: size.value }}>{size.label}</span>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}