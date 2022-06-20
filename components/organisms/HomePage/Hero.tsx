import Button from "components/atoms/Button";
import { HeroIllustration } from "components/atoms/Illustration";
import Typography from "components/atoms/Typography";
import Image from "next/image";
import React from "react";

interface HeroProps {
  data?: {
    title?: string;
    image?: string;
    desc?: string;
    cta?: Array<object>;
  };
}
type Cta = {
  title?: string;
  url?: string;
};
const Hero = ({ data }: HeroProps) => {
  return (
    <div className="container px-4 flex flex-col gap-[30px] mt-10 items-center lg:px-12 lg:flex-row md:mt-20 ">
      <div className="flex flex-col gap-[30px] basis-[100%] lg:basis-[45%]">
        <Typography variant="h1" component="h1">
          {data?.title}
        </Typography>
        <Typography variant="body1" className="pr-0 lg:pr-12">
          {data?.desc}
        </Typography>
        {data?.cta?.map((button: Cta) => {
          return (
            <Button
              key={button.title}
              variant="primary"
              type="button"
              href={button.url}
              isLink
              className="w-fit">
              {button.title}
            </Button>
          );
        })}
      </div>
      <div className="child-full basis-[100%] lg:basis-[55%]">
        {data?.image && (
          <Image
            src={data.image}
            alt="Hero Image"
            height={559}
            width={642}></Image>
        )}
      </div>
    </div>
  );
};

export default Hero;
