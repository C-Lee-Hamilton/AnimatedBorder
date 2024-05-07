import React, { ReactNode } from "react";
import styled from 'styled-components';

interface LightProps{
 $height?:string;
 $width?:string;
 $borderWidth?:number;
 $borderRadius?:number;
 $speed?:string;
 $contentColor?:string;
 $color1?:string;
 $color2?:string;
 $color3?:string;
}

const Container=styled.div<LightProps>`
    position: relative;
    height: ${(props)=> props.$height ?? "100%"};  
    width:${(props)=>props.$width ?? "100%"};
`;
const Top=styled.div<LightProps>`
position: absolute;
top: 0;
left: 0;
right: 0;
height: ${(props)=>props.$borderWidth ?? 10}px;
border-radius:${(props)=>props.$borderRadius ?? 0}px ${(props)=>props.$borderRadius ?? 0}px 0 0;

animation: ColorTop ${(props)=>props.$speed ?? "1s"} infinite linear;
@keyframes ColorTop {
0% {
    background-image: linear-gradient(
      to right,
      ${props=>props.$color1 ?? "hotpink"},
      ${props=>props.$color2 ?? "cyan"},
      ${props=>props.$color2 ?? "cyan"},
      ${props=>props.$color3 ?? "lime"},
      ${props=>props.$color3 ?? "lime"},
      ${props=>props.$color1 ?? "hotpink"}
    );
  }
  20% {
    background-image: linear-gradient(
      to right,
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color2 ?? "cyan"},
      ${(props)=>props.$color2 ?? "cyan"},
     ${(props)=>props.$color3 ?? "lime"},
     ${(props)=>props.$color3 ?? "lime"}
    );
  }
  40% {
    background-image: linear-gradient(
      to right,
     ${(props)=>props.$color3 ?? "lime"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color2 ?? "cyan"},
      ${(props)=>props.$color2 ?? "cyan"},
     ${(props)=>props.$color3 ?? "lime"}
    );
  }
  60% {
    background-image: linear-gradient(
      to right,
     ${(props)=>props.$color3 ?? "lime"},
     ${(props)=>props.$color3 ?? "lime"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color2 ?? "cyan"},
      ${(props)=>props.$color2 ?? "cyan"}
    );
  }
  80% {
    background-image: linear-gradient(
      to right,
      ${(props)=>props.$color2 ?? "cyan"},
     ${(props)=>props.$color3 ?? "lime"},
     ${(props)=>props.$color3 ?? "lime"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color2 ?? "cyan"}
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      ${(props)=>props.$color2 ?? "cyan"},
      ${(props)=>props.$color2 ?? "cyan"},
     ${(props)=>props.$color3 ?? "lime"},
     ${(props)=>props.$color3 ?? "lime"},
      ${(props)=>props.$color1 ?? "hotpink"},
      ${(props)=>props.$color1 ?? "hotpink"}
    );
  }
}

`;
const Left=styled.div<LightProps>`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props)=>props.$borderWidth ?? 10}px;
  border-radius:${(props)=>props.$borderRadius ?? 0}px 0 0px ${(props)=>props.$borderRadius ?? 0}px;
  animation: ColorLeft ${(props)=>props.$speed ?? "1s"} linear infinite;
@keyframes ColorLeft {
    0% {
        background-image: linear-gradient(${(props)=>props.$color1 ?? "hotpink"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color1 ?? "hotpink"});
      }
      20% {
        background-image: linear-gradient(${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"});
      }
      40% {
        background-image: linear-gradient(${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"},${(props)=>props.$color3 ?? "lime"});
      }
      60% {
        background-image: linear-gradient(${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"});
      }
      80% {
        background-image: linear-gradient(${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color2 ?? "cyan"});
      }
      100% {
        background-image: linear-gradient(${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"});
      }


}

`;
const Content= styled.div<LightProps>`
    position:absolute;
    top: ${(props)=>props.$borderWidth ?? 10}px; 
    bottom:${(props)=>props.$borderWidth ?? 10}px;
    left:${(props)=>props.$borderWidth ?? 10}px;
    right:${(props)=>props.$borderWidth ?? 10}px;
    z-index:1;
    border: ${(props)=>props.$contentColor ?? "black"} 1px solid;
    border-radius:${(props)=>(props.$borderRadius ? props.$borderRadius / 2 : 0)}px;
    background-color:${(props)=>props.$contentColor ?? "black"} ;
`;
const Right=styled.div<LightProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: ${(props)=>props.$borderWidth ?? 10}px;
    animation: ColorRight ${(props)=>props.$speed ?? "1s"} linear infinite;
    border-radius:0 ${(props)=>props.$borderRadius ?? 0}px ${(props)=>props.$borderRadius ?? 0}px 0 ;
