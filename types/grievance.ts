export interface Subsection {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  file?: string;
}

export interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

export interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}