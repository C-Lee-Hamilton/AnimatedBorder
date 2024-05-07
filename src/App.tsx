import "./styles.css";
import { LightBorder } from "./components/LightBorder";

export default function App(): JSX.Element {
  
  return (
    <div className="App">
      <LightBorder
      $color1="green"
      $color2="white"
      $color3="blue"
      >
        <h1> Border Demo  </h1>
       {/* <button style={{width:"50px", height:"30px", color:"cyan", padding:"0px"}}><LightBorder $borderWidth={2} >hi</LightBorder></button> */}
      </LightBorder>
    </div>
  );
}
