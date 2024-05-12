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
  $fontsize?:string;
  $fontColor?:string;
  $textAlign?:string;
}

interface DivProps {
  $contentAlignX?:string;
  $contentAlignY?:string;
}

interface ButtonProps{
  onClick?: () => void;
  $margin?:string;
}

interface SliderProps{
  min?:number,
  max?:number,
  step?:number,
  value?:number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  $roundedSelector?:boolean,
}

interface LoadbarProps{
$loadValue?:number,
}

interface InputProps{
  type?:string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  value?:string,
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
min-height: ${(props) => props.$height ?? "30px"};
min-width: ${(props) => props.$width ?? "100px"};
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

const SliderContainer=styled.div<LightProps & SliderProps>`

width: ${(props)=>props.$width ?? "300px"};
height: ${(props)=>props.$height ?? "20px"};
padding:2px;
position:relative;
border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};

animation: ColorSlide ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorSlide {
    
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
`
const Slider=styled.input<LightProps & SliderProps>`
-webkit-appearance:none;
appearance: none;
margin:1px;
border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};

width: 99%;
height: 85%;
background: black;
outline: none;
opacity: 1;
-webkit-transition: 0.2s;
transition: opacity 0.2s;
cursor: pointer;

 @keyframes ColorSlideSelect {
    
  0% {
    background-image: radial-gradient(var(--color1), black, var(--color2), black, var(--color3),var(--color3),var(--color3));


  }
  50% {
    background-image: radial-gradient(var(--color3), black, var(--color1), black, var(--color2),var(--color2),var(--color2));

  }

  
  100% {
    background-image: radial-gradient(var(--color2), black, var(--color3), black, var(--color1),var(--color1),var(--color1));

  }}

&::-webkit-slider-thumb {
 
  appearance: none;
  background-origin: border-box;
  background-clip: content-box, border-box;
  height:3em;
  width:3em;
  border: none;
  border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};
  background-image: radial-gradient(var(--color1), black, var(--color2), black, var(--color3),var(--color3),var(--color3));

  animation: ColorSlideSelect 5s infinite linear;
  

}

&::-moz-range-thumb {
  background-origin: border-box;
  background-clip: content-box, border-box;
  height:3em;
  width:3em;
  border:none;
  border-radius: ${(props)=>props.$roundedSelector ? "100px" : "0px"};
  animation: ColorSlideSelect 5s infinite reverse;
}


`

const TextDiv=styled.div<LightProps>`

padding:0px;
position:relative;
margin:0px;

`
const TextContent=styled.button<LightProps>`
border:none;
cursor:default;
padding:0px;
margin:0px;
position:relative;
font-size:${(props)=>props.$fontsize ?? "25px"};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ColorText ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorText {
    
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



`

const LoadbarContainer=styled.div<LightProps & LoadbarProps>`
height:${(props)=>props.$height ?? "25px"};
width:${(props)=>props.$width ?? "300px"};

justify-content:center;
align-items:center;
display:flex;
border-radius: ${(props) => props.$rounded  ? 100: 0}px;

animation: ColorLoad ${(props) => props.$speed ?? "1s"} infinite linear;
@keyframes ColorLoad {

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
`
const LoaderFill=styled.div<LightProps & LoadbarProps>`
width:95%;
height:90%;
background-color:black;
align-items:center;
display:flex;
padding-left:2px;
padding-right:2px;
border-radius: ${(props) => props.$rounded  ? 100: 0}px

`
const LoadbarContent=styled.div<LightProps & LoadbarProps>`
height:80%;

width:${(props)=>props.$loadValue ?? 0}%;
border-radius: ${(props) => props.$rounded  ? 100: 0}px;

animation: ColorLoad ${(props) => props.$speed ?? "1s"} infinite linear;
@keyframes ColorLoad {

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
`

const InputContainer=styled.div<LightProps & InputProps>`
height: ${(props) => props.$height ?? "40px"};
width: ${(props) => props.$width ?? "200px"};


padding:0px;
  position: relative;
  :hover {
    cursor:text;
  }
`
const InputBorder=styled.div<LightProps & InputProps>`
height:100%;
z-index:1;
margin:0px;
padding:1px;
width:100%;
justify-content:center;
align-items:center;
display:flex;
position:absolute;

`
const InputContent=styled.input<LightProps & InputProps>`
width:100%;
height:80%;
margin:0px;
text-align:${(props)=>props.$textAlign ?? "center"};
font-size:${(props)=>props.$fontsize ?? "1em"};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ColorInput ${(props) => props.$speed ?? "2s"} infinite linear;
  @keyframes ColorInput {
    
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
    
    <ButtonContainer onClick={props.onClick} {...props} style={cssVariables}>
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

export const LightSlider: React.FC< LightProps & SliderProps > = ({
  
   ...props
 }) => {
   const cssVariables = {
     '--color1': props.$color1 ?? "hotpink",
     '--color2': props.$color2 ?? "cyan",
     '--color3': props.$color3 ?? "lime"
   } as React.CSSProperties

   return (
    <SliderContainer  style={cssVariables} {...props}>
      <Slider type="range" onChange={props.onChange}value={props.value}step={props.step} min={props.min} max={props.max} {...props}></Slider>
 
   
   </SliderContainer>
    
   );
};

export const LightText: React.FC< { children: ReactNode } & LightProps > = ({
  children,
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
   <TextDiv {...props}>
    <TextContent style={cssVariables} {...props}>{children}</TextContent>
   </TextDiv>
   
  );
};

export const LightLoadbar: React.FC< LightProps & LoadbarProps > = ({
 
  ...props
}) => {
  const cssVariables = {
    '--color1': props.$color1 ?? "hotpink",
    '--color2': props.$color2 ?? "cyan",
    '--color3': props.$color3 ?? "lime"
  } as React.CSSProperties

  return (
   <LoadbarContainer style={cssVariables} {...props}>

    <LoaderFill {...props}>
      
    <LoadbarContent {...props} />
    </LoaderFill>
   </LoadbarContainer>
   
  );
};

export const LightInput: React.FC<LightProps & InputProps > = ({
  
   ...props
 }) => {
   const cssVariables = {
     '--color1': props.$color1 ?? "hotpink",
     '--color2': props.$color2 ?? "cyan",
     '--color3': props.$color3 ?? "lime"
   } as React.CSSProperties
 
   return (
     
     <InputContainer {...props} style={cssVariables}>
      <InputBorder {...props}>
       <InputContent type={props.type} value={props.value} onChange={props.onChange} placeholder="..."{...props}/> 
       <Top {...props} />
       <Left {...props} />
    
       <Right {...props} />
       
       <Bottom {...props} />
      
       </InputBorder>
     
     </InputContainer>
     
    
   );
 };