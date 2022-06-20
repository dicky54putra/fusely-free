import Button from "components/atoms/Button";
import Link from "components/atoms/Link";
import Typography from "components/atoms/Typography";
import Image from "next/image";
import React from "react";

interface SectionContentProps {
  isReserve?: boolean;
}

const SectionContentPlaceholder = (props: SectionContentProps) => {
  const { isReserve } = props;

  const cls =
    "_section container px-4 flex flex-col-reverse gap-[30px] my-[100px] items-center lg:px-12 lg:flex-row md:my-[140px] md:my-[220px] lg:gap-[180px]";
  return (
    <div
      className={[cls, isReserve ? "lg:flex-row-reverse" : "lg:flex-row"].join(
        " ",
      )}>
      <div className="basis-[100%] lg:basis-[60%]">
        <div className="h-[300px] w-100 bg-gray-300 rounded-3xl animate-pulse mt-3"></div>
      </div>
      <div className="flex flex-col basis-[100%] lg:basis-[40%]">
        <div className="h-10 w-100 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="h-6 w-[90%] bg-gray-300 rounded-lg animate-pulse mt-8"></div>
        <div className="h-6 w-[80%] bg-gray-300 rounded-lg animate-pulse mt-3"></div>
        <div className="h-6 w-[60%] bg-gray-300 rounded-lg animate-pulse mt-3"></div>
        <div className="h-6 w-[70%] bg-gray-300 rounded-lg animate-pulse mt-3"></div>
      </div>
    </div>
  );
};

export default SectionContentPlaceholder;
