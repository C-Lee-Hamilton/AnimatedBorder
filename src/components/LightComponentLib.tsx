import React, { ReactNode,useState } from "react";
import styled from "styled-components";

interface LightProps{
  $height?: string;
  $width?: string;
  $borderWidth?: number;
  $rounded?: boolean;
  $speed?: string;
  $contentColor?: string;
  $color1?: string;
  $color2?: string;
  $color3?: string;
  $fontsize?:string;
  $fontColor?:string;
  $textAlign?:string;
  $outline?:boolean;
  $margin?:string;
}

interface DivProps {
  $contentAlignX?:string;
  $contentAlignY?:string;
  $insetBorderWidth?:number;
}

interface ButtonProps{
  onClick?: (event:any) => void; 
}

interface SliderProps{
  min?:number,
  max?:number,
  step?:number,
  value?:number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  $roundedSelector?:boolean,
  $slideCenterHeight?:string,
  $slideCenterWidth?:string
}

interface LoadbarProps{
  $loadValue?:number,
}

interface InputProps{
  type?:string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  value?:string;
  checked?:boolean;
  $onSubmit?: () => void;
  onClick?: () => void;
  $checkedColor?:string;
  $solidSearchButton?:boolean;
}
interface SelectProps {
  $options?: string[];
  $setState?: (value:string) => void;
  $selectsToRight?:boolean;
  $maxDropHeight?:string;
  $initialButtonText?:string;
}

interface ImageProps{
  src?:string,
}

//color
const colorVar1=`
var(--color1),
var(--color2),
var(--color2),
var(--color3),
var(--color3),
var(--color1)
`
const colorVar2=`
var(--color1),
var(--color1),
var(--color2),
var(--color2),
var(--color3),
var(--color3)
`
const colorVar3=`
var(--color3),
var(--color1),
var(--color1),
var(--color2),
var(--color2),
var(--color3)
`
const colorVar4=`
var(--color3),
var(--color3),
var(--color1),
var(--color1),
var(--color2),
var(--color2)
`
const colorVar5=`
var(--color2),
var(--color3),
var(--color3),
var(--color1),
var(--color1),
var(--color2)
`
const colorVar6=`
var(--color2),
var(--color2),
var(--color3),
var(--color3),
var(--color1),
var(--color1)
`


const DivContainer = styled.div<LightProps>`
  
  position: absolute;
  margin:${(props)=>props.$margin ?? "0px"};
  
  height: ${(props) => props.$height ?? "100%"};
  width: ${(props) => props.$width ?? "100%"};
`;
const DivContent = styled.div<LightProps &DivProps>`
  position:absolute;
  display:flex;

  
border:none;
  top: ${(props) => props.$borderWidth? props.$insetBorderWidth ? props.$borderWidth*2-1:props.$borderWidth-2:8}px;
  bottom: ${(props) => props.$borderWidth? props.$insetBorderWidth ? props.$borderWidth*2:props.$borderWidth-2:8}px;
  left: ${(props) => props.$borderWidth? props.$insetBorderWidth ? props.$borderWidth*2-1:props.$borderWidth-2:8}px;
  right:  ${(props) => props.$borderWidth? props.$insetBorderWidth ? props.$borderWidth*2:props.$borderWidth-2:8}px;
  z-index: 3;

  border-radius: ${(props) =>
    props.$rounded ? 5 : 0}px;
  background-color: ${(props) => props.$contentColor ?? "black"};
`;
const DivCenter=styled.div<DivProps>`
height:100%;
width:100%;

z-index:3;
position:relative;

justify-content: ${(props)=>props.$contentAlignX ?? "none"};
align-items:${(props)=>props.$contentAlignY ?? "none"} ;
display: flex;
`

