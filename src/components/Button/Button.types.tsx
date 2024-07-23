export interface MyButtonProps {
    disabled?: boolean;
    label?: string;
    hidden?: boolean;
    backgroundColor?: string;
    'data-testid'?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}