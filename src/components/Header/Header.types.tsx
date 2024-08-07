export interface HeaderProps {
    title: string;
    subtitle?: string;
    disabled? : boolean;
    backgroundColor?: string;
    hidden?: boolean;
    'data-testid'?: string;
    onClick?: () => void;
  };
  