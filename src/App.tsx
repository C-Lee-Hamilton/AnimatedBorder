import "./styles.css";
import { LightBorder } from "./components/LightBorder";
import Button from "./components/button";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <LightBorder
        $color1="red"
        $color2="red"
        $color3="black"
        $borderWidth={20}
        $borderRadius={10}
        $speed="1s"
        $contentColor="grey"
        $height="100%"
        $width="100%"
      >
      


<LightBorder>  
  <LightBorder
        $color1="pink"
        $color2="pink"
        $color3="maroon"
        $borderWidth={55}
        $borderRadius={1}
        $speed="4s"
        $contentColor="white"
        $height="50%"
        $width="50%"
      >
        hi
      </LightBorder></LightBorder>



      </LightBorder>
      {/* <Button /> */}
    
    </div>
  );
}

/*

Here, we can see that we're getting this html rendered:
Looking at the styles... I am inclined to look at the keyframes css.
<div class="App">
  <div class="sc-beqWNU hjNioH">
    <div class="sc-gueXAH ekXUHE"></div>
    <div class="sc-dmqGRC kJBPwM"></div>
    <div class="sc-hLseSp hlLgjJ">hi</div>
    <div class="sc-eDDOjk foAWsq"></div>
    <div class="sc-jTrOVX fYkrvJ"></div>
  </div>
  <div class="sc-beqWNU ffVLRT">
    <div class="sc-gueXAH fiyWuL"></div>
    <div class="sc-dmqGRC igvftD"></div>
    <div class="sc-hLseSp cXiUor">hi</div>
    <div class="sc-eDDOjk dlWtXB"></div>
    <div class="sc-jTrOVX eJjPMi"></div>
  </div>
</div>


*/
