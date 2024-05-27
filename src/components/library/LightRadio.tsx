import { LightProps } from "../types/Light";
import { InputProps } from "../types/Input";
import { Radio } from "../styles/Inputs";
export const LightRadio: React.FC<LightProps & InputProps > = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime"
    } as React.CSSProperties
    return(
  <Radio data-testid="light-radio"  style={cssVariables} {...props}>
    <input data-testid="light-radio-click"   checked={props.checked} onClick={props.onClick}type="checkbox"/>
    <span  className="checkmark"></span>
    <span   className="uncheckmark"></span>
  </Radio>
    );
  };