import styled from "styled-components";
import { LightProps } from "../types/Light";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const Separator=styled.div<LightProps>`
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