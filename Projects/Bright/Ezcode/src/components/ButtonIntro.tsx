import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {useTheme, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Types -----------------------------------
import EvaIcons from 'types/eva-icon-enum';
// ----------------------------- Components -----------------------------------
import {AppIcon} from './AppIcon';
import LayoutCustom from './LayoutCustom';
import Text from './Text';
import _ from 'lodash';

interface IButtonIntroProps {
  title: string;
  subtitle?: string;
  icon: EvaIcons;
  onPress?(): void;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonIntro = ({
  title,
  style,
  subtitle,
  color,
  icon,
  onPress,
}: IButtonIntroProps) => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <LayoutCustom
      horizontal
      style={[styles.container, style]}
      onPress={onPress}>
      <LayoutCustom
        style={[
          styles.layoutIcon,
          {
            backgroundColor: color,
          },
        ]}>
        <AppIcon name={icon} size={40} fill={theme['text-white-color']} />
      </LayoutCustom>
      <LayoutCustom style={styles.layoutTitle} level="3" gap={8}>
        <Text category="h4">{title}</Text>
        {subtitle && <Text category="h4">{subtitle}</Text>}
      </LayoutCustom>
      <LayoutCustom
        style={[
          styles.chervron,
          {
            backgroundColor: color,
          },
        ]}>
        <AppIcon
          name={EvaIcons.ChevronRight}
          size={28}
          fill={theme['text-white-color']}
        />
      </LayoutCustom>
    </LayoutCustom>
  );
};

export default ButtonIntro;

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'flex-start',
    gap: 16,
    flex: 1,
    marginHorizontal: 16,
  },
  layoutIcon: {
    padding: 10,
    borderRadius: 16,
  },
  layoutTitle: {
    borderRadius: 10,
    flex: 1,
    height: '100%',
    marginRight: 16,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  chervron: {
    position: 'absolute',
    borderRadius: 99,
    right: 4,
    alignSelf: 'center',
  },
});
