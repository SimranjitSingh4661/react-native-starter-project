import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={120}
    height={22}
    viewBox="0 0 120 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 22c0-5.582 0-8.373.689-10.645A16 16 0 0 1 11.355.69C13.627 0 16.418 0 22 0h98v6c0 7.543 0 11.314-2.343 13.657S111.542 22 104 22H0Z"
      fill="url(#a)"
    />
    <Path
      d="m21.232 15-1.92-3.336h-1.044V15H16.9V6.66h2.88c.64 0 1.18.112 1.62.336.448.224.78.524.996.9.224.376.336.796.336 1.26 0 .544-.16 1.04-.48 1.488-.312.44-.796.74-1.452.9L22.864 15h-1.632Zm-2.964-4.428h1.512c.512 0 .896-.128 1.152-.384.264-.256.396-.6.396-1.032 0-.432-.128-.768-.384-1.008-.256-.248-.644-.372-1.164-.372h-1.512v2.796Zm12.274.96c0 .248-.016.472-.048.672h-5.052c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.476a2.998 2.998 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.176-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788.28-.52.668-.92 1.164-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.488.272.868.656 1.14 1.152.272.488.408 1.052.408 1.692Zm-1.428-.432c-.008-.504-.188-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.472 0-.876.152-1.212.456-.336.296-.536.7-.6 1.212h3.66Zm2.318.588c0-.68.136-1.276.408-1.788.28-.52.664-.92 1.152-1.2.488-.28 1.048-.42 1.68-.42.8 0 1.46.192 1.98.576.528.376.884.916 1.068 1.62h-1.476a1.56 1.56 0 0 0-.576-.768c-.264-.184-.596-.276-.996-.276-.56 0-1.008.2-1.344.6-.328.392-.492.944-.492 1.656s.164 1.268.492 1.668c.336.4.784.6 1.344.6.792 0 1.316-.348 1.572-1.044h1.476c-.192.672-.552 1.208-1.08 1.608-.528.392-1.184.588-1.968.588-.632 0-1.192-.14-1.68-.42a3.08 3.08 0 0 1-1.152-1.2c-.272-.52-.408-1.12-.408-1.8Zm10.52 3.42c-.624 0-1.188-.14-1.692-.42a3.113 3.113 0 0 1-1.188-1.2c-.288-.52-.432-1.12-.432-1.8 0-.672.148-1.268.444-1.788.296-.52.7-.92 1.212-1.2a3.517 3.517 0 0 1 1.716-.42c.632 0 1.204.14 1.716.42.512.28.916.68 1.212 1.2.296.52.444 1.116.444 1.788 0 .672-.152 1.268-.456 1.788-.304.52-.72.924-1.248 1.212-.52.28-1.096.42-1.728.42Zm0-1.188c.352 0 .68-.084.984-.252.312-.168.564-.42.756-.756.192-.336.288-.744.288-1.224s-.092-.884-.276-1.212a1.855 1.855 0 0 0-.732-.756 2.002 2.002 0 0 0-.984-.252c-.352 0-.68.084-.984.252-.296.168-.532.42-.708.756-.176.328-.264.732-.264 1.212 0 .712.18 1.264.54 1.656.368.384.828.576 1.38.576ZM54.74 8.28c.52 0 .984.108 1.392.324.416.216.74.536.972.96.24.424.36.936.36 1.536V15h-1.356v-3.696c0-.592-.148-1.044-.444-1.356-.296-.32-.7-.48-1.212-.48s-.92.16-1.224.48c-.296.312-.444.764-.444 1.356V15h-1.356v-3.696c0-.592-.148-1.044-.444-1.356-.296-.32-.7-.48-1.212-.48s-.92.16-1.224.48c-.296.312-.444.764-.444 1.356V15h-1.368V8.388h1.368v.756c.224-.272.508-.484.852-.636a2.7 2.7 0 0 1 1.104-.228c.528 0 1 .112 1.416.336.416.224.736.548.96.972.2-.4.512-.716.936-.948.424-.24.88-.36 1.368-.36Zm12.469 0c.52 0 .984.108 1.392.324.416.216.74.536.972.96.24.424.36.936.36 1.536V15h-1.356v-3.696c0-.592-.148-1.044-.444-1.356-.296-.32-.7-.48-1.212-.48s-.92.16-1.224.48c-.296.312-.444.764-.444 1.356V15h-1.356v-3.696c0-.592-.148-1.044-.444-1.356-.296-.32-.7-.48-1.212-.48s-.92.16-1.224.48c-.296.312-.444.764-.444 1.356V15h-1.368V8.388h1.368v.756c.224-.272.508-.484.852-.636a2.7 2.7 0 0 1 1.104-.228c.528 0 1 .112 1.416.336.416.224.736.548.96.972.2-.4.512-.716.936-.948.424-.24.88-.36 1.368-.36Zm10.524 3.252c0 .248-.016.472-.048.672h-5.052c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.476a2.998 2.998 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.176-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788.28-.52.668-.92 1.164-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.488.272.868.656 1.14 1.152.272.488.408 1.052.408 1.692Zm-1.428-.432c-.008-.504-.188-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.472 0-.876.152-1.212.456-.336.296-.536.7-.6 1.212h3.66Zm6.11-2.82c.52 0 .985.108 1.393.324.416.216.74.536.972.96.232.424.348.936.348 1.536V15h-1.356v-3.696c0-.592-.148-1.044-.444-1.356-.296-.32-.7-.48-1.212-.48s-.92.16-1.224.48c-.296.312-.444.764-.444 1.356V15H79.08V8.388h1.368v.756c.224-.272.508-.484.852-.636a2.785 2.785 0 0 1 1.116-.228Zm4.002 3.384c0-.664.136-1.252.408-1.764a3.047 3.047 0 0 1 2.724-1.62c.432 0 .856.096 1.272.288.424.184.76.432 1.008.744V6.12h1.38V15h-1.38v-.996a2.55 2.55 0 0 1-.936.792c-.392.208-.844.312-1.356.312a3.021 3.021 0 0 1-1.584-.432 3.206 3.206 0 0 1-1.128-1.224c-.272-.528-.408-1.124-.408-1.788Zm5.412.024c0-.456-.096-.852-.288-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.984.264-.304.168-.552.42-.744.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.744.792a1.974 1.974 0 0 0 1.968 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Zm9.236-.156c0 .248-.016.472-.048.672h-5.051c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.475a3 3 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.175-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.407-1.788.28-.52.669-.92 1.165-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.487.272.867.656 1.139 1.152.272.488.408 1.052.408 1.692Zm-1.427-.432c-.009-.504-.189-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.473 0-.877.152-1.213.456-.335.296-.535.7-.6 1.212h3.66Zm2.318.564c0-.664.136-1.252.408-1.764a3.047 3.047 0 0 1 2.724-1.62c.432 0 .856.096 1.272.288.424.184.76.432 1.008.744V6.12h1.38V15h-1.38v-.996a2.55 2.55 0 0 1-.936.792c-.392.208-.844.312-1.356.312a3.021 3.021 0 0 1-1.584-.432 3.206 3.206 0 0 1-1.128-1.224c-.272-.528-.408-1.124-.408-1.788Zm5.412.024c0-.456-.096-.852-.288-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.984.264-.304.168-.552.42-.744.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.744.792a1.974 1.974 0 0 0 1.968 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={120}
        y1={22}
        x2={2}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#229642" />
        <Stop offset={1} stopColor="#229642" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
