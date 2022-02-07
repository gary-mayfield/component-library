import React, { PropsWithChildren } from 'react'
import { AlertProps } from './Alert.types';
import AlertSummary from './AlertSummary';
import classNames from 'classnames';
import './Alert.scss';

const Alert = ({
    summaryData,
    description,
    header,
    style,
    children,
    show = true,
}: PropsWithChildren<AlertProps>) => {

    if (!show) return null;

    const hasContent = !!(summaryData?.length || description || children);

    const headerClasses = classNames('alert--header', { 'alert--header--with--content': hasContent }, { 'alert--header--standalone': !hasContent });

    return (
        <div
            aria-labelledby='alert-heading'
            className={classNames('alert', `alert--${style}`)}
            role='alert'
            tabIndex={-1}
        >
            <span id='alert-heading' className={headerClasses}>
                {header}
            </span>
            {hasContent && (
                <div className='alert--content'>
                    {description && description}
                    {summaryData && <AlertSummary summaryData={summaryData} />}
                    {children && children}
                </div>
            )}
        </div>
    )
}

export default Alert;