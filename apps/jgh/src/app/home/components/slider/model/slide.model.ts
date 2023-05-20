export interface Slide {
  thumb: {
    src: string;
    tags: string[];
    fit?: 'cover' | 'contain';
    posX?: 'center' | 'left' | 'right';
    posY?: 'center' | 'top' | 'bottom';
    textColor?: 'light' | 'dark';
    backgroundColor?: string | 'transparent';
  };
  image: {
    src: string;
    fit?: 'cover' | 'contain';
    posX?: 'center' | 'left' | 'right';
    posY?: 'center' | 'top' | 'bottom';
    backgroundColor?: string | 'transparent';
    overlayIntensity?: 'light' | 'dark';
  };
  title: string;
  subtitle: string;
  href: string;
}
