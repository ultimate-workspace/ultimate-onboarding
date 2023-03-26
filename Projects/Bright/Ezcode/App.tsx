import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// ------------------------------- UI Kitten -----------------------------------
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// ------------------------------- App Container -------------------------------
import AppContainer from 'navigation/AppContainer';

// ------------------------------- Assets Icon ---------------------------------
import AssetsIconsPack from 'assets/AssetsIconsPack';

// ------------------------------- Reduxs --------------------------------------
import {Provider} from 'react-redux';
import {persistor, store} from 'reduxs/store';
import {PersistGate} from 'redux-persist/integration/react';

// ------------------------------- Components ----------------------------------
import { AppMessage } from 'components';
export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <IconRegistry icons={[AssetsIconsPack, EvaIconsPack]} />
            <AppContainer />
            <AppMessage />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
