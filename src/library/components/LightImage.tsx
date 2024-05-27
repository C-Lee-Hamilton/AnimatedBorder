import { LightProps } from "../types/Light";
import { ImageProps } from "../types/Image";
import { Image } from "../styles/Image";

export const LightImage: React.FC< LightProps & ImageProps> = ({
  
    ...props
  }) => {
    const cssVariables = {
      '--color1': props.$color1 ?? "hotpink",
      '--color2': props.$color2 ?? "cyan",
      '--color3': props.$color3 ?? "lime",
     
     
    } as React.CSSProperties
   
    return (
  <Image data-testid="light-image" alt=" " src={props.src}  style={cssVariables} {...props}/>
     
    );
  };