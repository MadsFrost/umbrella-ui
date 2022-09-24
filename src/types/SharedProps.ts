import React from "react";

export interface SharedProps<T> {
    style: React.CSSProperties;
    className: T
}