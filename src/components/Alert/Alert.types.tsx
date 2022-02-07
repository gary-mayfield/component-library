export interface AlertProps {
    header: string,
    summaryData?: Link[];
    description?: string;
    style: AlertStyles;
    show?: boolean;
}

export type AlertStyles = 'error' | 'info' | 'success' | 'warning';

export interface Link {
    link: string;
    text: string;
}

export interface AlertSummaryProps {
    summaryData: Link[];
}