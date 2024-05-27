import { LightProps } from "../types/Light";
import { LoadbarProps } from "../types/Loadbar";
import { LoadbarContainer,LoadbarContent,LoadbarFill } from "../styles/Loadbar";
export const LightLoadbar: React.FC< LightProps & LoadbarProps > = ({
 
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
  
    return (
     <LoadbarContainer data-testid="light-loadbar" style={cssVariables} {...props}>
  
      <LoadbarFill {...props}>
        
      <LoadbarContent {...props} />
      </LoadbarFill>
     </LoadbarContainer>
     
    );
  };