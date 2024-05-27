import styled from "styled-components";
import { LightProps } from "../types/Light";
import { ButtonProps } from "../types/Button";
import { SelectProps } from "../types/Select";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const SelectContainer= styled.div<LightProps>`
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
export const SelectButton= styled.button<LightProps & ButtonProps>`
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
export const SelectDropdown= styled.div<LightProps & SelectProps>`
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
export const SelectDiv=styled.div<LightProps>`
width:100%;
background-color:${(props)=>props.$contentColor ?? "black"};
margin-top:5px;

`
export const SelectOption= styled.button<LightProps & ButtonProps>`
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
export const SelectScroll=styled.div<LightProps & SelectProps>`
width:100%;
max-height:${(props)=>props.$maxDropHeight ?? "250px"};
overflow:scroll;

margin-top:0px;

`