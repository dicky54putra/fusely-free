import SectionContent from "components/molecules/SectionContent";
import React from "react";

const Content = () => {
  return (
    <>
      <SectionContent
        title="Detailed Examination"
        desc="A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
        href="/"
        image="/images/detailed-illustration.svg"
      />
      <SectionContent
        title="Creative Solutions"
        desc="Creativity is our second name. We're full of inventive ideas and we're happy to present them to you."
        href="/"
        image="/images/creative-illustration.svg"
        isReserve
      />
      <SectionContent
        title="Professional Team"
        desc="Well, obviously, we're professionals. Don't hesitate - get to know us better."
        href="/"
        image="/images/professional-illustration.svg"
      />
    </>
  );
};

export default Content;
