import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./global/wrapper";
// import Container from "./global/container";
import clsx from "clsx";

const Hero = () => {
  return (
    <Wrapper className="px-0 md:px-0">
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      {/* <Container> */}
      <div
        className={clsx(
          "flex flex-col items-center justify-center py-20 h-full bg-image "
        )}
      >
        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
          <span>
            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
          <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
          <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
            <Image
              src="/icons/sparkles-dark.svg"
              alt="✨"
              width={24}
              height={24}
              className="w-4 h-4"
            />
            Introducing TheHumbleHackers
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>

        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-5xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
            Your go-to hub for futuristic tech insights and innovations
          </h1>
          <p className="text-base md:text-md text-foreground/80 mt-6 text-center">
            We sift through the latest in tech to bring you honest, no-nonsense takes. Think of us as your personal guide to the world of AI, VR, and beyond.
          </p>
          <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full gap-4">
            <Link
              href="/about"
              className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none mr-4"
            >
              <p className="text-foreground text-sm text-center md:text-base font-medium px-4">
                ✨ {"  "}Explore More
              </p>
            </Link>
            <Link href={'/ContactUs'}>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full hidden lg:flex py-5 px-4 border border-foreground/20"
              >

                <p className="text-foreground text-sm text-center md:text-base font-medium">
                  Get Started
                </p>
                <ArrowRight className="w-4 h-4 ml-1" />


              </Button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row mt-6 md:mt-12 gap-4 justify-center items-center">
            <Image
              src="/assets/rating.svg"
              alt="rating"
              width={100}
              height={100}
            />
            <p>Trusted by 1,000+ users</p>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </Wrapper>
  );
};

export default Hero;
