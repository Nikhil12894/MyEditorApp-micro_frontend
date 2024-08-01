import { AppRoutList } from "@/AppRout";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme-provider";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUser, Github, Linkedin, LogOut, Menu, Moon, Search, Sun, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";



const AppLanding = ({children}:{children:React.ReactNode}) => {
    const { theme, setTheme } = useTheme();
    const { pathname } = useLocation();
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
      <div className="bg-background text-slate-950 dark:text-white mt-0.5 md:mt-0">
        <header
          className={cn([
            "flex h-[5%] items-center gap-4 border-b bg-background px-4 md:px-6 ",
            pathname !== "/editor" ? "sticky top-0 z-50" : "",
          ])}
        >
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="flex items-center gap-4 text-lg font-medium md:text-base"
            >
              <img
                src={theme === "light" ? "./nk.svg" : "./nk_light.svg"}
                alt="nk_landing"
                className="h-14 w-14"
              />
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
                <Menu className="h-5 w-5 " />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="text-foreground">
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
                <DropdownMenuItem>
                  <Link to={"/settings"}>Setting</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout <LogOut className="ml-2 h-4 w-4" /></DropdownMenuItem>
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
        <main className="flex-1  bg-transparent ">{children}</main>
        <footer className="relative bottom-0 z-50 h-[5%]">
          <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1">
            <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
              <div className="grid grid-cols-8 gap-6 md:gap-0">
                <div className="col-span-8  md:col-span-2 lg:col-span-3">
                  <div className="flex items-center justify-between gap-6  py-6 md:space-y-6 md:border-none md:py-0">
                    <img
                      src={theme === "dark" ? "nk_light.svg" : "nk.svg"}
                      alt="Nk logo"
                      className="w-10 h-10 dark:brightness-200 dark:grayscale flex"
                    />
                    <div className="flex gap-6">
                      <a
                        href="#"
                        target="blank"
                        aria-label="github"
                        className="hover:text-cyan-600"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="#"
                        target="blank"
                        aria-label="twitter"
                        className="hover:text-cyan-600"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a
                        href="#"
                        target="blank"
                        aria-label="linkedin"
                        className="hover:text-cyan-600"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-span-8 md:col-span-6 lg:col-span-5">
                  <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16">
                    <span>
                      &copy; NK 2024 - <span id="year"></span>{" "}
                    </span>
                    <span>All right reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default AppLanding;



