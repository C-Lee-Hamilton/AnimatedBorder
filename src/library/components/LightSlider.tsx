import { LightProps } from "../types/Light";
import { SliderProps } from "../types/Slider";
import { SliderContainer,Slider } from "../styles/Slider";

export const LightSlider: React.FC< LightProps & SliderProps > = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime",
      '--width' :props.$width ?? "300px",
      '--height':props.$height ?? "20px",
      '--slideCenterHeight':props.$slideCenterHeight ?? "3em",
      '--slideCenterWidth':props.$slideCenterWidth ?? "3em",
     
    } as React.CSSProperties
 
    return (
     <SliderContainer data-testid="light-slider"  style={cssVariables} {...props}>
       <Slider style={cssVariables} type="range" onChange={props.onChange}value={props.value}step={props.step} min={props.min} max={props.max} {...props}>
 
         
       </Slider>
    
    </SliderContainer>
     
    );
 };
 