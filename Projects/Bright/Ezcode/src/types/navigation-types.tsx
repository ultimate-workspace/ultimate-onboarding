import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  SplashScreen: undefined;
  Settings: RouteProp<SettingStackParamList> | undefined;
  Walkthrough: RouteProp<WalkthroughStackParamList> | undefined;
  Authenticate: RouteProp<WalkthroughStackParamList> | undefined;
  Profile: RouteProp<WalkthroughStackParamList> | undefined;
  SlideMenu: RouteProp<WalkthroughStackParamList> | undefined;
  Dashboard: RouteProp<WalkthroughStackParamList> | undefined;
  Finance: RouteProp<WalkthroughStackParamList> | undefined;
};
export type SettingStackParamList = {
  Home: undefined;
  Theme:undefined;
};
export type WalkthroughStackParamList = {
  WalkthroughIntro: undefined;
  Walkthrough01: undefined;
  Walkthrough02: undefined;
  Walkthrough03: undefined;
  Walkthrough04: undefined;
  Walkthrough05: undefined;
  Walkthrough06: undefined;
  Walkthrough07: undefined;
  Walkthrough08: undefined;
  Walkthrough09: undefined;
  Walkthrough10: undefined;
};
