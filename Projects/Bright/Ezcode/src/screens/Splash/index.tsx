import React, {memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  TopNavigation,
  useStyleSheet,
  useTheme,
  ViewPager,
} from '@ui-kitten/components';
import type {TAnimationStyle} from 'react-native-reanimated-carousel/src/layouts/BaseLayout';
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  Text,
  LinearGradientText,
  LayoutCustom,
  TabBar,
} from 'components';
import {appSelector, switchTheme, ThemeMode} from 'reduxs/reducers/app-reducer';
import {useAppDispatch, useAppSelector} from 'reduxs/store';
import {useLayout} from 'hooks';
import {faker} from '@faker-js/faker';
import ScreenList from './ScreenList';
import {AppIcon} from 'components/AppIcon';
import _ from 'lodash';
import EvaIcons from 'types/eva-icon-enum';
import ThemeList from './ThemeList';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'types/navigation-types';

const SplashScreen = memo(() => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const {width, height} = useLayout();
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        title={() => (
          <LinearGradientText textStyle={styles.text} text={'EzCode'} />
        )}
        accessoryRight={() => {
          return (
            <LayoutCustom>
              <AppIcon
                buttonStyle={styles.settings}
                onPress={() => {
                  navigate('Settings');
                }}
                name={EvaIcons.Settings2}
                animation="shake"
                duration={270}
              />
            </LayoutCustom>
          );
        }}
      />
      <TabBar
        tabs={['Screen List', 'Theme List']}
        tabActive={activeTab}
        onChangeTab={setActiveTab}
        style={styles.tabBarStyle}
      />
      <Content contentContainerStyle={styles.content}>
        <ViewPager
          style={{flex: 1}}
          selectedIndex={activeTab}
          onSelect={setActiveTab}
          swipeEnabled={false}>
          <ScreenList />
          <ThemeList />
        </ViewPager>
      </Content>
    </Container>
  );
});

export default SplashScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },

  theme: {
    width: 56,
    height: 56,
  },
  logo: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 32,
    lineHeight: 46,
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 40,
  },
  tabBarStyle: {
    marginHorizontal: 24,
  },
  settings: {
    backgroundColor: 'background-basic-color-5',
    padding: 8,
    borderRadius: 8,
  },
});
