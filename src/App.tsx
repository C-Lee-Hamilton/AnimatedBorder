import "./styles.css";
import React,{useState,useEffect} from 'react';
import { LightBorder,LightButton,LightSlider,
  LightText,LightLoadbar,LightInput, LightCheck, LightRadio } from "./components/LightBorder";


export default function App(): JSX.Element {
  const [sliderValue,setSliderValue]=useState<number>(5);
  const [loadVal,setLoadVal]=useState<number>(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadVal(prevLoadVal => prevLoadVal == 100 ? 0 : prevLoadVal + 10);
      

    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

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
    $rounded={true}>

    <div className="showcaseCol">
      <LightButton
      $color1="cyan"
      $color2="magenta"
      $color3="cyan"
      $fontsize=""
      $borderWidth={5}
      $rounded={true}
      onClick={()=>console.log("it worked again")}
      >Solid</LightButton>

      <LightButton
      $outline={true}
      $color1="cyan"
      $color2="magenta"
      $color3="cyan"
      $fontsize=""
      $borderWidth={5}
      $rounded={true}
      onClick={()=>console.log("it worked again")}
      >Outline</LightButton>
      
      <LightSlider
      $roundedSelector={true}
      value={sliderValue}
      onChange={handleSlideChange}
      step={1}
      min={0}
      max={10}
      />
    
      <LightText
      $color1="yellow"
      $color2="cyan"
      $color3="blue"
      $fontsize="20px">I like to make all the colors</LightText> 

      <LightLoadbar
      $rounded={true}
      $loadValue={loadVal}
      />

      <LightInput type="text" $rounded={true}/>

      <div className="input-row">
      <LightCheck $rounded={true}/>
      <LightCheck $rounded={true}/>
      <LightRadio $rounded={true}/>
      <LightRadio $rounded={true}/>
      
      </div>

      </div>
    </LightBorder>
  </div>
  );
}

