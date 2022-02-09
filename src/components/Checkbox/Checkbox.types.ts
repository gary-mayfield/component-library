import React from "react";

export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    errorMessage?: string;
    id: string;
    inputRef?: (ref: HTMLInputElement | null) => void;
    label: string;
    name: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    showError?: boolean;
    value?: string;
    checkboxStyle: 'light'|'dark'
}