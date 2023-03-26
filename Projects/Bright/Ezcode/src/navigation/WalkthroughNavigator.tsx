import * as React from 'react';
import {WalkthroughStackParamList} from 'types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Walkthrough01 from 'screens/Walkthrough/Walkthrough01';
import Walkthrough02 from 'screens/Walkthrough/Walkthrough02';
import Walkthrough03 from 'screens/Walkthrough/Walkthrough03';
import Walkthrough04 from 'screens/Walkthrough/Walkthrough04';
import Walkthrough05 from 'screens/Walkthrough/Walkthrough05';
import WalkthroughIntro from 'screens/Walkthrough/WalkthroughIntro';
// import Walkthrough06 from 'screens/Walkthrough/Walkthrough06';
// import Walkthrough07 from 'screens/Walkthrough/Walkthrough07';
// import Walkthrough08 from 'screens/Walkthrough/Walkthrough08';
// import Walkthrough09 from 'screens/Walkthrough/Walkthrough09';
// import Walkthrough10 from 'screens/Walkthrough/Walkthrough10';

const Stack = createNativeStackNavigator<WalkthroughStackParamList>();

const WalkthroughNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="WalkthroughIntro">
      <Stack.Screen name="WalkthroughIntro" component={WalkthroughIntro} />
      <Stack.Screen name="Walkthrough01" component={Walkthrough01} />
      <Stack.Screen name="Walkthrough02" component={Walkthrough02} />
      <Stack.Screen name="Walkthrough03" component={Walkthrough03} />
      <Stack.Screen name="Walkthrough04" component={Walkthrough04} />
      <Stack.Screen name="Walkthrough05" component={Walkthrough05} />
      {/* <Stack.Screen name="Walkthrough06" component={Walkthrough06} />
      <Stack.Screen name="Walkthrough07" component={Walkthrough07} />
      <Stack.Screen name="Walkthrough08" component={Walkthrough08} />
      <Stack.Screen name="Walkthrough09" component={Walkthrough09} />
      <Stack.Screen name="Walkthrough10" component={Walkthrough10} /> */}
    </Stack.Navigator>
  );
};
export default WalkthroughNavigator;
