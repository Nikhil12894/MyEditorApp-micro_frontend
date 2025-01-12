import { Bell, BookText, FilePenLine, Home, UserRound, UserRoundCog, Users } from "lucide-react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AppLanding from "./app/appLanding";
import BlogListing from "./app/blog_app/all-blogs-comp";
import HomeComp from "./app/blog_app/home-comp";
import AppEditor from "./app/editor";
import { AppRoutProps } from "./AppRoutType";
import AppEditorReadOnly from "./app/editor_readonly";
import Author from "./app/blog_app/author-comp";
import Account from "./app/setting/account";
import AccountSetting from "./app/setting/account-setting";
import ProfileSetting from "./app/setting/profile-setting";
import NotificationSetting from "./app/setting/notification-setting";
import UserSetting from "./app/setting/user-setting";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutList: AppRoutProps[] = [
  {
    element: <HomeComp />,
    path: "/home",
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    id: "home",
  },
  // {
  //   element: <Landing />,
  //   path: "/landing",
  //   label: "Landing",
  //   icon: <PlaneLanding className="w-4 h-4" />,
  //   id: "landing",
  // },
  {
    element: <AppEditor />,
    path: "/editor",
    label: "Editor",
    icon: <FilePenLine className="w-4 h-4" />,
    id: "editor",
  },
  {
    element: <BlogListing />,
    path: "/blog",
    label: "Blog",
    icon: <BookText className="w-4 h-4" />,
    id: "blog",
  },
];

const AccountSettingRoute: AppRoutProps[] = [
  {
    element: <AccountSetting />,
    path: "/settings/account",
    label: "Account",
    icon: <UserRoundCog className="w-4 h-4" />,
    id: "account",
  },
  {
    element: <ProfileSetting />,
    path: "/settings/profile",
    label: "Profile",
    icon: <UserRound className="w-4 h-4" />,
    id: "profile",
  },
  {
    element: <NotificationSetting />,
    path: "/settings/notification",
    label: "Notification",
    icon: <Bell className="w-4 h-4" />,
    id: "notification",
  },
  {
    element: <UserSetting />,
    path: "/settings/users",
    label: "Users",
    icon: <Users className="w-4 h-4" />,
    id: "users",
  },
];
  

const AppRout = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLanding>
        <Outlet />
      </AppLanding>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      ...AppRoutList.map((item) => {
        return {
          path: item.path,
          element: item.element,
        };
      }),
      {
        path: "single-post",
        element: <AppEditorReadOnly />,
      },
      {
        path: "author",
        element: <Author />,
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
          <Account>
            <Outlet />
          </Account>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="account" />,
          },
          ...AccountSettingRoute.map((item) => {
            return {
              path: item.path,
              element: item.element,
            };
          }),
        ],
      },
      {
        path: "*",
        element: <Navigate to="home" />,
      },
    ],
  },
]);

export default AppRout;
export { AppRoutList, AccountSettingRoute };
