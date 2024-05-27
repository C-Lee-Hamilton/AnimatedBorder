import styled from "styled-components";
import { LightProps } from "../types/Light";
import { SliderProps } from "../types/Slider";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const SliderContainer=styled.div<LightProps & SliderProps>`
height:var(--height);
width:var(--width);
margin:${(props)=>props.$margin ?? "0px"};
padding:2px;
position:relative;
border-radius: ${(props)=>props.$rounded ? "100px" : "0px"};
display:flex;
align-items:center;
justify-content:center;
animation: ColorSlide ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorSlide {
    
    0% {
      background-image: linear-gradient(
        to right,
        ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
        ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
        ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
        ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        to right,
        ${colorVar6}
      );
    }
`
export const Slider=styled.input<LightProps & SliderProps>`
-webkit-appearance:none;
appearance: none;
margin:1px;
border-radius: ${(props)=>props.$rounded ? "100px" : "0px"};

width: 99%;
height: 85%;
background: black;
outline: none;
opacity: 1;
-webkit-transition: 0.2s;
transition: opacity 0.2s;
cursor: pointer;

 @keyframes ColorSlideSelect {
    
  0% {
    background-image:conic-gradient(var(--color1),black,var(--color2),black,var(--color3),black);
    border:2px ridge var(--color2);


  }
  50% {
    background-image:conic-gradient(var(--color3),black,var(--color1),black,var(--color2),black);
    border:2px ridge var(--color1);
  }

  
  100% {
    background-image:conic-gradient(var(--color2),black,var(--color3),black,var(--color1),black);
    border:2px ridge var(--color3);
  }
  

}

&::-webkit-slider-thumb {
 
  appearance: none;
  background-origin: border-box;
  background-clip: content-box, border-box;
  height:var(--slideCenterHeight);
  width:var(--slideCenterWidth);
 
  border: none;
  border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};
  background-image:conic-gradient(var(--color1),black,var(--color2),black,var(--color3),black);
  animation: ColorSlideSelect 1s infinite linear;
  

}

&::-moz-range-thumb {
  background-origin: border-box;
  background-clip: content-box, border-box;
  height:var(--slideCenterHeight);
  width:var(--slideCenterWidth);

  border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};
  animation: ColorSlideSelect 1s infinite reverse;
 

}


`