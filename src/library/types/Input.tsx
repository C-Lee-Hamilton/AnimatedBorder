export interface InputProps{
    type?:string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    value?:string;
    checked?:boolean;
    $onSubmit?: () => void;
    onClick?: () => void;
    $checkedColor?:string;
    $solidSearchButton?:boolean;
  };