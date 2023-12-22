import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 9 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M1 3.5 3.333 6 8 1" stroke="#229642" strokeWidth={2} />
  </Svg>
);
export default SVGComponent;
