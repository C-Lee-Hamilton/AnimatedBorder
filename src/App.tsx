import "./styles.css";
import { LightBorder } from "./components/LightBorder";

export default function App(): JSX.Element {
  
  return (
    <div className="App">
      <LightBorder
      // $color1="red"
      // $color2="white"
      // $color3="blue"
      // $borderWidth={20}
      // $borderRadius={10}
      // $speed="1s"
      // $contentColor="green"
      // $height="100%"
      // $width="100%"
      >
        <h1> Border Demo  </h1>
      </LightBorder>
    </div>
  );
}
