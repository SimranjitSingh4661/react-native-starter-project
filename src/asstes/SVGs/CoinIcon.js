import * as React from "react";
import Svg, {
  G,
  Circle,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={6.5} cy={7} r={6.5} fill="#D9D9D9" />
      <Circle cx={6.5} cy={7} r={6.5} fill="url(#b)" />
      <Circle cx={6.5} cy={7} r={6.5} fill="#A37C1A" />
    </G>
    <G filter="url(#c)">
      <Circle cx={7.5} cy={7} r={6.5} fill="#D9D9D9" />
      <Circle cx={7.5} cy={7} r={6.5} fill="url(#d)" />
    </G>
    <Mask
      id="f"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={0}
      width={13}
      height={14}
    >
      <Circle cx={7.5} cy={7} r={6.5} fill="#D9D9D9" />
      <Circle cx={7.5} cy={7} r={6.5} fill="url(#e)" />
    </Mask>
    <G mask="url(#f)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.33-3.5 6-1l8 13.856 4.33-2.5-8-13.856Zm-10 4L-4 3l8 13.856 4.33-2.5L.33.5Z"
        fill="url(#g)"
        fillOpacity={0.2}
      />
    </G>
    <G opacity={0.4} strokeWidth={0.5}>
      <Circle cx={7.5} cy={7} r={4.25} stroke="#000" />
      <Circle cx={7.5} cy={7} r={4.25} stroke="#826523" />
    </G>
    <G filter="url(#h)">
      <Path
        d="M7.188 5.086a.342.342 0 0 1-.247.097.362.362 0 0 1-.253-.097.338.338 0 0 1-.1-.245.32.32 0 0 1 .1-.239.351.351 0 0 1 .253-.102c.098 0 .18.034.247.102.07.065.106.145.106.24a.329.329 0 0 1-.106.244Zm1.118 0a.341.341 0 0 1-.247.097.362.362 0 0 1-.253-.097.338.338 0 0 1-.1-.245.32.32 0 0 1 .1-.239.351.351 0 0 1 .253-.102c.098 0 .18.034.247.102a.31.31 0 0 1 .106.24.329.329 0 0 1-.106.244Zm.018.427H9L7.87 8.45c-.282.736-.76 1.085-1.435 1.047v-.575c.2.012.361-.03.483-.125.121-.09.221-.235.3-.432l.03-.057L6 5.513h.694l.877 2.066.753-2.066Z"
        fill="#fff"
      />
      <Path
        d="M7.188 5.086a.342.342 0 0 1-.247.097.362.362 0 0 1-.253-.097.338.338 0 0 1-.1-.245.32.32 0 0 1 .1-.239.351.351 0 0 1 .253-.102c.098 0 .18.034.247.102.07.065.106.145.106.24a.329.329 0 0 1-.106.244Zm1.118 0a.341.341 0 0 1-.247.097.362.362 0 0 1-.253-.097.338.338 0 0 1-.1-.245.32.32 0 0 1 .1-.239.351.351 0 0 1 .253-.102c.098 0 .18.034.247.102a.31.31 0 0 1 .106.24.329.329 0 0 1-.106.244Zm.018.427H9L7.87 8.45c-.282.736-.76 1.085-1.435 1.047v-.575c.2.012.361-.03.483-.125.121-.09.221-.235.3-.432l.03-.057L6 5.513h.694l.877 2.066.753-2.066Z"
        fill="#6A5110"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={6.5}
        y1={0.5}
        x2={6.5}
        y2={16.58}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C9B379" />
        <Stop offset={1} stopColor="#C99A1E" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={7.5}
        y1={0.5}
        x2={7.5}
        y2={16.58}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C9B379" />
        <Stop offset={1} stopColor="#C99A1E" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={7.5}
        y1={0.5}
        x2={7.5}
        y2={16.58}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C9B379" />
        <Stop offset={1} stopColor="#C99A1E" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={-5.5}
        y1={1.5}
        x2={-9.168}
        y2={8.883}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
