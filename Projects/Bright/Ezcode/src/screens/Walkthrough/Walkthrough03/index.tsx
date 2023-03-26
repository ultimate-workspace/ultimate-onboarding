import React, { memo } from 'react';
import { View,Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation,useTheme ,StyleService,useStyleSheet} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks'
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import {NavigationAction,Container,Content,Text} from 'components';

const Walkthrough03 = memo(() => {
const { goBack } = useNavigation()
const { height, width,top, bottom } = useLayout();
const theme = useTheme();
const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation />
      <Content>
        <Text>Walkthrough03</Text>
      </Content>
    </Container>
  );
});

export default Walkthrough03;

const themedStyles = StyleService.create({
  container: {
flex: 1,
  },
});
