export interface SelectProps {
    $options?: string[];
    $setState?: (value:string) => void;
    $selectsToRight?:boolean;
    $maxDropHeight?:string;
    $initialButtonText?:string;
  };