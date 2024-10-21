import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

const Navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8" />
            <span className="text-lg font-medium">Nexa</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
