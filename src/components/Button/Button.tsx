import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './Button.types';
import './Button.scss';

const Button = ({
    buttonStyle = 'light',
    label = 'Button',
    onClick,
    type='button',
    ...other
} : ButtonProps)  => {
 return (
 <button
    type={type}
    className={classnames([
        'button',
        `button--${buttonStyle}`
    ])}
    onClick={onClick && ((e) => onClick(e))}
    {...other}
 >
     {label}
 </button>
 )
 }

export default Button;