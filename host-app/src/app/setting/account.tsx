import { AccountSettingRoute } from "@/AppRout";
import SettingMenu from "./setting-menu";

const Account = ({children}:{children:React.ReactNode}) => {
  


  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <SettingMenu
          menu={AccountSettingRoute}
          // onSelect={setSelected}
        />
        {children}
        {/* Account/Security Setting */}
        {/* {selected === "Account" && <AccountSetting />} */}

        {/* Profile Setting */}
        {/* {selected === "Profile" && <ProfileSetting />} */}

        {/* Notification Setting */}
        {/* {selected === "Notification" && <NotificationSetting />} */}

        {/* Users Setting */}
        {/* {selected === "Users" && <UserSetting />} */}
      </div>
    </div>
  );
};

export default Account;
