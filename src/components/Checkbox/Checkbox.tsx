import React, { useState } from 'react'
import { CheckboxProps } from './Checkbox.types';
import './Checkbox.scss';

const Checkbox = ({ checked, errorMessage, id, inputRef, label, onClick, showError, checkboxStyle, ...other }: CheckboxProps) => {
    const [showErrorMessage, setShowErrorMessage] = useState(showError);
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setShowErrorMessage(false);
        onClick && onClick(event);
    };

    return (

        <>
            <div className={`checkbox--${checkboxStyle}`}>
                <input
                    className='checkbox--input'
                    defaultChecked={checked}
                    id={id}
                    onClick={handleClick}
                    ref={inputRef}
                    type='checkbox'
                    {...other}
                />
                <label
                    className='checkbox--label'
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
        </>
    )
}

export default Checkbox;