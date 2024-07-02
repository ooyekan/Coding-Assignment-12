export interface DropdownProps {
    disabled? : boolean;
    options: string[];
    onSelect: (option: string) => void;
    hidden?: boolean;
    backgroundColor?: string;
    'data-testid'?: string;
  }
  