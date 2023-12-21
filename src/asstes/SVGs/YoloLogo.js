import * as React from 'react';
import {View} from 'react-native';
import {SCREEN_PADDING} from '../../constants';
import Svg, {Path, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
const SVGComponent = props => (
  <View style={{marginTop: 20, paddingHorizontal: SCREEN_PADDING}}>
    <Svg
      width={99}
      height={19}
      viewBox="0 0 99 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.828 3.713s-1.832-2.144-3.692-.458L6.954 5.227s-1.907-2.742-3.679-2.47c0 0-.052 0-.14.004-1.505.116-2.48 1.63-2.02 3.07.136.426.371.895.773 1.351l1.764 2.021s.819.819.819 2.63v2.534a2.47 2.47 0 0 0 4.938 0v-2.63s-.048-1.772 1.139-2.92l4.79-4.606s4.787-4.645 10.078.061"
        stroke="url(#a)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M12.994 9.35s.566 6.726 6.881 7.015c0 0 5.126.534 7.03-4.355.374-.959.54-1.987.54-3.015V4.962a2.796 2.796 0 1 1 5.593 0v5.618h2.035a2.902 2.902 0 0 1 0 5.804h-4.494s-1.928-.152-2.632-1.225"
        stroke="#BB0707"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M36.855 10.952s-.763-5.557 3.975-7.68c2.164-.971 4.675-.93 6.75.223 1.216.675 2.434 1.806 3.047 3.7.782 2.415.325 5.093-1.279 7.062-1.502 1.845-4.248 3.431-9.086 1.578"
        stroke="url(#b)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M36.855 10.952s-.763-5.557 3.975-7.68c2.164-.971 4.675-.93 6.75.223"
        stroke="url(#c)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Rect x={57} width={42} height={19} rx={4} fill="#BB0707" />
      <Path
        d="M70.55 8.12a1.639 1.639 0 0 0-.66-.67 2.009 2.009 0 0 0-.98-.23c-.413 0-.78.093-1.1.28-.32.187-.57.453-.75.8a2.57 2.57 0 0 0-.27 1.2c0 .467.09.873.27 1.22.187.347.443.613.77.8.327.187.707.28 1.14.28.533 0 .97-.14 1.31-.42.34-.287.563-.683.67-1.19h-2.4V9.12h3.78v1.22a3.278 3.278 0 0 1-.6 1.35 3.423 3.423 0 0 1-1.19 1c-.48.247-1.02.37-1.62.37a3.74 3.74 0 0 1-1.83-.45 3.393 3.393 0 0 1-1.28-1.27c-.307-.54-.46-1.153-.46-1.84s.153-1.3.46-1.84a3.3 3.3 0 0 1 1.28-1.27 3.656 3.656 0 0 1 1.82-.46c.787 0 1.47.193 2.05.58.58.38.98.917 1.2 1.61h-1.61Zm4.216-2.1V13h-1.4V6.02h1.4ZM82.119 13h-1.4l-3.17-4.79V13h-1.4V6.01h1.4l3.17 4.8v-4.8h1.4V13Zm2.784-6.98V13h-1.4V6.02h1.4Zm2.783 1.13V8.9h2.35v1.11h-2.35v1.85h2.65V13h-4.05V6.01h4.05v1.14h-2.65Z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={1.008}
          y1={16.836}
          x2={25.382}
          y2={16.836}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.719} stopColor="#BB0707" />
          <Stop offset={1} stopColor="#BB0707" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={50.254}
          y1={12.51}
          x2={39.932}
          y2={16.614}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BB0707" />
          <Stop offset={1} stopColor="#BB0707" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={36.814}
          y1={10.952}
          x2={47.565}
          y2={10.952}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BB0707" />
          <Stop offset={1} stopColor="#BB0707" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);
export default SVGComponent;
