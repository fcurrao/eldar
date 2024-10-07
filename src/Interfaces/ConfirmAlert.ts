export  interface ConfirmAlert{
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  titleToConf: string;  
}