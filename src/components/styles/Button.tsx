import styled from "styled-components";
import { LightProps } from "../types/Light";
import { ButtonProps } from "../types/Button";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const ButtonContainer = styled.div<LightProps & ButtonProps >`
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
export const Button=styled.div<LightProps >`

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
export const ButtonContent=styled.div<LightProps & ButtonProps> `
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