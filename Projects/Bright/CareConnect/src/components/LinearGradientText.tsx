import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {appSelector, ThemeMode} from 'reduxs/reducers/app-reducer';
import {useAppSelector} from 'reduxs/store';
import {ILinearGradientTextProps} from 'types/component-types';

export const LinearGradientText: FC<ILinearGradientTextProps> = props => {
  const theme = useAppSelector(appSelector).theme;
  const {
    text,
    textStyle = {},
    colors = ['#CE8ABC', '#5784E8'],
    start = {x: 0.6, y: 1},
    end = {x: 0, y: 0.2},
  } = props;

  return (
    // @ts-ignore
    <MaskedView
      maskElement={<Text style={[styles.maskText, textStyle]}>{text}</Text>}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        children={<Text style={[styles.text, textStyle]}>{text}</Text>}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskText: {
    backgroundColor: 'transparent',
  },
  text: {
    opacity: 0,
  },
});
