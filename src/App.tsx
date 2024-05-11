import "./styles.css";
import React,{useState} from 'react';
import { LightBorder,LightButton,LightSlider } from "./components/LightBorder";


export default function App(): JSX.Element {
  const [sliderValue,setSliderValue]=useState<number>(5);
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = parseInt(event.target.value, 10);
    setSliderValue(newSliderValue);
  };
  return (
    <div className="App">
      <LightBorder
      $borderWidth={20}
      $contentAlignY="center"
      $contentAlignX="center"
      $color1="lime"
      $color2="lightgreen"
      $color3="white"
      $rounded={true}
      >
     <div className="showcaseCol">
     <LightButton
 $color1="cyan"
 $color2="magenta"
 $color3="cyan"

    $fontsize=""
    $borderWidth={5}
    $rounded={true}
    $onClick={()=>console.log("it worked again")}
     >tester</LightButton>
      
    <LightSlider
    $roundedSelector={true}
    value={sliderValue}
    onChange={handleSlideChange}
    step={1}
    min={0}
    max={10}
    />
   
    </div>

 
      </LightBorder>
      </div>
    
    
  );
}

