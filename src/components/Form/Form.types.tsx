export interface FormProps {
    initialName?: string;
    initialEmail?: string;
    onSubmit?: (values: { name: string; email: string; enquiry: string;}) => void;
    initialEnquiry?: string; 
  }