const ButtonContainer = styled.div<LightProps & ButtonProps >`
min-height: ${(props) => props.$height ?? "30px"};
min-width: ${(props) => props.$width ?? "100px"};
font-size:${(props)=>props.$fontsize ?? "1em"};
margin:${(props)=>props.$margin ?? "0px"};
  position: relative;
  :hover {
    cursor:pointer;
  }
  :active {
    transform:scale(.95);
   
  }

`;
const Button=styled.div<LightProps >`

height:100%;
z-index:1;
width:100%;
justify-content:center;
align-items:center;
display:flex;
position:absolute;
background-color: ${(props) => props.$contentColor ?? "black"};
border-radius: ${(props)=> props.$rounded ? 10:0}px;


`
const ButtonContent=styled.div<LightProps & ButtonProps> `
justify-content:center;
align-items:center;
position:absolute;
padding:10px;
display:flex;

z-index:1;
 top: ${(props) => props.$borderWidth ? props.$borderWidth-3:  1}px;
 bottom: ${(props) => props.$borderWidth ? props.$borderWidth-3:  1}px;
 left: ${(props) => props.$borderWidth ? props.$borderWidth-3:  1}px;
 right: ${(props) => props.$borderWidth ? props.$borderWidth-3:  .75}px;
 
 border-radius: ${(props) =>
  props.$rounded ? 5 : 0}px;
  color:${(props)=>props.$fontColor ?? "black"};
  -webkit-background-clip: ${(props)=>props.$outline ? "text" : "default"};
  -webkit-text-fill-color: ${(props)=>props.$outline ? "transparent" : "solid" };
  animation: ColorButtonText ${(props) => props.$speed ?? "1.25s"} infinite linear;
  @keyframes ColorButtonText {
    
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

const SliderContainer=styled.div<LightProps & SliderProps>`
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
const Slider=styled.input<LightProps & SliderProps>`
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

const TextDiv=styled.div<LightProps>`
margin:${(props)=>props.$margin ?? "0px"};
padding:0px;
position:relative;


