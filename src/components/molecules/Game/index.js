import {useState, useEffect, useRef, Fragment} from 'react';
import {Text, View, Pressable} from 'react-native';
import SlotMachine from 'react-native-slot-machine';
import {COLORS, SCREEN, SCREEN_PADDING} from '../../../constants';
import {SpinButton} from '../../../asstes/SVGs';

const {HEIGHT, WIDTH} = SCREEN;

const slotW = WIDTH / 3;

export default function App() {
  const [slotSettings, setSlotSettings] = useState({
    duration: 4000,
    slot1: '111',
    slot2: '345',
    slot3: '787',
  });
  const slotRef1 = useRef(null);
  const slotRef2 = useRef(null);
  const slotRef3 = useRef(null);

  useEffect(() => {}, []);

  const symbols = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌']; 
  return (
    <Fragment>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: SCREEN_PADDING,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <View
          style={{
            height: 200,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <SlotMachine
            text={slotSettings.slot1}
            width={slotW}
            padding={0}
            ref={slotRef1}
            renderContent={c => (
              <Text style={{fontSize: 25}}>{symbols[c]}</Text>
            )}
            duration={slotSettings.duration}
          />
          <SlotMachine
            text={slotSettings.slot2}
            width={slotW}
            padding={0}
            ref={slotRef2}
            renderContent={c => (
              <Text style={{fontSize: 25}}>{symbols[c]}</Text>
            )}
            duration={slotSettings.duration}
          />
          <SlotMachine
            text={slotSettings.slot3}
            width={slotW}
            padding={0}
            ref={slotRef3}
            renderContent={c => (
              <Text style={{fontSize: 25}}>{symbols[c]}</Text>
            )}
            duration={slotSettings.duration}
          />
        </View>
      </View>
      <Pressable
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          slotRef1?.current?.spinTo?.('123');
          slotRef2?.current?.spinTo?.('456');
          slotRef3?.current?.spinTo?.('234');
        }}>
        <SpinButton />
      </Pressable>
    </Fragment>
  );
}
