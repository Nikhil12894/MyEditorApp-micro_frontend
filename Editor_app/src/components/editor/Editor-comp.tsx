import { Link, RichTextEditor, useRichTextEditorContext } from "@mantine/tiptap";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import jsx from "highlight.js/lib/languages/javascript";
import tsx from "highlight.js/lib/languages/typescript";
import { common, createLowlight } from "lowlight";

import { Group, Menu, Modal, rem, Tabs, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useDisclosure } from "@mantine/hooks";
import { IconColumnInsertLeft, IconColumnInsertRight, IconColumnRemove, IconPhoto, IconRowInsertBottom, IconRowInsertTop, IconRowRemove, IconTable, IconTableMinus, IconTablePlus, IconUpload, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import { CustomCodeBlockLowlight } from "./custom-code-block";
// import "./editor-table.css";
import "./editor.css";



const lowlight = createLowlight(common);

// register languages that you are planning to use
lowlight.register({ tsx });
lowlight.register({ jsx });


const EditorComponent=({ content="", onUpdate=() => {console.log("onUpdate")}, isEditable=true }: {content: string, onUpdate?: (content: string) => void, isEditable?: boolean}) =>{
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      CustomCodeBlockLowlight.configure({ lowlight }),
      ImageResize,
      CustomTable.configure({
        resizable: true,
      }),
      CustomTableRow,
      CustomTableCell,
      CustomTableHeader,
    ],
    editorProps: {
      attributes: {
        style: "border: none;",
      },
    },
    content:content,
  });

  useEffect(() => {
    if(editor) {
        editor?.setEditable(isEditable);
    }
  }, [editor, isEditable]);


  return (
      <RichTextEditor
        editor={editor}
        withTypographyStyles={false}
        onBlur={() => {
          if (editor) {
            onUpdate(editor.getHTML());
          }
        }}
      >
        {isEditable && (
          <RichTextEditor.Toolbar sticky className="justify-center ">
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.ColorPicker
                colors={[
                  "#25262b",
                  "#868e96",
                  "#fa5252",
                  "#e64980",
                  "#be4bdb",
                  "#7950f2",
                  "#4c6ef5",
                  "#228be6",
                  "#15aabf",
                  "#12b886",
                  "#40c057",
                  "#82c91e",
                  "#fab005",
                  "#fd7e14",
                ]}
              />

              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
              <RichTextEditor.CodeBlock />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <CustomImageControl />
              <InsertTableControl />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
        )}
        <RichTextEditor.Content/>
      </RichTextEditor>
  );
}

export default EditorComponent;

function CustomImageControl() {
  const { editor } = useRichTextEditorContext();
    const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (file: File) => {
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        editor
          ?.chain()
          .focus()
          .setImage({ src: `${base64String}` })
          .run();
        close();
        setIsLoading(false);
      };
    }
  };

  const handleClick = () => {
    // fileInputRef.current?.click();
    open();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        {/* Modal content */}
        <Tabs defaultValue="first" activateTabWithKeyboard={false}>
          <Tabs.List>
            <Tabs.Tab value="first">Teal tab</Tabs.Tab>
            <Tabs.Tab value="second" color="blue">
              Blue tab
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first" pt="xs">
            <Dropzone
              loading={isLoading}
              onDrop={(files) => {console.log("accepted files", files);

                handleImageUpload(files[0]);
              }}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-blue-6)",
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-red-6)",
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-dimmed)",
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Attach as many files as you like, each file should not
                    exceed 5mb
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            Second tab color is blue, it gets this value from props, props have
            the priority and will override context value
          </Tabs.Panel>
        </Tabs>
      </Modal>
      {/* <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageUpload}
      /> */}
      <RichTextEditor.Control onClick={() => handleClick()}>
        <IconPhoto stroke={1.5} size="1rem" />
      </RichTextEditor.Control>
    </>
  );
}


