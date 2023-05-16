import React from 'react';
import {Image} from 'react-native'
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- Components && Elements -----------------------
import {CustomLayout, Text} from 'components';
import { Images } from 'assets/images';
import { useLayout } from 'hooks';

const ListEmptyDoctor = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const {width}=useLayout()
  return (
    <CustomLayout style={styles.container}>
     <Image source={Images.empty} style={{width:width,height:width}}/>
     <CustomLayout mh={24}gap={8}>
     <Text category='t5' center>Not found</Text>
     <Text category='subhead' center>Sorry, the keyword you entered cannot be found, please check again or search with another keyword.</Text>
     </CustomLayout>
    </CustomLayout>
  );
});

export default ListEmptyDoctor;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
