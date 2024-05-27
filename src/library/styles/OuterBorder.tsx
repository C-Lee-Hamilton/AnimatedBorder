import styled from "styled-components";
import { LightProps } from "../types/Light";
import { colorVar1,colorVar2,colorVar3,colorVar4,colorVar5,colorVar6 } from "./ColorVariables";

export const Top = styled.div<LightProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  height: ${(props) => props.$borderWidth ?? 4}px;
  border-radius: ${(props) => props.$rounded  ? 100: 0}px
    ${(props) => props.$rounded ? 100: 0}px 0 0;

  animation: ColorTop ${(props) => props.$speed ?? "1s"} infinite linear;
  @keyframes ColorTop {
    
    0% {
      background-image: linear-gradient(
        to right,
        ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
   ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
   ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
       ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        to right,
      ${colorVar6}
      );
    }
  }
`;
export const Left = styled.div<LightProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  
  width: ${(props) => props.$borderWidth ?? 4}px;
  border-radius: ${(props) => props.$rounded ? 100 : 0}px 0 0px
    ${(props) => props.$rounded ? 100: 0}px;
  animation: ColorLeft ${(props) => props.$speed ?? "1s"} linear infinite;
  @keyframes ColorLeft {
    0% {
      background-image: linear-gradient(
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1)
      );
    }
    20% {
      background-image: linear-gradient(
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1)
      );
    }
    40% {
      background-image: linear-gradient(
        var(--color3),
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3)
      );
    }
    60% {
      background-image: linear-gradient(
        var(--color2),
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3)
      );
    }
    80% {
      background-image: linear-gradient(
        var(--color2),
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2)
      );
    }
    100% {
      background-image: linear-gradient(
        var(--color1),
        var(--color1),
        var(--color3),
        var(--color3),
        var(--color2),
        var(--color2)
      );
    }
  }
`;
export const Right = styled.div<LightProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  
  width: ${(props) => props.$borderWidth ?? 4}px;
  animation: ColorRight ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 ${(props) => props.$rounded ? 100 : 0}px
    ${(props) => props.$rounded ? 100: 0}px 0;
  @keyframes ColorRight {
    0% {
      background-image: linear-gradient(
      ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
  ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
    ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        ${colorVar6}
      );
    }
  }
`;
export const Bottom = styled.div<LightProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$borderWidth ?? 4}px;
  animation: ColorBottom ${(props) => props.$speed ?? "1s"} linear infinite;
  border-radius: 0 0 ${(props) => props.$rounded ? 100 : 0}px
    ${(props) => props.$rounded ? 100 : 0}px;
  @keyframes ColorBottom {
    0% {
      background-image: linear-gradient(
        to left,
       ${colorVar1}
      );
    }
    20% {
      background-image: linear-gradient(
        to left,
        ${colorVar2}
      );
    }
    40% {
      background-image: linear-gradient(
        to left,
        ${colorVar3}
      );
    }
    60% {
      background-image: linear-gradient(
        to left,
        ${colorVar4}
      );
    }
    80% {
      background-image: linear-gradient(
        to left,
        ${colorVar5}
      );
    }
    100% {
      background-image: linear-gradient(
        to left,
        ${colorVar6}
      );
    }
  }
`;
