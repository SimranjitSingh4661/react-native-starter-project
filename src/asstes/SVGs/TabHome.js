import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={26}
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.3} stroke="#fff" strokeLinejoin="round">
      <Path d="M5 22.929V15l5 1.071V24l-5-1.071Zm18-4.563V8l-9 5.805V25l9-6.634Z" />
      <Path d="M1 10.977v11.302L14 25V13.698L7.5 7 1 10.977Z" />
      <Path d="M16.474 1 7.5 7l6.237 7L23 7.933 16.474 1Z" />
    </G>
  </Svg>
);
export default SVGComponent;
