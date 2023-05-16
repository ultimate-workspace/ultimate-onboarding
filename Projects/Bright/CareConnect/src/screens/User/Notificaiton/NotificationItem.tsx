import React from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, useTheme} from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Hooks ---------------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Components && Elements -----------------------
import {AppIcon, CustomLayout, IDivider, ReadMoreText, Text} from 'components';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
// ----------------------------- Types -----------------------
import EvaIcons from 'types/eva-icon-enum';
import dayjs from 'dayjs';
import {Animated, TouchableOpacity} from 'react-native';

export interface INotificationItemProps {
  type: 'success' | 'primary' | 'danger' | 'warning';
  title: string;
  createAt: string;
  describe: string;
  readed: boolean;
}

const NotificationItem = ({
  data,
  lastItem,
}: {
  data: INotificationItemProps;
  lastItem: boolean;
}) => {
  const {type, title, createAt, describe, readed} = data;
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();

  const ButtonAnimation = Animated.createAnimatedComponent(TouchableOpacity);

  const renderIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <CustomLayout
            padding={12}
            border={99}
            style={{backgroundColor: `${theme['color-danger-default']}40`}}>
            <AppIcon
              name={EvaIcons.CloseSquare}
              fill={theme['color-danger-default']}
            />
          </CustomLayout>
        );
      case 'primary':
        return (
          <CustomLayout
            padding={12}
            border={99}
            style={{backgroundColor: `${theme['color-primary-default']}40`}}>
            <AppIcon
              name={EvaIcons.FileAdd}
              fill={theme['color-primary-default']}
            />
          </CustomLayout>
        );
      case 'warning':
        return (
          <CustomLayout
            border={99}
            padding={12}
            style={{backgroundColor: `${theme['color-warning-default']}40`}}>
            <AppIcon
              name={EvaIcons.Browser}
              fill={theme['color-warning-default']}
            />
          </CustomLayout>
        );
      case 'success':
        return (
          <CustomLayout
            border={99}
            padding={12}
            style={{backgroundColor: `${theme['color-success-default']}40`}}>
            <AppIcon
              name={EvaIcons.Calendar}
              fill={theme['color-success-default']}
            />
          </CustomLayout>
        );
      default:
        break;
    }
  };
  const size_button = 80 * (width / 375);
  const renderLeftActions = (
    progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const scale = dragAnimatedValue.interpolate({
      inputRange: [0, 20, 80, 100],
      outputRange: [0, 0.3, 1, 1],
    });
    return (
      <>
        <ButtonAnimation
          onPress={() => {}}
          style={{
            transform: [{scale}],
            alignItems: 'center',
            justifyContent: 'center',
            width: size_button,
            backgroundColor: theme['text-danger-color'],
            borderWidth: 0.5,
            borderRadius: 4,
            borderColor: theme['text-basic-color'],
          }}>
          <AppIcon
            name={EvaIcons.Trash2Outline}
            fill={theme['text-white-color']}
          />
        </ButtonAnimation>
      </>
    );
  };
  const renderRightActions = (
    progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const scale = dragAnimatedValue.interpolate({
      inputRange: [-180, -140, -100, -50, 0],
      outputRange: [1, 1, 0.8, 0.5, 0],
    });
    return (
      <Animated.View style={{transform: [{scale}]}}>
        <CustomLayout
          horizontal
          style={{flex: 1, borderWidth: 1, borderColor: 'transparent'}}>
          <RectButton
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: size_button,
              backgroundColor: theme['text-primary-color'],
              borderWidth: 0.5,
              borderRadius: 4,
              borderColor: theme['text-basic-color'],
            }}
            onPress={() => {}}>
            <AppIcon
              name={EvaIcons.PhoneCall}
              fill={theme['text-white-color']}
            />
          </RectButton>
          <RectButton
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme['text-success-color'],
              paddingHorizontal: 24,
              width: size_button,
              borderWidth: 0.5,
              borderColor: theme['text-basic-color'],
              borderRadius: 4,
            }}
            onPress={() => {}}>
            <AppIcon name={EvaIcons.Email} fill={theme['text-white-color']} />
          </RectButton>
          <RectButton
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme['text-danger-color'],
              paddingHorizontal: 24,
              width: size_button,
              borderWidth: 0.5,
              borderColor: theme['text-basic-color'],
              borderRadius: 4,
            }}
            onPress={() => {}}>
            <AppIcon
              name={EvaIcons.CalendarOutline}
              fill={theme['text-white-color']}
            />
          </RectButton>
        </CustomLayout>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      rightThreshold={0}>
      <CustomLayout style={styles.container} level="1">
        <CustomLayout horizontal itemsCenter gap={16} mb={16} mh={16}>
          {renderIcon()}
          <CustomLayout gap={4}>
            <Text category="body">{title}</Text>
            <Text status="placeholder" category="subhead">
              {dayjs(createAt).format('DD MMM, YYYY | hh:mm A')}
            </Text>
          </CustomLayout>
        </CustomLayout>
        <Text category="subhead" marginHorizontal={16} status="platinum">
          {describe}
        </Text>
        {!lastItem && <IDivider marginTop={8} />}
        {readed && (
          <CustomLayout style={styles.read}>
            <Text status="white" category="c1">
              {'New'}
            </Text>
          </CustomLayout>
        )}
      </CustomLayout>
    </Swipeable>
  );
};

export default NotificationItem;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  read: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: 'color-primary-default',
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
