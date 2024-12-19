import React from "react";
import Wrapper from "./global/wrapper";
// import Container from "./global/container";
import SectionBadge from "./ui/section-badge";
import Marquee from "./ui/marquee";
import { reviewsnew } from "@/constants";
import { cn } from "@/lib/utils";
// import { UserIcon } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  // const firstRow = reviews.slice(0, reviews.length / 2);
  // const secondRow = reviews.slice(reviews.length / 2);

  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10" />

      {/* <Container> */}
        <div className="max-w-md mx-auto text-start md:text-center">
          <SectionBadge title="Our customers" />

          <h2 className="text-3xl lg:text-4xl 2xl:text-4xl mt-6 font-semibold">
          As seen in
          </h2>
          <p className="text-muted-foreground mt-6">
           Companies using our services
          </p>
        </div>
      {/* </Container> */}

      {/* <Container> */}
        <div className="py-10 md:py-10 w-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-6">
            <Marquee pauseOnHover className="[--duration:20s] select-none">
              {reviewsnew.map((review) => (
                <figure
                  key={review.name}
                  className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                  )}
                >
                  <div className="flex justify-center items-center">
                    <Image
                    src={review.url}
                    alt={review.name}
                    width={80}
                    height={80}
                    className=""
                    />
                  </div>
                </figure>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      {/* </Container> */}
    </Wrapper>
  );
};

export default Testimonials;
