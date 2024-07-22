export interface FormProps {
    initialName?: string;
    initialEmail?: string;
    onSubmit?: (values: { name: string; email: string }) => void;
  }