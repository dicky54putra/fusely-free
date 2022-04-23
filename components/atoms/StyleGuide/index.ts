const typographyClass = (props?: string) => {
  const data = {
    h1: [
      "sm:text-h1 sm:leading-h1 font-serif text-h1sm font-bold leading-h1sm",
      props,
    ].join(" "),
    h2: [
      "sm:text-h2 sm:leading-h2 font-serif text-h2sm font-bold leading-h2sm",
      props,
    ].join(" "),
    h3: ["font-serif text-h3 font-bold leading-h3", props].join(" "),
    h4: ["font-serif text-h4 font-bold leading-h4", props].join(" "),
    h5: ["font-serif text-h5 font-bold leading-h5", props].join(" "),
    h6: ["font-serif text-h6 font-bold leading-h6", props].join(" "),
    body1: ["font-sans text-body1 font-normal leading-body-1", props].join(" "),
    body2: ["font-sans text-body2 font-normal leading-body-2", props].join(" "),
    body3: ["font-sans text-body3 font-normal leading-body-3", props].join(" "),
    body4: ["font-sans text-body2 font-semibold leading-body-4", props].join(
      " ",
    ),
  };
  return data;
};

const buttonClass = (variant?: string, size?: string) => {
  const data = {
    primary:
      "rounded-sm py-4 px-8 bg-primary-500 text-[14px] text-white font-bold font-sans box-border border border-primary-500",
    outlined:
      "rounded-sm py-4 px-8 bg-transparent text-[14px] text-primary-500 font-bold font-sans box-border border border-primary-500",
    white:
      "rounded-sm py-4 px-8 bg-transparent text-[14px] text-primary-500 font-bold font-sans box-border border border-white",
  };
  return data;
};

export { typographyClass, buttonClass };
