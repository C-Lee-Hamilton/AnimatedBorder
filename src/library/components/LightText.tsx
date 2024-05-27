import React, { ReactNode } from "react";
import { LightProps } from "../types/Light";
import { ButtonProps } from "../types/Button";
import { TextDiv,TextContent } from "../styles/Text";

export const LightText: React.FC< { children: ReactNode } & LightProps &ButtonProps > = ({
    children,
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
  
    return (
     <TextDiv data-testid="light-text" style={cssVariables}  {...props}>
      <TextContent style={cssVariables} {...props}>{children}</TextContent>
     </TextDiv>
     
    );
  };