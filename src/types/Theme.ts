import { Color, TailwindColorShade } from './Colors';
import { PartialRecord } from './index';
export interface Theme {
    [key: string]: PartialRecord<TailwindColorShade, Color>;
} 