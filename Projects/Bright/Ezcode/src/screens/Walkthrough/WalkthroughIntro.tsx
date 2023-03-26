import React, {memo} from 'react';
import {Image, FlatList} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {TopNavigation, useTheme, Toggle, StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {WalkthroughStackParamList} from 'types/navigation-types';
// ----------------------------- Components -----------------------------------
import {NavigationAction, Container, ButtonIntro} from 'components';
// ----------------------------- Redux -----------------------------------
import {appSelector, switchTheme, ThemeMode} from 'reduxs/reducers/app-reducer';
import {useAppSelector, useAppDispatch} from 'reduxs/store';
// ----------------------------- @Types -----------------------------------
import EvaIcons from 'types/eva-icon-enum';

interface IntroListButtonProps {
  title: string;
  subtitle?: string;
  navigate: keyof WalkthroughStackParamList;
  icon: EvaIcons;
  color: string;
}

const WalkthroughIntro = memo(() => {
  const {navigate} = useNavigation<NavigationProp<WalkthroughStackParamList>>();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const themeMode = useAppSelector(appSelector).theme;
  const dispatch = useAppDispatch();

  const LIST: IntroListButtonProps[] = [
    {
      title: 'Walkthrough 01',
      icon: EvaIcons.Gift,
      color: theme['color-info-300'],
      navigate: 'Walkthrough01',
    },
    {
      title: 'Walkthrough 02',
      icon: EvaIcons.Radio,
      color: theme['text-info-color'],
      navigate: 'Walkthrough02',
    },
    {
      title: 'Walkthrough 03',
      icon: EvaIcons.ClipboardOutline,
      color: theme['text-success-color'],
      navigate: 'Walkthrough03',
    },
    {
      title: 'Walkthrough 04',
      icon: EvaIcons.KeypadOutline,
      color: theme['text-primary-color'],
      navigate: 'Walkthrough04',
    },
    {
      title: 'Walkthrough 05',
      icon: EvaIcons.BatteryOutline,
      color: theme['color-danger-800'],
      navigate: 'Walkthrough05',
    },
    {
      title: 'Walkthrough 06',
      icon: EvaIcons.CameraOutline,
      color: theme['text-warning-color'],
      navigate: 'Walkthrough06',
    },
    {
      title: 'Walkthrough 07',
      icon: EvaIcons.NpmOutline,
      color: theme['color-info-300'],
      navigate: 'Walkthrough07',
    },
    {
      title: 'Walkthrough 08',
      icon: EvaIcons.MapOutline,
      color: theme['color-primary-800'],
      navigate: 'Walkthrough08',
    },
    {
      title: 'Walkthrough 09',
      icon: EvaIcons.InboxOutline,
      color: theme['color-info-800'],
      navigate: 'Walkthrough09',
    },
    {
      title: 'Walkthrough 10',
      icon: EvaIcons.Globe,
      color: theme['text-danger-color'],
      navigate: 'Walkthrough10',
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title={'Walkthrough'}
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <Toggle
            status="success"
            checked={themeMode === ThemeMode.LIGHT}
            onChange={() => {
              dispatch(
                switchTheme(
                  themeMode === ThemeMode.DARK
                    ? ThemeMode.LIGHT
                    : ThemeMode.DARK,
                ),
              );
            }}
          />
        }
      />
      <FlatList
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Image
            source={Images.banner}
            borderBottomLeftRadius={24}
            borderBottomRightRadius={24}
            style={{width: width - 8, alignSelf: 'center', height: 220}}
          />
        )}
        showsVerticalScrollIndicator={false}
        data={LIST}
        overScrollMode="always"
        renderItem={({item, index}) => {
          const {icon, title, color} = item;
          return (
            <ButtonIntro
              color={color}
              icon={icon}
              title={title}
              onPress={() => {
                navigate(item.navigate);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default WalkthroughIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  layoutIcon: {
    padding: 12,
    backgroundColor: 'background-basic-color-2',
    borderRadius: 12,
  },
  content: {
    gap: 24,
    paddingBottom: 60,
  },
  indicator: {
    backgroundColor: 'red',
  },
});
