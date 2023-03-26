import React, {memo} from 'react';
import {FlatList, TouchableOpacity, Linking} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, TopNavigation, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- @Types -----------------------------------
import EvaIcons from 'types/eva-icon-enum';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Redux -----------------------------------
import {useAppDispatch, useAppSelector} from 'reduxs/store';
import {appSelector, switchTheme, ThemeMode} from 'reduxs/reducers/app-reducer';
// ----------------------------- Components -----------------------------------
import {NavigationAction, Container, AppIcon, Text} from 'components';

const SettingScreen = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const themeMode = useAppSelector(appSelector).theme;
  const dispatch = useAppDispatch();

  const LIST_BUTTON = [
    {
      title: 'Switch Theme',
      icon: themeMode === ThemeMode.DARK ? EvaIcons.Sun : EvaIcons.MoonOutline,
      onPress: () => {
        dispatch(
          switchTheme(
            themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK,
          ),
        );
      },
    },
    {
      title: 'Documentation',
      icon: EvaIcons.FileTextOutline,
      onPress: () => {},
    },
    {
      title: 'Contact Us',
      icon: EvaIcons.EmailOutline,
      onPress: () => {
        Linking.openURL('');
      },
    },
    {
      title: 'About Us',
      icon: EvaIcons.InfoOutline,
      onPress: () => {},
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title={'Settings'}
        accessoryLeft={<NavigationAction />}
      />
      <FlatList
        data={LIST_BUTTON}
        numColumns={2}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={item.onPress}
              activeOpacity={0.7}
              style={[styles.button, {width: (width - 56) / 2}]}>
              <AppIcon name={item.icon} size={36} />
              <Text category="h4">{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
});

export default SettingScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  buttonTheme: {
    backgroundColor: 'background-basic-color-5',
    padding: 8,
    borderRadius: 8,
  },
  button: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'background-basic-color-5',
    padding: 16,
    gap: 8,
    marginHorizontal: 8,
  },
  content: {},
  contentContainer: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    rowGap: 16,
  },
});
