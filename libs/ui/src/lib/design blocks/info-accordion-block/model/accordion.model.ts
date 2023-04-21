export interface AccordionElement {
  title: string;
  content: string;
}

export interface Accordion {
  subtitle: string;
  title: string;
  elements: AccordionElement[];
  image: string;
  rtl?: boolean;
  colors?: {
    background: string;
    elements: string;
  };
}
