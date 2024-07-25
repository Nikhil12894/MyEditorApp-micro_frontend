import { AppRoutList } from "@/AppRout";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/theme-provider";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUser, Menu, Moon, Search, Sun } from "lucide-react";
import { Link } from "react-router-dom";



const AppLanding = ({children}:{children:React.ReactNode}) => {
    const { theme, setTheme } = useTheme();
    const menuItems = AppRoutList.map((item) => (
      <Link
        to={item.path}
        className="text-foreground transition-colors hover:text-foreground"
        key={item.label}
      >
        {item.label}
      </Link>
    ));
    return (
      <div className="w-screen h-screen bg-background">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="flex items-center gap-4 text-lg font-medium md:text-base"
            >
              {/* <Package2 className="h-6 w-6" /> */}
              <img
                src={theme === "light" ? "./nk.svg" : "./nk_light.svg"}
                alt="nk_landing"
                className="h-8 w-8"
              />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {menuItems}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <img
                    src={theme === "light" ? "/nk.svg" : "/nk_light.svg"}
                    className="h-6 w-6"
                  />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {menuItems}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                <DropdownMenuLabel>Mode</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center">
                  {theme === "light" ? (
                    <Sun
                      className="mr-2 h-6 w-6 dark:text-white text-slate-900 hover:rotate-180 duration-300 hover:text-yellow-500 cursor-pointer"
                      onClick={() => setTheme("dark")}
                    />
                  ) : (
                    <Moon
                      className="mr-2 h-6 w-6 dark:text-white text-slate-900 hover:rotate-180 duration-300 hover:text-yellow-200 cursor-pointer"
                      onClick={() => setTheme("light")}
                    />
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main>{children}</main>
      </div>
    );
}

export default AppLanding;



