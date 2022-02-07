import React from 'react'
import { AlertSummaryProps } from './Alert.types';
import './AlertSummary.scss';

const AlertSummary = ({ summaryData }: AlertSummaryProps) => {

    const scrollToFocus = (elementId: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        const element = document.querySelector(elementId) as HTMLElement;
        const parent = element?.parentElement;
        if (element !== null) {
            parent?.scrollIntoView({ block: 'center' });
            element.focus({ preventScroll: true });
        }
    };

    return (
        summaryData && (
            <>
                <ul className='alert--summary'>
                    {summaryData.map((item, index) => {
                        return (
                            <li
                                className='alert-summary--link'
                                key={`${item.text}-${index}`}
                            >
                                <a
                                    className='alert-summary--link-text'
                                    href={item.link}
                                    onClick={scrollToFocus(item.link)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </>
        )
    )
}

export default AlertSummary;