`
const TextContent=styled.button<LightProps & ButtonProps>`
border:none;
cursor:default;
padding:0px;
margin:${(props)=>props.$margin ?? "0px"};
position:relative;
font-size:${(props)=>props.$fontsize ?? "25px"};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ColorText ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorText {
    
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

const LoadbarContainer=styled.div<LightProps & LoadbarProps>`
height:${(props)=>props.$height ?? "25px"};
width:${(props)=>props.$width ?? "300px"};
margin:${(props)=>props.$margin ?? "0px"};
justify-content:center;
align-items:center;
display:flex;
border-radius: ${(props) => props.$rounded  ? 100: 0}px;

animation: ColorLoad ${(props) => props.$speed ?? "1s"} infinite linear;
@keyframes ColorLoad {

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
const LoadbarFill=styled.div<LightProps & LoadbarProps>`
width:95%;
height:90%;
background-color:black;
align-items:center;
display:flex;
padding-left:2px;
padding-right:2px;
border-radius: ${(props) => props.$rounded  ? 100: 0}px

`
const LoadbarContent=styled.div<LightProps & LoadbarProps>`
height:80%;

width:${(props)=>props.$loadValue ?? 0}%;
border-radius: ${(props) => props.$rounded  ? 100: 0}px;

animation: ColorLoad ${(props) => props.$speed ?? "1s"} infinite linear;
@keyframes ColorLoad {

0% {
  background-image: linear-gradient(
    to left,
    ${colorVar1}
  );
}
20% {
  background-image: linear-gradient(
    to left,
    ${colorVar2}
  );
}
40% {
  background-image: linear-gradient(
    to left,
    ${colorVar3}
  );
}
60% {
  background-image: linear-gradient(
    to left,
    ${colorVar4}
  );
}
80% {
  background-image: linear-gradient(
    to left,
    ${colorVar5}
  );
}
100% {
  background-image: linear-gradient(
    to left,
    ${colorVar6}
  );
}
`

const InputContainer=styled.div<LightProps & InputProps>`
min-height: ${(props) => props.$height ?? "40px"};
min-width: ${(props) => props.$width ?? "200px"};
background-color:${(props) => props.$contentColor ?? "black"};
border-radius: ${(props)=> props.$rounded ? 10:0}px;
margin:${(props)=>props.$margin ?? "0px"};
padding:0px;
  position: relative;

`
const InputBorder=styled.div<LightProps & InputProps>`
height:100%;
z-index:1;
margin:0px;
padding:0px;
width:100%;
justify-content:center;
align-items:center;
display:flex;
position:absolute;


`
const InputContent=styled.input<LightProps & InputProps>`
width:100%;
height:80%;
margin:0px;
text-align:${(props)=>props.$textAlign ?? "center"};
font-size:${(props)=>props.$fontsize ?? "1em"};
border:none;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ColorInput ${(props) => props.$speed ?? "2s"} infinite linear;
cursor:text;
  @keyframes ColorInput {
    
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
const InputSearchButton=styled.button<LightProps & InputProps>`
height:${(props)=>props.$height ?? "40px"};
width:${(props)=>props.$height ?? "40px"};

margin-right:${(props)=>props.$borderWidth ?? 4}px;
font-size:x-large;
border:none;

background-color:blue;
cursor:pointer;

&:hover{
filter:brightness(80%);
}
&:active{
  
 border-right:0px solid var(--color1);
 transform:translateX(5%) scale(95%);
}

color:${(props)=>props.$fontColor ?? "black"};
  -webkit-background-clip: ${(props)=>!props.$solidSearchButton ? "text" : "default"};
  -webkit-text-fill-color: ${(props)=>!props.$solidSearchButton ? "transparent" : "solid" };
  animation: ${(props)=>props.$solidSearchButton ? "ColorButtonText2" : "ColorButtonTextOutline"} ${(props) => props.$speed ?? "1.25s"} infinite linear;


  @keyframes ColorButtonText2 {
    
    0% {
      background-image:conic-gradient(var(--color1),black,var(--color2),black,var(--color3),black);
      border-left:2px solid var(--color1);
  
  
    }
    50% {
      background-image:conic-gradient(var(--color3),black,var(--color1),black,var(--color2),black);
      border-left:2px solid var(--color2);    }
  
    
    100% {
      background-image:conic-gradient(var(--color2),black,var(--color3),black,var(--color1),black);
      border-left:2px solid var(--color3);
    }
  }

    @keyframes ColorButtonTextOutline {
    
      0% {
        border-left:2px solid var(--color1);
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
      50%{      border-left:2px solid var(--color2);}
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
        border-left:2px solid var(--color3);
        background-image: linear-gradient(
          to right,
          ${colorVar6}
        );
      }
    }


`


const Checkbox = styled.label<LightProps & InputProps>`
  display: flex;
  position: relative;
  padding: 0px;
  margin:${(props)=>props.$margin ?? "0px"};
  cursor: pointer;
  font-size: 22px;
 
  
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    margin:0px;
    
  }

  .checkmark {
    position: relative;
    
    transform:translateX(0%);
    border-radius:${(props)=>props.$rounded ? "10px" : "0px"};
    height: ${(props)=>props.$height ?? "50px"};
    width: ${(props)=>props.$height ?? "50px"};
   
    background-color: ${(props)=>props.$contentColor ?? "black"};
    
  }

  &:hover input ~ .checkmark {
    filter: grayscale(10%);
    
  }

  input:checked ~ .checkmark {
    background-color:${(props)=>props.$checkedColor?? "black"};

  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  
    
  }

 
  input:checked ~ .checkmark:after {
    display: block;
  
   
  }


  .checkmark:after {
    
    left: 25%;
    top: 25%;
    width: 50%;
    height: 30%;
    border: solid var(--color1);
    border-width: 3px 3px 0 0;
    transform: rotate(135deg);
    animation: ColorCheck ${(props) => props.$speed ?? "2s"} infinite linear;
  }

  @keyframes ColorCheck {
    
    0% {
      border: solid var(--color1);
      border-width:  3px 3px 0 0;
     
    }
    50% {
     
      border: solid var(--color2);
      border-width: 3px 3px 0 0;
      );
    }
    100% {
     
      border: solid var(--color3);
      border-width:  3px 3px 0 0;
    );
  }
    



`;
const Radio = styled.label<LightProps & InputProps>`

  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 0px;
  user-select: none;
  margin:${(props)=>props.$margin ?? "0px"};
 
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

  }

 
  .checkmark {
    position: relative;
    display: flex;
    padding:0px;
    margin:0px;
    height: ${(props)=>props.$height ?? "50px"};
    width: ${(props)=>props.$width ?? "50px"};
   
    animation: Colorwheel ${(props) => props.$speed ?? "1s"} infinite linear;
    border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;

  
    
  }

 .uncheckmark{
  display: flex;
  position:absolute;
  top:7%;
  left:7%;
  width: 80%;
  height: 80%;
  border:2px black solid;
  background: white;
  border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;

 }
  &:hover input ~ .checkmark {
    filter:grayscale(20%);
  }

  
  input:checked ~ .checkmark {
    background-color: orange;
  }
  input:checked ~ .uncheckmark{
    display:none;
  }
  .checkmark:after {
    content: "";
    position: relative;
    display: none; 
  }

  input:checked ~ .checkmark:after {
    display: flex;
    margin:auto;
    width: 50%;
    height: 50%;
    border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;
    border:3px white solid;
    background: black;
  }

  
  @keyframes Colorwheel {
    
    0% {
      background-image: conic-gradient(var(--color1), var(--color2), var(--color3),var(--color1), var(--color2), var(--color3));

    }
    50% {
      background-image: conic-gradient(var(--color3), var(--color1), var(--color2),var(--color3), var(--color1), var(--color2));
    }
    100% {
      background-image: conic-gradient(var(--color2), var(--color3), var(--color1),var(--color2), var(--color3), var(--color1));
    }

`;

const SelectContainer= styled.div<LightProps>`
width:${(props)=>props.$width ?? "100px"};
position:relative;
margin:${(props)=>props.$margin ?? "0px"};
border-radius: ${(props)=> props.$rounded ? 10:0}px;
z-index:3;
display:flex;
flex-direction:column;
align-items:center;
background-color:${(props)=>props.$contentColor ?? "black"};

`
const SelectButton= styled.button<LightProps & ButtonProps>`
height:${(props)=>props.$height ?? "30px"};
width:${(props)=>props.$width ?? "100px"};
position:relative;
border-radius: ${(props)=> props.$rounded ? 10:0}px;
cursor:pointer;
border:none;

color:${(props)=>props.$fontColor ?? "black"};
-webkit-background-clip: ${(props)=>props.$outline ? "text" : "default"};
-webkit-text-fill-color: ${(props)=>props.$outline ? "transparent" : "solid" };
animation: ColorDropButtonText ${(props) => props.$speed ?? "1.25s"} infinite linear;
@keyframes ColorDropButtonText {
  
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
const SelectDropdown= styled.div<LightProps & SelectProps>`
margin-top:${(props)=>props.$height ?? "30px"};
width:90%;


position:absolute;
margin-right:${(props)=> props.$selectsToRight ? "0%" : "10%"};
margin-left:${(props)=> props.$selectsToRight ? "10%" : "0%"};
animation: ColorSelectSelect 1s infinite reverse;
@keyframes ColorSelectSelect {
    
  0% {
    background-image:conic-gradient(var(--color1),var(--color2),var(--color3));


  }
  50% {
    background-image:conic-gradient(var(--color3),var(--color1),var(--color2));
  }

  
  100% {
    background-image:conic-gradient(var(--color2),var(--color3),var(--color1));
  }
  

}

`
const SelectDiv=styled.div<LightProps>`
width:100%;
background-color:${(props)=>props.$contentColor ?? "black"};
margin-top:5px;

`
const SelectOption= styled.button<LightProps & ButtonProps>`
height:${(props)=>props.$height ?? "30px"};
width:100%;
cursor:pointer;
border-radius:0;
padding-bottom:5px;
color:${(props)=>props.$fontColor ?? "black"};
-webkit-background-clip: ${(props)=>props.$outline ? "text" : "default"};
-webkit-text-fill-color: ${(props)=>props.$outline ? "transparent" : "solid" };
animation: ColorDropText ${(props) => props.$speed ?? "1.25s"} infinite linear;
@keyframes ColorDropText {
  
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
const SelectScroll=styled.div<LightProps & SelectProps>`
width:100%;
max-height:${(props)=>props.$maxDropHeight ?? "250px"};
overflow:scroll;

margin-top:0px;

`

const Separator=styled.div<LightProps>`
position:relative;
margin:${(props)=>props.$margin ?? "0px"};
min-height:${(props)=>props.$height ?? "2px"};
min-width:${(props)=>props.$width ?? "90%"};
border-radius:100%;
animation: ColorSeparate ${(props) => props.$speed ?? "2s"} infinite linear;
@keyframes ColorSeparate {
  
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
}
}


`
const Image=styled.img<LightProps>`
height: ${(props)=>props.$height ?? "50px"};
width:  ${(props)=>props.$width?? "50px"};
position:relative;
margin:${(props)=>props.$margin ?? "0px"};

filter: drop-shadow(0px -4px 3px var(--color1)) drop-shadow(0px 4px 3px var(--color1))
  drop-shadow(0px 2px 3px var(--color2)) drop-shadow(0px -2px 3px var(--color3));

  animation: ColorImage ${(props) => props.$speed ?? "2s"} infinite linear;


  @keyframes ColorImage {
    
    0% {
      filter:drop-shadow(0px -4px 3px var(--color1)) drop-shadow(0px 4px 3px var(--color1))
      drop-shadow(0px 2px 3px var(--color2)) drop-shadow(0px -2px 3px var(--color3));
    
    }
    50% {
      filter:drop-shadow(0px -4px 3px var(--color3)) drop-shadow(0px 4px 3px var(--color3))
      drop-shadow(0px 2px 3px var(--color1)) drop-shadow(0px -2px 3px var(--color2));
    
    100% {
      filter:drop-shadow(0px -4px 3px var(--color2)) drop-shadow(0px 4px 3px var(--color2))
      drop-shadow(0px 2px 3px var(--color3)) drop-shadow(0px -2px 3px var(--color1));
    }
  }

`

const Top = styled.div<LightProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  height: ${(props) => props.$borderWidth ?? 4}px;
  border-radius: ${(props) => props.$rounded  ? 100: 0}px
    ${(props) => props.$rounded ? 100: 0}px 0 0;

  animation: ColorTop ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorTop {
    
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
  }
`;
const Left = styled.div<LightProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  
  width: ${(props) => props.$borderWidth ?? 4}px;
  border-radius: ${(props) => props.$rounded ? 100 : 0}px 0 0px
    ${(props) => props.$rounded ? 100: 0}px;
  animation: ColorLeft ${(props) => props.$speed ?? "1s"} linear infinite;
  @keyframes ColorLeft {
    0% {
      background-image: linear-gradient(
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1)
      );
    }
    20% {
      background-image: linear-gradient(
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1)
      );
    }
    40% {
      background-image: linear-gradient(
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3)
      );
    }
    60% {
      background-image: linear-gradient(
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3)
      );
    }
    80% {
      background-image: linear-gradient(
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2)
      );
    }
    100% {
      background-image: linear-gradient(
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2)
      );
    }
  }
`;
const Right = styled.div<LightProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  
  width: ${(props) => props.$borderWidth ?? 4}px;
  animation: ColorRight ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 ${(props) => props.$rounded ? 100 : 0}px
    ${(props) => props.$rounded ? 100: 0}px 0;
  @keyframes ColorRight {
    0% {
      background-image: linear-gradient(
      ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
  ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
    ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        ${colorVar6}
      );
    }
  }
`;
const Bottom = styled.div<LightProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$borderWidth ?? 4}px;
  animation: ColorBottom ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 0 ${(props) => props.$rounded ? 100 : 0}px
    ${(props) => props.$rounded ? 100 : 0}px;
  @keyframes ColorBottom {
    0% {
      background-image: linear-gradient(
        to left,
       ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
        to left,
        ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
        to left,
        ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        to left,
        ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        to left,
        ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        to left,
        ${colorVar6}
      );
    }
  }
`;




export const LightBorder: React.FC<{ children: ReactNode } & LightProps & DivProps> = ({
  children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
    <DivContainer data-testid="light-border" {...props} style={cssVariables}>
      <DivContent {...props}><DivCenter {...props}>{children}</DivCenter></DivContent>
      <Top {...props} />
      <Left {...props} />
      
      <Right {...props} />
      <Bottom {...props} />
      
    </DivContainer>
  );
};

export const LightButton: React.FC<{ children: ReactNode } & LightProps & ButtonProps > = ({
 children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
    
    <ButtonContainer data-testid="light-button" onClick={props.onClick} {...props} style={cssVariables}>
     <Button {...props}>
     <ButtonContent {...props}>
      {children}
      </ButtonContent>
      <Top {...props} />
      <Left {...props} />
   
      <Right {...props} />
      
      <Bottom {...props} />
     
      </Button>
    
    </ButtonContainer>
    
   
  );
};

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

export const LightText: React.FC< { children: ReactNode } & LightProps &ButtonProps > = ({
  children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
   <TextDiv data-testid="light-text" style={cssVariables}  {...props}>
    <TextContent style={cssVariables} {...props}>{children}</TextContent>
   </TextDiv>
   
  );
};

export const LightLoadbar: React.FC< LightProps & LoadbarProps > = ({
 
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
   <LoadbarContainer data-testid="light-loadbar" style={cssVariables} {...props}>

    <LoadbarFill {...props}>
      
    <LoadbarContent {...props} />
    </LoadbarFill>
   </LoadbarContainer>
   
  );
};

export const LightInput: React.FC<LightProps & InputProps > = ({
  
   ...props
 }) => {
   const cssVariables = {
     '--color1': props.$color1 ?? "hotpink",
     '--color2': props.$color2 ?? "cyan",
     '--color3': props.$color3 ?? "lime"
   } as React.CSSProperties
 
   return (
     
     <InputContainer data-testid="light-input" {...props} style={cssVariables}>
      <InputBorder {...props}>
       <InputContent type={props.type} value={props.value} onChange={props.onChange} placeholder="..."{...props}/> 
       <Top {...props} />
       <Left {...props} />
    
       <Right {...props} />
       
       <Bottom {...props} />
      
       </InputBorder>
     
     </InputContainer>
     
    
   );
};

export const LightInputWithSearch: React.FC<LightProps & InputProps > = ({
  
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
    
    <InputContainer data-testid="light-search" {...props} style={cssVariables}>
     <InputBorder {...props}>
      <InputContent type={props.type} value={props.value} onChange={props.onChange} placeholder="..."{...props}/> 
      <InputSearchButton data-testid="light-search-button"  {...props} onClick={props.$onSubmit}>&#x1F50E;</InputSearchButton>
      <Top {...props} />
      <Left {...props} />
   
      <Right {...props} />
      
      <Bottom {...props} />
     
      </InputBorder>
    
    </InputContainer>
    
   
  );
};

export const LightCheck: React.FC<LightProps & InputProps > = ({
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime",
  } as React.CSSProperties
  return(
<Checkbox data-testid="light-check" style={cssVariables} {...props}>
  <input data-testid="light-check-click"   checked={props.checked} onClick={props.onClick}type="checkbox"/>
  <span  className="checkmark">
  <Top  {...props}/>
  <Bottom  {...props}/>
  <Left  {...props}/>
  <Right  {...props}/>
  </span>
</Checkbox>
  );
};

export const LightRadio: React.FC<LightProps & InputProps > = ({
  
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties
  return(
<Radio data-testid="light-radio"  style={cssVariables} {...props}>
  <input data-testid="light-radio-click"   checked={props.checked} onClick={props.onClick}type="checkbox"/>
  <span  className="checkmark"></span>
  <span   className="uncheckmark"></span>
</Radio>
  );
};

export const LightSelect: React.FC<   LightProps & SelectProps & ButtonProps > = ({ 
  
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties
const selectArray:string[]=props.$options || [];
const [val,setVal]=useState<string>("null");
const [active,setActive]=useState<boolean>(false);
const selectClick= (e: React.MouseEvent<HTMLButtonElement>) =>{
  setVal(e.currentTarget.name);
  props.$setState && props.$setState(e.currentTarget.name);
};
  return (
  
    <SelectContainer data-testid="light-select" style={cssVariables} {...props}>
      <SelectButton {...props} onClick={()=>setActive(!active)}>{val==="null" ? props.$initialButtonText : val}  <Top {...props}/><Bottom {...props}/><Right {...props}/><Left {...props}/></SelectButton>
      
      <SelectDropdown {...props} onClick={()=>setActive(!active)}  style={{visibility:`${active ? "visible": "hidden"}`}}>
      <Bottom/><Right/><Left/>
      <SelectScroll >
      {selectArray.map((option) => (
        <SelectDiv>
          <SelectOption {...props} key={option} name={option} onClick={(e:any)=>selectClick(e)}>
           
            {option}
         
          </SelectOption>
        </SelectDiv>
        ))}
      </SelectScroll>
      </SelectDropdown>
      
      </SelectContainer>
  
   
  );
};

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

export const LightSeparator: React.FC< LightProps> = ({
  
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime",
   
   
  } as React.CSSProperties
 
  return (
<Separator data-testid="light-separator" style={cssVariables} {...props}/>
   
  );
};

export const LightImage: React.FC< LightProps & ImageProps> = ({
  
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime",
   
   
  } as React.CSSProperties
 
  return (
<Image data-testid="light-image" alt=" " src={props.src}  style={cssVariables} {...props}/>
   
  );
};
