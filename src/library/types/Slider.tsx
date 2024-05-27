export interface SliderProps{
    min?:number,
    max?:number,
    step?:number,
    value?:number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    $roundedSelector?:boolean,
    $slideCenterHeight?:string,
    $slideCenterWidth?:string
  };