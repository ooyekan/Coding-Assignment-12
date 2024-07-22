export interface MyTextProps {
    disabled?: boolean;
    text?: string;
    bold?: boolean;
    hidden?: boolean;
    backgroundColor?: string;
    'data-testid'?: string;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
  }
  