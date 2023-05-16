import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from 'types/navigation-types';
import {BottomTabNavigator} from './BottomTabNavigator';

import NotificationScreen from 'screens/User/Notificaiton';
import SearchScreen from 'screens/User/SearchScreen';
// --------------------------------  Message/Call ----------------------------------------
import DetailsDoctor from 'screens/User/DetailsDoctor';
import FavoriteDoctor from 'screens/User/FavoriteDotor';
// --------------------------------  Message/Call ----------------------------------------
import ChatScreen from 'screens/User/ChatScreen';
import HistoryChatScreen from 'screens/User/ChatScreen/HistoryChatScreen';
// --------------------------------  Appoiments ----------------------------------------
import AppointmentDetails from 'screens/User/Appoiments/AppointmentDetails';
import CancelAppoiment from 'screens/User/Appoiments/CancelAppoiment';
import RescheduleAppointment from 'screens/User/Appoiments/RescheduleAppointment';
import VoiceCallScreen from 'screens/User/ChatScreen/VoiceCallScreen';
import VideoCallScreen from 'screens/User/ChatScreen/VideoCallScreen';
import AppointmentFinish from 'screens/User/ChatScreen/AppointmentFinish';
import WriteReviewScreen from 'screens/User/ChatScreen/WriteReviewScreen';
// --------------------------------  Articles ----------------------------------------
import ArticlesDetails from 'screens/User/ArticlesDetails';
import ArticlesScreen from 'screens/User/ArticlesScreen';
import ArticlesBookmark from 'screens/User/ArticlesBookmark';
import EditProfile from 'screens/User/EditProfile';
import SettingsScreen from 'screens/User/Settings';
import PaymentsScreen from 'screens/User/Payments';
import SecurityScreen from 'screens/User/Security';
import LanguageScreen from 'screens/User/Language';
import HelpCenter from 'screens/User/HelpCenter';
import InviteFriends from 'screens/User/InviteFriend';

const Stack = createStackNavigator<MainStackParamList>();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabNavigator'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* Doctor */}
      <Stack.Screen name="FavoriteDoctor" component={FavoriteDoctor} />
      <Stack.Screen name="DetailsDoctor" component={DetailsDoctor} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />

      {/* Messages */}
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="VoiceCallScreen" component={VoiceCallScreen} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
      <Stack.Screen name="AppointmentFinish" component={AppointmentFinish} />
      <Stack.Screen name="HistoryChatScreen" component={HistoryChatScreen} />
      <Stack.Screen name="WriteReviewScreen" component={WriteReviewScreen} />
      
      {/* Articles */}
      <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
      <Stack.Screen name="ArticlesBookmark" component={ArticlesBookmark} />
      <Stack.Screen name="ArticlesDetails" component={ArticlesDetails} />
      {/* Appoiments */}
      <Stack.Screen name="CancelAppoiment" component={CancelAppoiment} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen
        name="RescheduleAppointment"
        component={RescheduleAppointment}
      />
      {/* Notification */}
      <Stack.Screen name="Notification" component={NotificationScreen} />
      {/* User */}
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
    </Stack.Navigator>
  );
}
