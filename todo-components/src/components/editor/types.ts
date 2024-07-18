
export interface EditorProps {
    content: string;
    isEditable: boolean;
    onUpdate?: (value: string) => void;
}