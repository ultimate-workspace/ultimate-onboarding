import EvaIcons from 'types/eva-icon-enum';
import * as React from 'react';
import {
  DividerProps,
  LayoutProps,
  TextElement,
  TextProps,
} from '@ui-kitten/components';
import {EvaStatus} from '@ui-kitten/components/devsupport';
import {SharedValue} from 'react-native-reanimated';
import {
  GestureResponderEvent,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native/types';
import {NameIcon} from './iconpack-name';

// -------------------------------- AnimatedBottomView --------------------------------
export interface AnimatedBottomViewProps {
  progress: SharedValue<number>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  useSafeArea?: boolean;
}

// -------------------------------- Container --------------------------------
export interface ContainerProps extends LayoutProps {
  useSafeArea?: boolean;
}

// -------------------------------- Content --------------------------------
export interface ContentProps extends ScrollViewProps {
  padder?: boolean;
  level?: '1' | '2' | '3' | '4' | '5';
}

// -------------------------------- NavigationAction --------------------------------
export interface NavigationActionProps {
  icon?: EvaIcons;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  borderRadius?: number;
  borderWidth?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
  title?: string;
  titleStatus?: EvaStatus | 'placeholder' | 'white';
  size?: 'giant' | 'large' | 'medium' | 'small';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  status?:
    | 'basic'
    | 'white'
    | 'primary'
    | 'warning'
    | 'placeholder'
    | 'warning-fill';
}

// -------------------------------- CustomLayout --------------------------------
export interface ILayoutCustomProps extends LayoutProps {
  padder?: boolean;
  mt?: number;
  style?: StyleProp<ViewStyle>;
  mb?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  ph?: number;
  pt?: number;
  pl?: number;
  pv?: number;
  pb?: number;
  maxWidth?: number;
  minWidth?: number;
  padding?: number;
  border?: number;
  margin?: number;
  opacity?: number;
  alignSelfCenter?: boolean;
  itemsCenter?: boolean;
  wrap?: boolean;
  columnGap?: number;
  gap?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
  rowGap?: number;
  horizontal?: boolean;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  onPress?(): void;
  onLongPress?: (event: GestureResponderEvent) => void;
  level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | string;
  justify?:
    | 'center'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

// -------------------------------- ProgressBar --------------------------------
export interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  progress: number;
  styleBar?: StyleProp<ViewStyle>;
  progressColor?: string;
  containColor?: string;
}

// -------------------------------- Text --------------------------------
export type TextSizeCategory =
  | 'giant'
  | 'header'
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'subhead'
  | 'footnote'
  | 'c1'
  | 'c2'
  | 's1'
  | 's2'
  | 'p1'
  | 'p2';

export type TextStatusCategory =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'control'
  | 'placeholder'
  | 'white'
  | 'black'
  | 'caption'
  | 'grey'
  | 'chambrey'
  | 'platinum';

type ReactText = string | number;
declare type ChildElement = ReactText | TextElement;
export interface MyTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  category?: TextSizeCategory;
  status?: TextStatusCategory;
  children?: ChildElement | ChildElement[] | undefined;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
  maxWidth?: number;
  fontSize?: number;
  lineHeight?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  none?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
  onPress?: () => void;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

// -------------------------------- RoundedButton --------------------------------
export interface IRoundedButtonProps {
  onPress?(): void;
  status?: 'basic' | 'placeholder' | 'primary' | 'transparent';
  icon?: string;
  size?: number;
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
// -------------------------------- LinearGradientText --------------------------------
export type ILinearGradientTextProps = {
  text: string | React.ReactNode;
  textStyle?: TextStyle;
  colors?: string[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
};

// -------------------------------- Dividers --------------------------------
export interface IDividerProps extends DividerProps {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
  style?: ViewStyle;
  level?: string;
}
