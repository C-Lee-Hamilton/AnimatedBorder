import { LightProps } from "../types/Light";
import { InputProps } from "../types/Input";
import { InputContainer,InputBorder,InputContent } from "../styles/Inputs";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";

export const LightInput: React.FC<LightProps & InputProps > = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
  
    return (
      
      <InputContainer data-testid="light-input" {...props} style={cssVariables}>
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