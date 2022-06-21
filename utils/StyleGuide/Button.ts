export const ButtonClass = (className?: string) => {
  const data = {
    primary: [
      "rounded-none py-4 px-8 bg-primary-500 text-[14px] text-white font-bold font-sans box-border border border-primary-500",
      className,
    ].join(" "),
    outlined: [
      "rounded-sm py-4 px-8 bg-transparent text-[14px] text-primary-500 font-bold font-sans box-border border border-primary-500",
      className,
    ].join(" "),
    white: [
      "rounded-sm py-4 px-8 bg-transparent text-[14px] text-primary-500 font-bold font-sans box-border border border-white",
      className,
    ].join(" "),
  };
  return data;
};
