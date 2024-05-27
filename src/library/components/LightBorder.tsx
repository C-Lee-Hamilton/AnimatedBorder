import React, { ReactNode } from "react";
import { LightProps } from "../types/Light";
import { DivProps } from "../types/Div";
import { DivCenter,DivContainer,DivContent } from "../styles/Div";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";

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
      <DivContainer data-testid="light-border" {...props} style={cssVariables}>
        <DivContent {...props}><DivCenter {...props}>{children}</DivCenter></DivContent>
        <Top {...props} />
        <Left {...props} />
        
        <Right {...props} />
        <Bottom {...props} />
        
      </DivContainer>
    );
  };