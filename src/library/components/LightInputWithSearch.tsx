import { LightProps } from "../types/Light";
import { InputProps } from "../types/Input";
import { InputContainer,InputBorder,InputContent,InputSearchButton } from "../styles/Inputs";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";

export const LightInputWithSearch: React.FC<LightProps & InputProps > = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
  
    return (
      
      <InputContainer data-testid="light-search" {...props} style={cssVariables}>
       <InputBorder {...props}>
        <InputContent type={props.type} value={props.value} onChange={props.onChange} placeholder="..."{...props}/> 
        <InputSearchButton data-testid="light-search-button"  {...props} onClick={props.$onSubmit}>&#x1F50E;</InputSearchButton>
        <Top {...props} />
        <Left {...props} />
     
        <Right {...props} />
        
        <Bottom {...props} />
       
        </InputBorder>
      
      </InputContainer>
      
     
    );
  };