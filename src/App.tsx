import "./styles.css";
import { LightBorder,LightButton } from "./components/LightBorder";


export default function App(): JSX.Element {
  return (
    <div className="App">
      <LightBorder
      $borderWidth={20}
      $contentAlignY="center"
      $contentAlignX="center"
      $color1="yellow"
      $color2="lime"
      $color3="cyan"
      >
     
     <LightButton
     $borderWidth={4}
     $borderRadius={100}
     >tester</LightButton>


      </LightBorder>
      </div>
    
    
  );
}

