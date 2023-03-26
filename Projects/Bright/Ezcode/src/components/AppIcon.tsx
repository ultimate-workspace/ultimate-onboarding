import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {
  ColorValue,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {IconAnimationRegistry} from 'react-native-eva-icons/animation';
import EvaIcons from 'types/eva-icon-enum';
import {waitUtil} from 'utils/waitUtil';

interface AppIcon {
  name?: EvaIcons;
  size?: number;
  fill?: ColorValue;
  animation?: keyof IconAnimationRegistry;
  duration?: number;
  buttonStyle?: StyleProp<ViewStyle>;
  layoutIconStyle?: StyleProp<ViewStyle>;
  onPress?(): void;
  children?: React.ReactNode;
}

export const AppIcon = ({
  name = EvaIcons.ArrowBackOutline,
  size = 24,
  fill,
  animation,
  duration = 375,
  buttonStyle,
  onPress,
  children,
  layoutIconStyle,
}: AppIcon) => {
  const iconRef: React.RefObject<Icon> = React.createRef();
  const theme = useTheme();
  const onIconPress = () => {
    // iconRef.current?.startAnimation();
    // waitUtil(duration).then(() => {
    //   iconRef.current?.stopAnimation();
    // });
    // waitUtil(duration - 100).then(() => {
    // });
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      onPressIn={onIconPress}
      style={buttonStyle}
      disabled={!onPress}
      activeOpacity={0.54}>
      <View style={layoutIconStyle}>
        <Icon
          ref={iconRef}
          // animation={animation}
          name={name}
          width={size}
          fill={fill ? fill : theme['text-basic-color']}
          height={size}
          // animationConfig={{
          //   cycles: duration,
          //   useNativeDriver: true,
          // }}
        />
      </View>
      {children}
    </TouchableOpacity>
  );
};
