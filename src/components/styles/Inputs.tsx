import styled from "styled-components";
import { LightProps } from "../types/Light";
import { InputProps } from "../types/Input";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "../ColorVariables";


export const InputContainer=styled.div<LightProps & InputProps>`
min-height: ${(props) => props.$height ?? "40px"};
min-width: ${(props) => props.$width ?? "200px"};
background-color:${(props) => props.$contentColor ?? "black"};
border-radius: ${(props)=> props.$rounded ? 10:0}px;
margin:${(props)=>props.$margin ?? "0px"};
padding:0px;
  position: relative;

`
export const InputBorder=styled.div<LightProps & InputProps>`
height:100%;
z-index:1;
margin:0px;
padding:0px;
width:100%;
justify-content:center;
align-items:center;
display:flex;
position:absolute;


`
export const InputContent=styled.input<LightProps & InputProps>`
width:100%;
height:80%;
margin:0px;
text-align:${(props)=>props.$textAlign ?? "center"};
font-size:${(props)=>props.$fontsize ?? "1em"};
border:none;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ColorInput ${(props) => props.$speed ?? "2s"} infinite linear;
cursor:text;
  @keyframes ColorInput {
    
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
export const InputSearchButton=styled.button<LightProps & InputProps>`
height:${(props)=>props.$height ?? "40px"};
width:${(props)=>props.$height ?? "40px"};

margin-right:${(props)=>props.$borderWidth ?? 4}px;
font-size:x-large;
border:none;

background-color:blue;
cursor:pointer;

&:hover{
filter:brightness(80%);
}
&:active{
  
 border-right:0px solid var(--color1);
 transform:translateX(5%) scale(95%);
}

color:${(props)=>props.$fontColor ?? "black"};
  -webkit-background-clip: ${(props)=>!props.$solidSearchButton ? "text" : "default"};
  -webkit-text-fill-color: ${(props)=>!props.$solidSearchButton ? "transparent" : "solid" };
  animation: ${(props)=>props.$solidSearchButton ? "ColorButtonText2" : "ColorButtonTextOutline"} ${(props) => props.$speed ?? "1.25s"} infinite linear;


  @keyframes ColorButtonText2 {
    
    0% {
      background-image:conic-gradient(var(--color1),black,var(--color2),black,var(--color3),black);
      border-left:2px solid var(--color1);
  
  
    }
    50% {
      background-image:conic-gradient(var(--color3),black,var(--color1),black,var(--color2),black);
      border-left:2px solid var(--color2);    }
  
    
    100% {
      background-image:conic-gradient(var(--color2),black,var(--color3),black,var(--color1),black);
      border-left:2px solid var(--color3);
    }
  }

    @keyframes ColorButtonTextOutline {
    
      0% {
        border-left:2px solid var(--color1);
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
      50%{      border-left:2px solid var(--color2);}
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
        border-left:2px solid var(--color3);
        background-image: linear-gradient(
          to right,
          ${colorVar6}
        );
      }
    }


`


export const Checkbox = styled.label<LightProps & InputProps>`
  display: flex;
  position: relative;
  padding: 0px;
  margin:${(props)=>props.$margin ?? "0px"};
  cursor: pointer;
  font-size: 22px;
 
  
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    margin:0px;
    
  }

  .checkmark {
    position: relative;
    
    transform:translateX(0%);
    border-radius:${(props)=>props.$rounded ? "10px" : "0px"};
    height: ${(props)=>props.$height ?? "50px"};
    width: ${(props)=>props.$height ?? "50px"};
   
    background-color: ${(props)=>props.$contentColor ?? "black"};
    
  }

  &:hover input ~ .checkmark {
    filter: grayscale(10%);
    
  }

  input:checked ~ .checkmark {
    background-color:${(props)=>props.$checkedColor?? "black"};

  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  
    
  }

 
  input:checked ~ .checkmark:after {
    display: block;
  
   
  }


  .checkmark:after {
    
    left: 25%;
    top: 25%;
    width: 50%;
    height: 30%;
    border: solid var(--color1);
    border-width: 3px 3px 0 0;
    transform: rotate(135deg);
    animation: ColorCheck ${(props) => props.$speed ?? "2s"} infinite linear;
  }

  @keyframes ColorCheck {
    
    0% {
      border: solid var(--color1);
      border-width:  3px 3px 0 0;
     
    }
    50% {
     
      border: solid var(--color2);
      border-width: 3px 3px 0 0;
      );
    }
    100% {
     
      border: solid var(--color3);
      border-width:  3px 3px 0 0;
    );
  }
    



`;
export const Radio = styled.label<LightProps & InputProps>`

  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 0px;
  user-select: none;
  margin:${(props)=>props.$margin ?? "0px"};
 
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

  }

 
  .checkmark {
    position: relative;
    display: flex;
    padding:0px;
    margin:0px;
    height: ${(props)=>props.$height ?? "50px"};
    width: ${(props)=>props.$width ?? "50px"};
   
    animation: Colorwheel ${(props) => props.$speed ?? "1s"} infinite linear;
    border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;

  
    
  }

 .uncheckmark{
  display: flex;
  position:absolute;
  top:7%;
  left:7%;
  width: 80%;
  height: 80%;
  border:2px black solid;
  background: white;
  border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;

 }
  &:hover input ~ .checkmark {
    filter:grayscale(20%);
  }

  
  input:checked ~ .checkmark {
    background-color: orange;
  }
  input:checked ~ .uncheckmark{
    display:none;
  }
  .checkmark:after {
    content: "";
    position: relative;
    display: none; 
  }

  input:checked ~ .checkmark:after {
    display: flex;
    margin:auto;
    width: 50%;
    height: 50%;
    border-radius: ${(props) =>!props.$rounded  ? 0: 100}px;
    border:3px white solid;
    background: black;
  }

  
  @keyframes Colorwheel {
    
    0% {
      background-image: conic-gradient(var(--color1), var(--color2), var(--color3),var(--color1), var(--color2), var(--color3));

    }
    50% {
      background-image: conic-gradient(var(--color3), var(--color1), var(--color2),var(--color3), var(--color1), var(--color2));
    }
    100% {
      background-image: conic-gradient(var(--color2), var(--color3), var(--color1),var(--color2), var(--color3), var(--color1));
    }

`;