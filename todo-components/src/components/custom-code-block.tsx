/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionIcon,
  CopyButton,
  rem,
  Select,
  Tooltip
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import {
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { useState } from "react";

const CustomCodeBlock = (props:any) => {
  const [isEnabled] = useState(props.editor?.isEditable);
  return (
    <NodeViewWrapper className="code-block">
      <div className="relative p-0">
        <pre>
          <NodeViewContent as="code" />
        </pre>
        <span className="absolute top-2 right-2  py-1 px-1 rounded">
          <span className="flex items-center justify-center">
            {isEnabled ? (
              <Select
                variant="unstyled"
                placeholder="language"
                defaultValue={props.node.attrs.language || "tsx"}
                onChange={(value) => {
                  props.updateAttributes({ language: value });
                }}
                data={props.extension.options.lowlight.listLanguages()}
              />
            ) : (
                <CopyButton value={props.node.textContent} timeout={2000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? "Copied" : "Copy"}
                      withArrow
                      position="right"
                      key={"copy_code"}
                    >
                      <ActionIcon
                        color={copied ? "teal" : "gray"}
                        variant="subtle"
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck style={{ width: rem(16) }} />
                        ) : (
                          <IconCopy style={{ width: rem(16) }} />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
            )}
          </span>
        </span>
      </div>
    </NodeViewWrapper>
  );
};

// Define extensions
const CustomCodeBlockLowlight = CodeBlockLowlight.extend({

  /**
   * Returns the CustomCodeBlock component.
   *
   * @return {React.ComponentType} The CustomCodeBlock component.
   */
  addNodeView() {
    return ReactNodeViewRenderer(CustomCodeBlock);
  },
});

export { CustomCodeBlockLowlight };
