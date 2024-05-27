import styled from "styled-components";
import { LightProps } from "../types/Light";


export const Image=styled.img<LightProps>`
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