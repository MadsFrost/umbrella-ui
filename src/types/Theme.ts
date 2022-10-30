import { PartialRecord } from './index';
export interface Theme {
    [key: string]: PartialRecord<string | number, string>;
} 