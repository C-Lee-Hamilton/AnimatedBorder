import "./styles.css";
import React,{useState,useEffect} from 'react';
import { LightButton } from "./components/library/LightButton";
import { LightBorder } from "./components/library/LightBorder";
import { LightSlider } from "./components/library/LightSlider";
import { LightText } from "./components/library/LightText";
import { LightLoadbar } from "./components/library/LightLoadBar";
import { LightInput } from "./components/library/LightInput";
import { LightCheck } from "./components/library/LightCheck";
import { LightRadio } from "./components/library/LightRadio";
import { LightSelect } from "./components/library/LightSelect";
import { LightToggle } from "./components/library/LightToggle";
import { LightInputWithSearch } from "./components/library/LightInputWithSearch";
import { LightSeparator } from "./components/library/LightSeparator";
import { LightImage } from "./components/library/LightImage";

import Six from "./images/0.png";
import One from "./images/1.png";
import Two from "./images/2.png";
import Three from "./images/3.png";
import Four from "./images/4.png";
import Five from "./images/5.png";

export default function App(): JSX.Element {
  const [sliderValue,setSliderValue]=useState<number>(5);
  const [sliderValue2,setSliderValue2]=useState<number>(5);
  const [loadVal,setLoadVal]=useState<number>(0);
  const [SelectVal,setSelectVal]=useState<string>("");
  const [SelectVal2,setSelectVal2]=useState<string>("");
  const [toggle,setToggle]=useState<boolean>(false);
  const selectOptions:string[]=["red","blue","white","orange","yellow","green","violet","hazel","cyan"];
  const selectOptions2:string[]=["red","blue","white","orange","yellow","green","violet","hazel","cyan"];

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
//toggle
const toggleSetter=()=>{setToggle(!toggle)};
  
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
       $color2="magenta"
       $color3="lime"
     
      $borderWidth={6}
      $rounded={true}
      >
        <div className="showcaseColInside">
        <div className="text-bg">
        <LightText
        $speed="2s"
        $color1="lime"
        $color2="cyan"
        $color3="magenta"
        $fontsize="20px"><h1 className="header">Animated Gradient Component Library</h1></LightText> 
        </div>  
        <LightSeparator/>
        <div id="checkbox-radio-buttons"className="input-row">
          <LightCheck $rounded={true}/>
          <LightCheck $color1="darkorange" $color2="cyan" $color3="white" $rounded={true}/>
          <LightRadio $rounded={true}/>
          <LightRadio $color1="darkorange" $color2="cyan" $color3="white" $rounded={true}/>
          <LightRadio $rounded={false}/>
          <LightRadio $color1="darkorange" $color2="cyan" $color3="white" $rounded={false}/>
        </div>
        <LightSeparator/>
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
        <LightSeparator/>
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
            $height="45px"
            $slideCenterHeight="45px"
            $slideCenterWidth="45px"
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
        <LightSeparator/>

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
        <LightSeparator/>
        <div id="text-input"className="input-row">
        <LightInput
          $color1="yellow"
          $color2="cyan"
          $color3="lime"
          type="text"
          $rounded={true}
        />
        <LightInputWithSearch $solidSearchButton={false}/>
        </div>
        <LightSeparator/>
        <div id="selects" className="input-row">
        <LightSelect 
        $initialButtonText="select"
        $rounded ={true} $outline={false} $options={selectOptions} $setState={setSelectVal} />
        <LightSelect
$initialButtonText="select"
        $color1="magenta"
        $color2="violet"
        $color3="cyan"
        $selectsToRight={true}  $rounded ={false} $outline={true} $options={selectOptions2} $setState={setSelectVal2} />

        </div>
        <LightSeparator/>
        <div id="checkbox-radio-buttons"className="input-row">
        <LightToggle
        onChange={toggleSetter}
        $rounded={true} 
        $roundedSelector={true}
        $width="100px" $height="50px" $slideCenterHeight="40px" $slideCenterWidth="40px" />
        <LightToggle
         onChange={toggleSetter}
         $width="100px" $height="50px" $slideCenterHeight="40px" $slideCenterWidth="40px" />

        </div>
        
<LightSeparator/>
<div id="images"className="input-row-images">

<LightImage src={One}/>
<LightImage src={Two}/>
<LightImage src={Three}/>
<LightImage src={Four}/>
<LightImage src={Five}/>
<LightImage src={Six}/>

</div>
        </div>
      </LightBorder>
    </div>
      
    </LightBorder>
  </div>
  );
}

