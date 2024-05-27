import React, { ReactNode } from "react";
import { LightProps } from "../types/Light";
import { ButtonProps } from "../types/Button";
import { Button,ButtonContainer,ButtonContent } from "../styles/Button";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";
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
       
       <ButtonContainer data-testid="light-button" onClick={props.onClick} {...props} style={cssVariables}>
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