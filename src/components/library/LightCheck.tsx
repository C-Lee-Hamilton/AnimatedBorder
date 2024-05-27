import { LightProps } from "../types/Light";
import { InputProps } from "../types/Input";
import { Checkbox } from "../styles/Inputs";
import { Top,Left,Right,Bottom } from "../styles/OuterBorder";

export const LightCheck: React.FC<LightProps & InputProps > = ({
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime",
    } as React.CSSProperties
    return(
  <Checkbox data-testid="light-check" style={cssVariables} {...props}>
    <input data-testid="light-check-click"   checked={props.checked} onClick={props.onClick}type="checkbox"/>
    <span  className="checkmark">
    <Top  {...props}/>
    <Bottom  {...props}/>
    <Left  {...props}/>
    <Right  {...props}/>
    </span>
  </Checkbox>
    );
  };