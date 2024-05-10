import "./styles.css";
import { LightBorder,LightButton } from "./components/LightBorder";


export default function App(): JSX.Element {
  return (
    <div className="App">
      <LightBorder
      $borderWidth={20}
      $contentAlignY="center"
      $contentAlignX="center"
      $color1="black"
      $color2="black"
      $color3="blue"
      $rounded={true}
      >
     
     <LightButton
     $fontsize=""
    $borderWidth={5}
     $rounded={true}
    $onClick={()=>console.log("it worked again")}
     >tester</LightButton>


      </LightBorder>
      </div>
    
    
  );
}

