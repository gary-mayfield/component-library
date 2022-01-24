export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonStyle?: 'light' | 'dark'
    label?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};