@keyframes ColorRight{
    0% {
        background-image: linear-gradient(${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color1 ?? "hotpink"});
      }
      20% {
        background-image: linear-gradient(${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"});
      }
      40% {
        background-image: linear-gradient(${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"},${(props)=>props.$color3 ?? "lime"});
      }
      60% {
        background-image: linear-gradient(${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"});
      }
      80% {
        background-image: linear-gradient(${(props)=>props.$color2 ?? "cyan"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color2 ?? "cyan"});
      }
      100% {
        background-image: linear-gradient(${(props)=>props.$color2 ?? "cyan"}, ${(props)=>props.$color2 ?? "cyan"},${(props)=>props.$color3 ?? "lime"},${(props)=>props.$color3 ?? "lime"}, ${(props)=>props.$color1 ?? "hotpink"}, ${(props)=>props.$color1 ?? "hotpink"});
      }
}

    `;
const Bottom=styled.div<LightProps>`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: ${(props)=>props.$borderWidth ?? 10}px;
animation: ColorBottom ${(props)=>props.$speed ?? "1s"} linear infinite;
border-radius:0 0 ${(props)=>props.$borderRadius ?? 0}px ${(props)=>props.$borderRadius ?? 0}px;
@keyframes ColorBottom {
    0% {
        background-image: linear-gradient(
          to left,
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color2 ?? "cyan"},
          ${(props)=>props.$color2 ?? "cyan"},
         ${(props)=>props.$color3 ?? "lime"},
         ${(props)=>props.$color3 ?? "lime"},
          ${(props)=>props.$color1 ?? "hotpink"}
        );
      }
      20% {
        background-image: linear-gradient(
          to left,
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color2 ?? "cyan"},
          ${(props)=>props.$color2 ?? "cyan"},
         ${(props)=>props.$color3 ?? "lime"},
         ${(props)=>props.$color3 ?? "lime"}
        );
      }
      40% {
        background-image: linear-gradient(
          to left,
         ${(props)=>props.$color3 ?? "lime"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color2 ?? "cyan"},
          ${(props)=>props.$color2 ?? "cyan"},
         ${(props)=>props.$color3 ?? "lime"}
        );
      }
      60% {
        background-image: linear-gradient(
          to left,
         ${(props)=>props.$color3 ?? "lime"},
         ${(props)=>props.$color3 ?? "lime"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color2 ?? "cyan"},
          ${(props)=>props.$color2 ?? "cyan"}
        );
      }
      80% {
        background-image: linear-gradient(
          to left,
          ${(props)=>props.$color2 ?? "cyan"},
         ${(props)=>props.$color3 ?? "lime"},
         ${(props)=>props.$color3 ?? "lime"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color2 ?? "cyan"}
        );
      }
      100% {
        background-image: linear-gradient(
          to left,
          ${(props)=>props.$color2 ?? "cyan"},
          ${(props)=>props.$color2 ?? "cyan"},
         ${(props)=>props.$color3 ?? "lime"},
         ${(props)=>props.$color3 ?? "lime"},
          ${(props)=>props.$color1 ?? "hotpink"},
          ${(props)=>props.$color1 ?? "hotpink"}
        );
      }
}

`;

export const LightBorder: React.FC<{ children: ReactNode } & LightProps> = ({
  children, ...props
}) => {
   
  return (
    <Container {...props}>
      <Top {...props}/>
      <Left {...props}/>
      <Content {...props}>{children}</Content>
      <Right {...props}/>
      <Bottom {...props}/>
    </Container>
  );
};
