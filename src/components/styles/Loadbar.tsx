import styled from "styled-components";
import { LightProps } from "../types/Light";
import { LoadbarProps } from "../types/Loadbar";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const LoadbarContainer=styled.div<LightProps & LoadbarProps>`
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
export const LoadbarFill=styled.div<LightProps & LoadbarProps>`
width:95%;
height:90%;
background-color:black;
align-items:center;
display:flex;
padding-left:2px;
padding-right:2px;
border-radius: ${(props) => props.$rounded  ? 100: 0}px

`
export const LoadbarContent=styled.div<LightProps & LoadbarProps>`
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