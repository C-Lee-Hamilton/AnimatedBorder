import React, { ReactNode } from "react";
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
}

interface DivProps {
  $contentAlignX?:string;
  $contentAlignY?:string;
}
interface ButtonProps{
$fontsize?:string;
$onClick?: () => void;

}
interface SliderProps{
  
  $value?:number,
}
const DivContainer = styled.div<LightProps>`
  
  position: relative;
  
  height: ${(props) => props.$height ?? "100%"};
  width: ${(props) => props.$width ?? "100%"};
`;
const DivContent = styled.div<LightProps>`
  position: absolute;
 padding:0px;
  top: ${(props) => props.$borderWidth ? props.$borderWidth-2:  8}px;
  bottom: ${(props) => props.$borderWidth ? props.$borderWidth-2:  8}px;
  left: ${(props) => props.$borderWidth ? props.$borderWidth-2:  8}px;
  right: ${(props) => props.$borderWidth ? props.$borderWidth-2:  8}px;
  z-index: 2;

  border: ${(props) => props.$contentColor ?? "black"} 1px solid;
  border-radius: ${(props) =>
    props.$rounded ? 5 : 0}px;
  background-color: ${(props) => props.$contentColor ?? "black"};
`;

const DivCenter=styled.div<DivProps>`
height:100%;
width:100%;
margin:auto;
justify-content: ${(props)=>props.$contentAlignX ?? "none"};
align-items:${(props)=>props.$contentAlignY ?? "none"} ;
display: flex;
`
const ButtonContainer = styled.div<LightProps & ButtonProps >`
height: ${(props) => props.$height ?? "30px"};
width: ${(props) => props.$width ?? "100px"};
font-size:${(props)=>props.$fontsize ?? "1em"};

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
const ButtonContent=styled.div<LightProps> `
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

background-color: ${(props) => props.$contentColor ?? "black"};


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
  height: ${(props) => props.$borderWidth ?? 4}px;
  animation: ColorBottom ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 0 ${(props) => props.$rounded ? 100 : 0}px
    ${(props) => props.$rounded ? 100 : 0}px;
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
    <DivContainer {...props} style={cssVariables}>
      <Top {...props} />
      <Left {...props} />
      <DivContent {...props}><DivCenter {...props}>{children}</DivCenter></DivContent>
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
    
    <ButtonContainer onClick={props.$onClick} {...props} style={cssVariables}>
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