import { BookText, FilePenLine, PlaneLanding } from "lucide-react";
import AppEditor from "./app/editor";
import { AppRoutProps } from "./AppRoutType";
import Landing from "./app/landing";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AppLanding from "./app/appLanding";
import AppEditorReadOnly from "./app/editor_readonly";

const AppRoutList: AppRoutProps[] = [
  {
    element: <Landing />,
    path: "/landing",
    label: "Landing",
    icon: <PlaneLanding className="w-4 h-4" />,
    id: "landing",
  },
  {
    element: <AppEditor />,
    path: "/editor",
    label: "Editor",
    icon: <FilePenLine className="w-4 h-4" />,
    id: "editor",
  },
  {
    element: <AppEditorReadOnly />,
    path: "/blog",
    label: "Blog",
    icon: <BookText className="w-4 h-4" />,
    id: "blog",
  },
];

const AppRout = createBrowserRouter([
  {
    path: "/",
    element: <AppLanding><Outlet /></AppLanding>,
    children: [
      {
        index: true,
        element: <Navigate to="landing" />,
      },
      ...AppRoutList.map((item) => {
        return {
          path: item.path,
          element: item.element,
        };
      }),
    ],
  },
]);

export default AppRout;
export { AppRoutList }