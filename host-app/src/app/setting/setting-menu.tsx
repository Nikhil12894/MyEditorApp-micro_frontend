import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
interface MenuProps {
  label: string;
  path: string;
  icon?: React.ReactNode;
}
interface SettingMenuProps {
  menu: MenuProps[];
}

const SettingMenu = (settingMenu: SettingMenuProps) => {
  const location = useLocation()
  const [selected, setSelected] = useState<string>();
  const handleSelect = (value: string) => {
    setSelected(value);
  };
  useEffect(() => {
    const currentActiveMenu = settingMenu.menu.filter((item) => item.path === location.pathname)[0]?.label;
    setSelected(currentActiveMenu);
  }, [selected, location.pathname, settingMenu.menu]);
  return (
    <>
      {/* For Small Screen */}

      <div className="relative my-4 w-72 mx-auto sm:hidden">
        <NavigationMenu className=" justify-center font-extrabold border rounded-lg">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-64">{selected || "Account Setting"}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-56 gap-3 p-4">
                  {settingMenu.menu.map((item: MenuProps) => (
                    <Link
                      to={item.path}
                      className={cn([
                        "flex items-center gap-1",
                        selected === item.label ? "text-cyan-600" : "",
                      ])}
                      key={uuidv4()}
                      onClick={() => handleSelect(item.label)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* For Large Screen */}
      <div className="col-span-2 hidden sm:block">
        <ul>
          {settingMenu.menu.map((item: MenuProps) => (
            <li
              key={uuidv4()}
              className={cn([
                "mt-5 cursor-pointer   px-2 py-2 font-semibold transition  ",
                selected === item.label
                  ? "text-slate-700 border-l-cyan-700 border-l-2"
                  : "hover:border-l-2 hover:border-l-cyan-700 hover:text-cyan-700",
              ])}
              onClick={() => handleSelect(item.label)}
            >
              <Link to={item.path} className="flex items-center gap-1">
                <span
                  className={cn([
                    selected === item.label ? "text-cyan-600" : "",
                  ])}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SettingMenu;
