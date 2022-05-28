import Button from "components/atoms/Button";
import Link from "components/atoms/Link";
import Typography from "components/atoms/Typography";
import Image from "next/image";
import React from "react";

interface SectionContentProps {
  title: string;
  desc: string;
  href: string;
  image: string;
  isReserve?: boolean;
}
const SectionContent = (props: SectionContentProps) => {
  const { title, desc, href, image = "/", isReserve } = props;

  const cls =
    "container px-4 flex flex-col-reverse gap-[30px] my-[100px] items-center lg:px-12 lg:flex-row md:my-[140px] md:my-[220px] lg:gap-[180px]";
  return (
    <div
      className={[cls, isReserve ? "lg:flex-row-reverse" : "lg:flex-row"].join(
        " ",
      )}>
      <div className="child-full basis-[100%] lg:basis-[60%]">
        <Image src={image} alt={title} height={497.19} width={600}></Image>
      </div>
      <div className="flex flex-col gap-[30px] basis-[100%] lg:basis-[40%]">
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" className="pr-0 lg:pr-12">
          {desc}
        </Typography>
        <Link href={href} className="w-fit">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SectionContent;
