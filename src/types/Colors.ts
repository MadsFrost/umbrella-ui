export enum TailwindColorBase { 
    ROSE = 'rose',
    PINK = 'pink',
    FUCHSIA = 'fuchsia',
    PURPLE = 'purple',
    VIOLET = 'violet',
    INDIGO = 'indigo',
    BLUE = 'blue',
    SKY =  'sky',
    CYAN = 'cyan',
    TEAL = 'teal',
    EMERALD = 'emerald',
    GREEN = 'green',
    LIME = 'lime',
    YELLOW = 'amber',
    ORANGE = 'orange',
    RED = 'red',
    STONE = 'stone',
    NEUTRAL = 'neutral',
    ZINC = 'zinc',
    GRAY = 'gray',
    SLATE = 'slate'
}
export type TailwindColorShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TailwindColor = `${TailwindColorBase}-${TailwindColorShade}`;
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = TailwindColor | RGB | RGBA | HEX;