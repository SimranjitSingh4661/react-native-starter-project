import React, {useState, forwardRef} from 'react';
import {TextInput, View, Text, Pressable} from 'react-native';
import {COLORS} from '../../../constants';
import {ErrorIcon} from '../../../asstes/SVGs';
import styles from './styles';

export default forwardRef(
  (
    {
      error,
      onPress = null,
      leftIcon = null,
      rightIcon = null,
      editable = true,
      isCount = false,
      isValid = false,
      totalDigits = null,
      isCounterWhite = false,
      containerStyle = {},
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const counterColor = isCounterWhite ? COLORS.white : COLORS.textGray;
    let borderColor = onPress ? COLORS.white : editable ? '#CCCCCC' : '#CCCDD6';
    const backgroundColor = onPress
      ? COLORS.white
      : editable
      ? error
        ? 'grey'
        : COLORS.white
      : COLORS.lightBlue;

    if (isFocused) borderColor = COLORS.blue;
    if (error) borderColor = COLORS.red;
    if (isValid) borderColor = COLORS.golden;

    return (
      <Pressable onPress={editable ? null : onPress}>
        <View
          style={[
            styles.container,
            {backgroundColor, borderColor},
            containerStyle,
          ]}>
          {leftIcon}
          <TextInput
            ref={ref}
            editable={editable}
            {...props}
            placeholderTextColor={COLORS.textGray}
            style={[
              styles.textInput,
              {marginLeft: leftIcon ? 6 : 0},
              props?.style,
            ]}
            onFocus={() => {
              setIsFocused(true);
              props?.onFocus?.();
            }}
            onBlur={e => {
              setIsFocused(false);
              props?.onBlur?.(e);
            }}
          />
          {rightIcon}
        </View>
        {!!error ? (
          <View style={styles.errorContainer}>
            <ErrorIcon style={styles.icon} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : totalDigits ? (
          <Text style={[styles.digitCount, {color: counterColor}]}>
            {isCount
              ? `${props?.value?.length}/${totalDigits || 0}`
              : totalDigits}
          </Text>
        ) : null}
      </Pressable>
    );
  },
);
