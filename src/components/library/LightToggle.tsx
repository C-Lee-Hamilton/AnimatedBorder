import React,{useState} from "react";
import { LightProps } from "../types/Light";
import { SliderProps } from "../types/Slider";
import { SliderContainer,Slider } from "../styles/Slider";

export const LightToggle: React.FC< LightProps & SliderProps > = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime",
      '--width' :props.$width ?? "50px",
      '--height':props.$height ?? "35px",
      '--slideCenterHeight':props.$slideCenterHeight ?? "20px",
      '--slideCenterWidth':props.$slideCenterWidth ?? "40px",
     
    } as React.CSSProperties
    const [clicked,setClicked]=useState<boolean>(false);
    const clickFunction=()=>{setClicked(!clicked); props.onChange}
    return (
     <SliderContainer data-testid="light-toggle" style={cssVariables} {...props}>
       <Slider data-testid="light-toggle-click"  style={cssVariables}onClick={clickFunction} type="range" value={clicked? 1 : 0}step={1} min={0} max={1} {...props}>
       </Slider>
    
    </SliderContainer>
     
    );
  };