const InsertTableControl=()=> {
  const { editor } = useRichTextEditorContext();

const insertTable = () => {
  editor?.chain()
    .focus()
    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
    .run();
};
const deleteTable = () => {
  editor?.chain().focus().deleteTable().run();
};

const addRowAfter = () => {
  editor?.chain().focus().addRowAfter().run();
};

const addRowBefore = () => {
  editor?.chain().focus().addRowBefore().run();
};

const deleteRow = () => {
  editor?.chain().focus().deleteRow().run();
};

const addColumnAfter = () => {
  editor?.chain().focus().addColumnAfter().run();
};

const addColumnBefore = () => {
  editor?.chain().focus().addColumnBefore().run();
};

const deleteColumn = () => {
  editor?.chain().focus().deleteColumn().run();
};

  
  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <RichTextEditor.Control>
            <IconTable stroke={1.5} size="1rem" />
          </RichTextEditor.Control>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Table</Menu.Label>
          <Menu.Item
            leftSection={
              <IconTablePlus style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={insertTable}
          >
            Insert table
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTableMinus style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={deleteTable}
          >
            Delete table
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Table Columns</Menu.Label>
          <Menu.Item
            leftSection={
              <IconColumnInsertRight
                style={{ width: rem(14), height: rem(14) }}
              />
            }
            onClick={addColumnAfter}
          >
            Add column right
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconColumnInsertLeft
                style={{ width: rem(14), height: rem(14) }}
              />
            }
            onClick={addColumnBefore}
          >
            Add column left
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconColumnRemove style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={deleteColumn}
          >
            Delete column
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Table Rows</Menu.Label>
          <Menu.Item
            leftSection={
              <IconRowInsertTop
                style={{ width: rem(14), height: rem(14) }}
              />
            }
            onClick={addRowBefore}
          >
            Add row top
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconRowInsertBottom
                style={{ width: rem(14), height: rem(14) }}
              />
            }
            onClick={addRowAfter}
          >
            Add row bottom
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconRowRemove style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={deleteRow}
          >
            Delete row
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};



const CustomTable = Table.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      "table",
      mergeAttributes(HTMLAttributes, {
        class: "border border-slate-950 dark:border-slate-200 rounded-lg", 
      }),
      0,
    ];
  },
});

const CustomTableRow = TableRow.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      "tr",
      mergeAttributes(HTMLAttributes, {
        class:
          "border border-slate-950 dark:border-slate-200 dark:colors-slate-200 colors-slate-950",
      }),
      0,
    ];
  },
});

const CustomTableHeader = TableHeader.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      "th",
      mergeAttributes(HTMLAttributes, {
        class:
          "dark:bg-slate-400 bg-slate-100 font-bold border border-slate-950 dark:border-slate-200",
      }),
      0,
    ];
  },
});

const CustomTableCell = TableCell.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      "td",
      mergeAttributes(HTMLAttributes, {
        class:
          "border border-slate-950 dark:border-slate-200 ",
      }),
      0,
    ];
  },
});

// const InsertStarControl=()=> {
//   const { editor } = useRichTextEditorContext();
//   return (
//     <RichTextEditor.Control
//       onClick={() => editor?.commands.insertContent('⭐')}
//       aria-label="Insert star emoji"
//       title="Insert star emoji"
//     >
//       <IconStar stroke={1.5} size="1rem" />
//     </RichTextEditor.Control>
//   );
// };


//Read file as base64
/* function CustomImageControl() {
const fileInputRef = useRef<HTMLInputElement>(null);  
const { editor } = useRichTextEditorContext();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        editor
          ?.chain()
          .focus()
          .setImage({ src: `${base64String}` })
          .run();
      };
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      <RichTextEditor.Control onClick={() => fileInputRef.current?.click()}>
        <IconPhoto stroke={1.5} size="1rem" />
      </RichTextEditor.Control>
    </>
  );
} */


// export const FontSizeControl= () => {
//   const { editor } = useRichTextEditorContext();
//       const [opened, setOpened] = useState(false);

//   const fontSizes = [
//     { label: "12px", value: "12px" },
//     { label: "14px", value: "14px" },
//     { label: "16px", value: "16px" },
//     { label: "18px", value: "18px" },
//     { label: "24px", value: "24px" },
//     { label: "32px", value: "32px" },
//   ];

//   const handleFontSizeChange = (value: string|null) => {
//     if (!value || value.length === 0) {
//       return editor?.chain().focus().unsetFontSize().run();
//     }
//     return editor?.chain().focus().setFontSize(value).run();
//   };

//   return (
//     <>
//       <Menu
//         opened={opened}
//         onChange={setOpened}
//         trigger="hover"
//         offset={18}
//         withArrow
//         arrowPosition="center"
//       >
//         <Menu.Dropdown>
//           {fontSizes.map((size) => (
//             <Menu.Item
//               onClick={() => handleFontSizeChange(size.value)}
//               key={`${size.label}_${size.value}`}
//             >
//               <span style={{ fontSize: size.value }}>{size.label}</span>
//             </Menu.Item>
//           ))}
//         </Menu.Dropdown>
//       </Menu>

//       <RichTextEditor.Control onClick={() => setOpened((prev) => !prev)}>
//         <IconTextIncrease stroke={1.5} size={"1rem"} />
//       </RichTextEditor.Control>
//     </>
//   );
// };



