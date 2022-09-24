export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };
export * from './SharedProps';
export * from './Theme';
export * from './Colors';