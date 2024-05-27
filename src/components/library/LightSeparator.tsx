import { LightProps } from "../types/Light";
import { Separator } from "../styles/Separator";

export const LightSeparator: React.FC< LightProps> = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime",
     
     
    } as React.CSSProperties
   
    return (
  <Separator data-testid="light-separator" style={cssVariables} {...props}/>
     
    );
  };