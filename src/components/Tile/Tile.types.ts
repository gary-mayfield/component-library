import React from "react";

export interface TileProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    tileStyle?: 'light' | 'dark';
    header?: string;
    description?: string;
}