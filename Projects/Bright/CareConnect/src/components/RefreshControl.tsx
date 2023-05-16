import * as React from 'react';
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps as RNRefreshControlProps,
  StyleSheet,
  View,
} from 'react-native';
import {Spinner, SpinnerProps} from '@ui-kitten/components';

export interface RefreshControlProps
  extends Omit<RNRefreshControlProps, 'size'>,
    SpinnerProps {}

export type RefreshControlElement = React.ReactElement<RefreshControlProps>;

const NATIVE_REFRESH_CONTROL_COLOR: string = 'transparent';
const RefreshControl = (props: RefreshControlProps) => {
  const {style, refreshing, status, size, animating, ...restProps} = props;
  return (
    <RNRefreshControl
      {...restProps}
      style={styles.container}
      refreshing={refreshing}
      tintColor={NATIVE_REFRESH_CONTROL_COLOR}
      colors={[NATIVE_REFRESH_CONTROL_COLOR]}>
      <View style={[styles.spinnerContainer, style]}>
        <Spinner status={status} size={size} animating={animating} />
      </View>
    </RNRefreshControl>
  );
};

export default RefreshControl;
const styles = StyleSheet.create({
  container: {
    height: 0,
  },
  spinnerContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
