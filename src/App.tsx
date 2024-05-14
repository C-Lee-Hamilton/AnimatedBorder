import "./styles.css";
import React,{useState,useEffect} from 'react';
import { LightBorder,LightButton,LightSlider,
  LightText,LightLoadbar,LightInput, LightCheck, LightRadio, LightSelect } from "./components/LightBorder";


export default function App(): JSX.Element {
  const [sliderValue,setSliderValue]=useState<number>(5);
  const [sliderValue2,setSliderValue2]=useState<number>(5);
  const [loadVal,setLoadVal]=useState<number>(0);
  const [SelectVal,setSelectVal]=useState<string>("");
  const selectOptions:string[]=["red","blue","white"];
  // progress-bar
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadVal(prevLoadVal => prevLoadVal == 100 ? 0 : prevLoadVal + 10);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
// slider-bar functions
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = parseInt(event.target.value, 10);
    setSliderValue(newSliderValue);
  };
  const handleSlideChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = parseInt(event.target.value, 10);
    setSliderValue2(newSliderValue);
  };

  // #36454f"
return (
  <div className="App">
    <LightBorder
    $insetBorderWidth={15}
    $contentColor="#36454f"
    $borderWidth={10}
    $contentAlignY="center"
    $contentAlignX="center"
   
    $color1="#686868"
    $color2="#7d7c7c"
    $color3="#b6b6b6"
    $rounded={false}>

    <div className="showcaseCol">
      <LightBorder
      $color1="cyan"
      $color2="yellow"
      $color3="magenta"
      $borderWidth={4}
      >
        <div className="showcaseColInside">
        <div className="text-bg">
        <LightText
    
        $color1="lime"
        $color2="cyan"
        $color3="magenta"
        $fontsize="20px"><h1 className="header">Animation Gradiation Component Librarium</h1></LightText> 
        </div>  
        <div id="checkbox-radio-buttons"className="input-row">
          <LightCheck $rounded={true}/>
          <LightCheck $color1="darkorange" $color2="cyan" $color3="white" $rounded={true}/>
          <LightRadio $rounded={true}/>
          <LightRadio $color1="darkorange" $color2="cyan" $color3="white" $rounded={true}/>
          <LightRadio $rounded={false}/>
          <LightRadio $color1="darkorange" $color2="cyan" $color3="white" $rounded={false}/>
        </div>
        <div id="buttons" className="input-row">
          <LightButton
          $color1="cyan"
          $color2="magenta"
          $color3="yellow"
          
          $borderWidth={5}
          $rounded={true}
          onClick={()=>console.log("it worked again")}
          >Solid</LightButton>

          <LightButton
            $outline={true}
            $color1="cyan"
            $color2="magenta"
            $color3="cyan"
            
            $borderWidth={5}
            $rounded={true}
            onClick={()=>console.log("it worked again")}
          >Outline</LightButton>
          
        </div>

        <div id="slider-bars" className="input-row">
        
          <LightSlider
            $roundedSelector={true}
            $rounded={true}
            value={sliderValue}
            $color1="darkorange"
            $color2="violet"
            $color3="yellow"
            onChange={handleSlideChange}
            step={1}
            min={0}
            max={10}
          />
          <LightSlider
            $roundedSelector={false}
            $rounded={false}
            value={sliderValue2}
            $color1="darkorange"
            $color2="violet"
            $color3="yellow"
            onChange={handleSlideChange2}
            step={1}
            min={0}
            max={10}
          />
        </div>
    

        <div id="progress-bars" className="input-row">
          <LightLoadbar
            $rounded={true}
            $loadValue={loadVal}
          />
          <LightLoadbar
            $rounded={false}
            $loadValue={loadVal}
          />
        </div>
        <div id="checkbox-radio-buttons"className="input-row">
        <LightInput
          $color1="yellow"
          $color2="cyan"
          $color3="lime"
          type="text"
          $rounded={true}
        />
        <LightSelect $options={selectOptions} $setState={setSelectVal} />
      
        </div>

        </div>
      </LightBorder>
    </div>
      
    </LightBorder>
  </div>
  );
}

