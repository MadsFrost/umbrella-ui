import { Theme } from "../types";
import { defaultTheme } from "./defaultTheme";
export const extendTheme = (theme: Theme): Theme => {
    return {
        ...defaultTheme,
        ...theme
    }
};