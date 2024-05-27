import React, { useState } from "react";
import { LightProps } from "../types/Light";
import { SelectProps } from "../types/Select";
import { ButtonProps } from "../types/Button";
import { SelectContainer,SelectButton,SelectDiv,SelectDropdown,SelectOption,SelectScroll } from "../styles/Select";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";

export const LightSelect: React.FC<   LightProps & SelectProps & ButtonProps > = ({ 
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
  const selectArray:string[]=props.$options || [];
  const [val,setVal]=useState<string>("null");
  const [active,setActive]=useState<boolean>(false);
  const selectClick= (e: React.MouseEvent<HTMLButtonElement>) =>{
    setVal(e.currentTarget.name);
    props.$setState && props.$setState(e.currentTarget.name);
  };
    return (
    
      <SelectContainer data-testid="light-select" style={cssVariables} {...props}>
        <SelectButton {...props} onClick={()=>setActive(!active)}>{val==="null" ? props.$initialButtonText : val}  <Top {...props}/><Bottom {...props}/><Right {...props}/><Left {...props}/></SelectButton>
        
        <SelectDropdown {...props} onClick={()=>setActive(!active)}  style={{visibility:`${active ? "visible": "hidden"}`}}>
        <Bottom/><Right/><Left/>
        <SelectScroll >
        {selectArray.map((option,index) => (
          <SelectDiv key={index}>
            <SelectOption {...props} key={option} name={option} onClick={(e:any)=>selectClick(e)}>
             
              {option}
           
            </SelectOption>
          </SelectDiv>
          ))}
        </SelectScroll>
        </SelectDropdown>
        
        </SelectContainer>
    
     
    );
  };