import React, {memo} from 'react';
import {View, Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {select} from 'd3-selection';
import Svg, {G, Path} from 'react-native-svg';
// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import {NavigationAction, Container, Content, Text} from 'components';

const ThemeList = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const _data = [
    {id: 'A', label: 'Category A', value: 10},
    {id: 'B', label: 'Category B', value: 20},
    {id: 'C', label: 'Category C', value: 30},
  ];
  const defaultGraphicData = [
    {x: 'Liquid', y: 0},
    {x: 'Iced', y: 0},
    {x: 'Total', y: 100},
  ];
  return (
    <Container style={styles.container}>
      
    </Container>
  );
});

export default ThemeList;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor:'#0D0D14'
  },
});
const data = [
  {
    id: 'python',
    label: 'python',
    value: 138,
    color: 'hsl(330, 70%, 50%)',
  },
  {
    id: 'c',
    label: 'c',
    value: 284,
    color: 'hsl(100, 70%, 50%)',
  },
  {
    id: 'sass',
    label: 'sass',
    value: 462,
    color: 'hsl(310, 70%, 50%)',
  },
  {
    id: 'haskell',
    label: 'haskell',
    value: 368,
    color: 'hsl(337, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 473,
    color: 'hsl(109, 70%, 50%)',
  },
];
