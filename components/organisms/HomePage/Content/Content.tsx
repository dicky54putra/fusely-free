import SectionContent from "components/molecules/SectionContent";
import React from "react";
import type { ContentProps, SectionContentType } from "./ContentType";

const Content = (props: ContentProps<SectionContentType>) => {
  const { examination, creativeSolution, professionalTeam } = props;

  return (
    <>
      <SectionContent
        title={examination?.title}
        desc={examination?.desc}
        href={examination?.cta?.url}
        image={examination?.image}
      />
      <SectionContent
        title={creativeSolution?.title}
        desc={creativeSolution?.desc}
        href={creativeSolution?.cta?.url}
        image={creativeSolution?.image}
        isReserve
      />
      <SectionContent
        title={professionalTeam?.title}
        desc={professionalTeam?.desc}
        href={professionalTeam?.cta?.url}
        image={professionalTeam?.image}
      />
    </>
  );
};

export default Content;
