import { ImageSourcePropType } from 'react-native';
export interface JsonMap {
  [key: string]: ImageSourcePropType;
}
export const Icons: JsonMap = {
  'arrow-left': require('./ic_arrow_left.png'),
  'arrow-right': require('./ic_arrow_right.png'),
  'arrows-out-simple': require('./ic_arrows_out_simple.png'),
  'arrow-down': require('./ic_arrow_down.png'),
  'arrow-up': require('./ic_arrow_up.png'),
  cardholder: require('./ic_cardholder.png'),
  'caret-double-left': require('./ic_caret_double_left.png'),
  'caret-double-right': require('./ic_caret_double_right.png'),
  'caret-down': require('./ic_caret_down.png'),
  'caret-up': require('./ic_caret_up.png'),
  'caret-left': require('./ic_caret_left.png'),
  'caret-right': require('./ic_caret_right.png'),
  eye: require('./ic_eye.png'),
  'eye-slash': require('./ic_eye_slash.png'),
};
