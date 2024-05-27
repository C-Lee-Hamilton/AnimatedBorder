import styled from "styled-components";
import { LightProps } from "../types/Light";
import { ButtonProps } from "../types/Button";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";

export const TextDiv=styled.div<LightProps>`
margin:${(props)=>props.$margin ?? "0px"};
padding:0px;
position:relative;


`
export const TextContent=styled.button<LightProps & ButtonProps>`
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