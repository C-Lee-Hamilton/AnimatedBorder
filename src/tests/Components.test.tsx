import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


import { LightBorder,LightButton,LightSlider,LightText,LightLoadbar,LightInput, LightCheck,
         LightRadio, LightSelect,LightToggle,LightInputWithSearch,LightSeparator,LightImage } from "../components/LightComponentLib";
    const onClickMock=jest.fn();
    
         test('LightBorder-render', () => {
            const { getByTestId } = render(<LightBorder $color1="red" $color2="white" $color3="blue">ipsum</LightBorder> );
            const lightElement = getByTestId('light-border');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightButton', () => {
            const { getByTestId } = render(<LightButton $color1="red" $color2="white" $color3="blue" onClick={onClickMock}>lorem</LightButton> );
            const lightElement = getByTestId('light-button');
            expect(lightElement).toBeInTheDocument();
            fireEvent.click(lightElement);
            expect(onClickMock).toHaveBeenCalled();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");

          });
          test('LightSlider-render', () => {
            const { getByTestId } = render(<LightSlider $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-slider');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightText-render', () => {
            const { getByTestId } = render(    <LightText $color1="red" $color2="white" $color3="blue">Lorem</LightText> );
            const lightElement = getByTestId('light-text');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightLoadbar-render', () => {
            const { getByTestId } = render(<LightLoadbar $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-loadbar');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightInput-render', () => {
            const { getByTestId } = render(<LightInput $color1="red" $color2="white" $color3="blue"/>);
            const lightElement = getByTestId('light-input');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightCheck-render', () => {
            const { getByTestId } = render(<LightCheck onClick={onClickMock} $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-check');
            const lightClick=getByTestId('light-check-click');
            fireEvent.click(lightClick);
            expect(onClickMock).toHaveBeenCalled();
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightRadio-render', () => {
            const { getByTestId } = render(<LightRadio onClick={onClickMock} $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-radio');
            const lightClick = getByTestId('light-radio-click');
            fireEvent.click(lightClick);
            expect(onClickMock).toHaveBeenCalled();
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightSelect-render', () => {
            const { getByTestId } = render(<LightSelect $color1="red" $color2="white" $color3="blue" $options={["lorem","ipsum","three"]}/> );
            const lightElement = getByTestId('light-select');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
            
          });
          test('LightToggle-render', () => {
            const { getByTestId } = render(<LightToggle onChange={onClickMock} $color1="red" $color2="white" $color3="blue"/>);
            const lightElement = getByTestId('light-toggle');
            const lightClick=getByTestId('light-toggle-click');
            fireEvent.change(lightClick);
            expect(lightClick).resolves;
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightInputSearch-render', () => {
            const { getByTestId } = render(<LightInputWithSearch $onSubmit={onClickMock} $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-search');
            const lightElementClick=getByTestId('light-search-button');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
            fireEvent.click(lightElementClick);
            expect(onClickMock).toHaveBeenCalled();
          });
          test('LightSeparator-render', () => {
            const { getByTestId } = render(<LightSeparator $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-separator');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });
          test('LightImg-render', () => {
            const { getByTestId } = render(<LightImage $color1="red" $color2="white" $color3="blue"/> );
            const lightElement = getByTestId('light-image');
            expect(lightElement).toBeInTheDocument();
            const computedStyles = lightElement.style;
            expect(computedStyles.getPropertyValue('--color1')).toBe("red");
            expect(computedStyles.getPropertyValue('--color2')).toBe("white");
            expect(computedStyles.getPropertyValue('--color3')).toBe("blue");
          });