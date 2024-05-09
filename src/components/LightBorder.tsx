import React, { ReactNode } from "react";
import styled from "styled-components";

interface LightProps {
  $height?: string;
  $width?: string;
  $borderWidth?: number;
  $borderRadius?: number;
  $speed?: string;
  $contentColor?: string;
  $color1?: string;
  $color2?: string;
  $color3?: string;
  $contentAlignX?:string;
  $contentAlignY?:string;
}


const Content = styled.div<LightProps>`
  position: absolute;
 padding:0px;
  top: ${(props) => props.$borderWidth ?? 8}px;
  bottom: ${(props) => props.$borderWidth ?? 8}px;
  left: ${(props) => props.$borderWidth ?? 8}px;
  right: ${(props) => props.$borderWidth ?? 8}px;
  z-index: 1;

  border: ${(props) => props.$contentColor ?? "black"} 1px solid;
  border-radius: ${(props) =>
    props.$borderRadius ? 5 : 0}px;
  background-color: ${(props) => props.$contentColor ?? "black"};
`;
const DivContainer = styled.div<LightProps>`
  
  position: relative;
  
  height: ${(props) => props.$height ?? "100%"};
  width: ${(props) => props.$width ?? "100%"};
`;

const DivCenter=styled.div<LightProps>`
height:100%;
width:100%;
margin:auto;
justify-content: ${(props)=>props.$contentAlignX ?? "none"};
align-items:${(props)=>props.$contentAlignY ?? "none"} ;
display: flex;
`
const ButtonContainer = styled.div<LightProps>`
  
  position: relative;
  :hover {
    cursor:pointer;
  }
  :active {
    transform:scale(.95);
  }

`;
const ButtonCenter=styled.div<LightProps>`
padding:10px;
height:100%;
width:100%;
justify-content:center;
align-items:center;
display:flex;
position:relative;

`
const Top = styled.div<LightProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$borderWidth ?? 10}px;
  border-radius: ${(props) => props.$borderRadius ?? 0}px
    ${(props) => props.$borderRadius ?? 0}px 0 0;

  animation: ColorTop ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorTop {
    
    0% {
      background-image: linear-gradient(
        to right,
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1)
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3)
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3)
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2)
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2)
      );
    }
    100% {
      background-image: linear-gradient(
        to right,
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1)
      );
    }
  }
`;
const Left = styled.div<LightProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => props.$borderWidth ?? 10}px;
  border-radius: ${(props) => props.$borderRadius ?? 0}px 0 0px
    ${(props) => props.$borderRadius ?? 0}px;
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
  width: ${(props) => props.$borderWidth ?? 10}px;
  animation: ColorRight ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 ${(props) => props.$borderRadius ?? 0}px
    ${(props) => props.$borderRadius ?? 0}px 0;
  @keyframes ColorRight {
    0% {
      background-image: linear-gradient(
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1)
      );
    }
    20% {
      background-image: linear-gradient(
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3)
      );
    }
    40% {
      background-image: linear-gradient(
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3)
      );
    }
    60% {
      background-image: linear-gradient(
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2)
      );
    }
    80% {
      background-image: linear-gradient(
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2)
      );
    }
    100% {
      background-image: linear-gradient(
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1)
      );
    }
  }
`;

const Bottom = styled.div<LightProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$borderWidth ?? 10}px;
  animation: ColorBottom ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 0 ${(props) => props.$borderRadius ?? 0}px
    ${(props) => props.$borderRadius ?? 0}px;
  @keyframes ColorBottom {
    0% {
      background-image: linear-gradient(
        to left,
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1)
      );
    }
    20% {
      background-image: linear-gradient(
        to left,
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3)
      );
    }
    40% {
      background-image: linear-gradient(
        to left,
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2),
        var(--color3)
      );
    }
    60% {
      background-image: linear-gradient(
        to left,
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2),
        var(--color2)
      );
    }
    80% {
      background-image: linear-gradient(
        to left,
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1),
        var(--color2)
      );
    }
    100% {
      background-image: linear-gradient(
        to left,
        var(--color2),
        var(--color2),
        var(--color3),
        var(--color3),
        var(--color1),
        var(--color1)
      );
    }
  }
`;

export const LightBorder: React.FC<{ children: ReactNode } & LightProps> = ({
  children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
    <DivContainer {...props} style={cssVariables}>
      <Top {...props} />
      <Left {...props} />
      <Content {...props}><DivCenter {...props}>{children}</DivCenter></Content>
      <Right {...props} />
      <Bottom {...props} />
    </DivContainer>
  );
};
export const LightButton: React.FC<{ children: ReactNode } & LightProps> = ({
 children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
    
    <ButtonContainer {...props} style={cssVariables}>
     <ButtonCenter>
      <Top {...props} />
      <Left {...props} />
      
      {children}
      
      <Right {...props} />
      <Bottom {...props} />
      </ButtonCenter>
    </ButtonContainer>
   
  );
};