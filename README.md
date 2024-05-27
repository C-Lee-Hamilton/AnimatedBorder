# Animated Gradient Component Library

## Description

###### Animated gradient components using TSX and Styled Components. Use your own colors, or the default cyan, hotpink, lime, and watch them circle around your screen, buttons, or any of the other components in this library.

## Features

###### Adjustable sizes, border widths, animation speed, as well as other features specific to components.

## Usage and Documentation

#### The following props are available on almost every component, component specific props will be provided along with the component usage. Note "$outline" is not available on every component.

| **Category** |              |          |         |               |            |
| ------------ | ------------ | -------- | ------- | ------------- | ---------- |
| **String**   | $height      | $width   | $speed  | $contentColor | $fontsize  |
|              | $margin      | $color1  | $color2 | $color3       | $fontColor |
|              |              |          |         |               | $textAlign |
| **Number**   | $borderWidth |          |         |               |            |
| **Boolean**  | $rounded     | $outline |         |               |            |

### LightBorder

| Property          | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| $contentAlignX    | Takes values for justify-content                                                         |
| $contentAlignY    | Takes values for align-items                                                             |
| $insetBorderWidth | Number, only use if trying to use a double border, set to the width of the second border |

```
import { LightBorder } from "@the_grid/agcl";
const MyComponent = () => {
 <div>
    <LightBorder
    $color1="red"
    $color2="blue"
    $color3="white"
    $borderWidth={10}
    //any other properties from shared properties
    >
    content
    </LightBorder>

 </div>
};
//Double Border
const MyComponent = () => {
 <div>
    <LightBorder
    $color1="red"
    $color2="blue"
    $color3="white"
    $borderWidth={10}
    $insetBorderWidth={20}
    //any other properties from shared properties
    >
        <LightBorder
        $borderWidth={20}
        >
        content
        </LightBorder>
    </LightBorder>

 </div>
};

```

### LightButton

Takes an onClick.

```
import { LightButton } from "@the_grid/agcl";
const MyComponent = () => {
 <div>
          <LightButton
            $color1="cyan"
            $color2="magenta"
            $color3="yellow"
            $borderWidth={5}
            $rounded={true}
            onClick={()=>console.log("hello world")}
           >Solid</LightButton>

          <LightButton
            $outline={true}
            $color1="cyan"
            $color2="magenta"
            $color3="cyan"
            $borderWidth={5}
            $rounded={false}
            onClick={()=>console.log("hello world")}
           >Outline
          </LightButton>
 </div>
};

```

### LightSlider

| **Category** |                    |                   |      |       |     |
| ------------ | ------------------ | ----------------- | ---- | ----- | --- |
| **Number**   | min                | max               | step | value |     |
| **Boolean**  | $roundedSelector   |                   |      |       |     |
| **String**   | $slideCenterHeight | $slideCenterWidth |      |       |     |

```
import { LightSlider } from "@the_grid/agcl";
const MyComponent = () => {
 <div>
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
          />
 </div>
};

```

### LightText

```
import { LightText } from "@the_grid/agcl";
const MyComponent = () => {
 <div>
    <LightText
        $speed="2s"
        $color1="lime"
        $color2="cyan"
        $color3="magenta"
        $fontsize="20px">
    Hello World
    </LightText>
 </div>
};

```

### LightLoadBar

Takes in a number variable for $loadValue for progress, use a useEffect or any other applicable method to increase the $loadValue

```
import { LightText } from "@the_grid/agcl";
const MyComponent = () => {
const [loadVal,setLoadVal]=useState(0);

 <div>
          <LightLoadbar
            $rounded={true}
            $loadValue={loadVal}
          />
 </div>
};

```

### LightInput

| **Category** |          |       |
| ------------ | -------- | ----- |
| **String**   | type     | value |
| **Function** | onChange |       |

```
import { LightInput } from "@the_grid/agcl";
const MyComponent = () => {


 <div>
        LightInput
          value={value}
          type="text"
          onChange={mockFunction()}
          $color1="yellow"
          $color2="cyan"
          $color3="lime"
          type="text"
          $rounded={true}
        />
 </div>
};

```

### LightInputWithSearch

| **Category** |          |           |
| ------------ | -------- | --------- |
| **String**   | type     | value     |
| **Function** | onChange | $onSubmit |

```
import { LightInputWithSearch } from "@the_grid/agcl";
const MyComponent = () => {


 <div>
        LightInputWithSearch
          value={value}
          type="text"
          onChange={mockFunction()}
          $onSubmit={submitButtonFunction()}
          $color1="yellow"
          $color2="cyan"
          $color3="lime"
          type="text"
          $rounded={true}
        />
 </div>
};

```

### LightCheck

| **Category** |         |
| ------------ | ------- |
| **Boolean**  | checked |
| **Function** | onClick |

```
import { LightCheck } from "@the_grid/agcl";
const MyComponent = () => {


 <div>
     <LightCheck checked={boolean value} onClick={mockFunction()}/>

 </div>
};

```

### LightRadio

| **Category** |         |
| ------------ | ------- |
| **Boolean**  | checked |
| **Function** | onClick |

```
import { LightRadio } from "@the_grid/agcl";
const MyComponent = () => {


 <div>
     //circles by default
     <LightRadio checked={boolean value} onClick={mockFunction()}/>

     //mark $rounded false for square
     <LightRadio $rounded={false} checked={boolean value} onClick={mockFunction()}/>

 </div>
};

```

### LightSelect

| **Options**        |                                                   |
| ------------------ | ------------------------------------------------- |
| $options           | Takes in an array for the options                 |
| $setState          | Takes a setState function to keep track of values |
| $selectsToRight    | Set true to align right and false to align left   |
| $maxDropHeight     | String, Maximum drop-down height                  |
| $initialButtonText | Button text                                       |

```
import { LightSelect } from "@the_grid/agcl";

const arr=["red","green","blue"]
const MyComponent = () => {


 <div>
    <LightSelect
        $color1="magenta"
        $color2="violet"
        $color3="cyan"
        $selectsToRight={true}
        $rounded ={false}
        $outline={true}
        $options={arr}
        $setState={setMock}
        $maxDropHeight="100px"

/>
 </div>
};

```

### LightToggle

Takes in an optional onChange

```
import { LightToggle } from "@the_grid/agcl";


const MyComponent = () => {

 <div>
   <LightToggle
         onChange={toggleSetter}
         $width="100px"
         $height="50px"
         $slideCenterHeight="40px"
         $slideCenterWidth="40px" />
 </div>
};

```

### LightSeparator

```
import { LightSeparator } from "@the_grid/agcl";


const MyComponent = () => {

 <div>
  <LightSeparator
  $color1="red"
  $color2="white"
  $color3="blue"
  $width="200px"
 </div>
};

```

### LightImage

Takes in src

```
import { LightImage } from "@the_grid/agcl";


const MyComponent = () => {

 <div>
  <LightImage
  $color1="red"
  $color2="white"
  $color3="blue"
  $width="50px"
  $height="50px"
  src={imageFile}
 </div>
};

```

## Gallery

![alt text.](/CLImage.png)
