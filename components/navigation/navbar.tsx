/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";
import { buttonVariants } from "../ui/button";
import { navLinks } from "@/constants";
import clsx from "clsx";
import Image from "next/image";


const Navbar = () => {

  return (
    <header className="px-4 h-16 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-x-2">
            {/* <Icons.logo className="w-8 h-8" /> */}
            {/* <span className="text-lg font-medium">Nexa</span> */}
            {/* <Image
                src="/bgimage/logohh.png"
                alt="logo"
                width={60}
                height={60}
                className=""
              /> */}
            <h1 className="text-sm md:text-xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              TheHumbleHackers
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => {
              return (
                <li
                  className="text-md text-white transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600"
                  key={link.name}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}

          </ul>


        </nav>

        <div className="flex items-center gap-4">
          {/* <Link
            href={"/"}
            className={clsx(buttonVariants({ size: "sm", variant: "outline" }), "bg-gray-600")}
          >
            Earn Bitcoin
          </Link>
          <Link
            href={"/"}
            className={buttonVariants({
              size: "sm",
              className: "hidden md:flex",
            })}
          >
            Download
          </Link> */}
          {/* <Link
          href="/contact"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
            {'Contact Us'}
          </span>
        </Link> */}
          <Link
            href="/ContactUs"
            className="relative inline-flex h-8 md:h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:bg-purple-600 hover:backdrop-blur-sm ">
              {'Contact Us'}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
