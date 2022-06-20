export interface ContentProps<T> {
  examination?: T;
  creativeSolution?: T;
  professionalTeam?: T;
}
export type SectionContentType = {
  image?: string;
  title?: string;
  desc?: string;
  cta?: {
    title?: string;
    url?: string;
  };
};
