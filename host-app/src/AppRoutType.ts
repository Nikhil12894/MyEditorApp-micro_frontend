import React from "react";

export interface AppRoutProps {
    element: React.ReactNode;
    path: string;
    label: string;
    icon: React.ReactNode|string;
    id: string;
    parent?: string;
    children?: AppRoutProps[];
}
