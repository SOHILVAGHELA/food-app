import { Link } from "react-router-dom";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  HandPlatter,
  Loader2,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const admin = true;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">SohilEats</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/">Profile</Link>
            <Link to="/">Order</Link>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Dashboard</MenubarTrigger>
                  <MenubarContent>
                    <Link to="/admin/restaurant">
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>

                    <Link to="/admin/menu">
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Order</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/cart" className="relative inline-block cursor-pointer">
              <ShoppingCart className="w-8 h-8 text-gray-700" />

              <span className="absolute -top-2 -right-2  text-[10px] font-bold text-white bg-red-500 rounded-full h-4 w-4 flex items-center justify-center">
                5
              </span>
            </Link>
            <div className="">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              {loading ? (
                <Button disabled className="bg-orange-400 hover:bg-orange-300">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange-400 hover:bg-orange-300">
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden lg:hidden">
          <MobileNavbar></MobileNavbar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-gray-200 text-black"
        >
          <Menu size={"18"}></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-5">
          <SheetTitle>SohilEats</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <User />
            <span>Profile</span>
          </Link>
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <HandPlatter />
            <span>Order</span>
          </Link>
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <ShoppingCart />
            <span>Cart(0)</span>
          </Link>
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <SquareMenu />
            <span>Menu</span>
          </Link>
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <UtensilsCrossed />
            <span>Restaurant</span>
          </Link>
          <Link
            to="/profile"
            className="flex  items-center gap-4 hover:bg-gray-200 px-3 py-2  rounded-lg cursor-pointer hover:text-gray-900"
          >
            <PackageCheck />
            <span>Restaurant Orders</span>
          </Link>
        </SheetDescription>
        <SheetFooter className="flex flex-col gap-5">
          <div className="flex  flex-row  items-center gap-2">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-bold">Sohil vaghela</h1>
          </div>
          <Button className="bg-orange-400 hover:bg-orange-300" type="submit">
            Logout
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
