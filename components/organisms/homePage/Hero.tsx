import Button from "components/atoms/Button";
import { HeroIllustration } from "components/atoms/illustration";
import Typography from "components/atoms/Typography";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container px-4 flex flex-col gap-[30px] items-center lg:px-12 lg:flex-row md:mt-20 ">
      <div className="flex flex-col gap-[30px] basis-[100%] lg:basis-[45%]">
        <Typography variant="h1" component="h1">
          Let&apos;s get fusely together
        </Typography>
        <Typography variant="body1" className="pr-0 lg:pr-12">
          Outcome-centered product that reduce churn, optimize pricing, and grow
          your subscription business end-to-end.
        </Typography>
        <Button className="w-fit">Get Started</Button>
      </div>
      <div className="child-full basis-[100%] lg:basis-[55%]">
        <Image
          src="/images/hero-illustration.svg"
          alt="Hero Image"
          height={642}
          width={559}></Image>
      </div>
    </div>
  );
};

export default Hero;
