import styled from "styled-components";
import { LightProps } from "../types/Light";
import { DivProps } from "../types/Div";


export const DivContainer = styled.div<LightProps>`
  
  position: absolute;
  margin:${(props)=>props.$margin ?? "0px"};
  
  height: ${(props) => props.$height ?? "100%"};
  width: ${(props) => props.$width ?? "100%"};
`;
export const DivContent = styled.div<LightProps &DivProps>`
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
export const DivCenter=styled.div<DivProps>`
height:100%;
width:100%;

z-index:3;
position:relative;

justify-content: ${(props)=>props.$contentAlignX ?? "none"};
align-items:${(props)=>props.$contentAlignY ?? "none"} ;
display: flex;
`