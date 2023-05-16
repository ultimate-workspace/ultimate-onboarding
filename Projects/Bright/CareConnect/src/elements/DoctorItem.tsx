import React from 'react';
import {TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
  Icon,
  Divider,
} from '@ui-kitten/components';
// ----------------------------- Components && Elements -----------------------
import {AppIcon, CustomLayout, Text} from 'components';
// ----------------------------- @Types ---------------------------------------
import EvaIcons from 'types/eva-icon-enum';
import {IDoctorProps} from 'types/element-types';

import {useLayout} from 'hooks';
import {globalStyle} from 'styles/globalStyle';

const DoctorItem = React.memo(({data}: {data: IDoctorProps}) => {
  const theme = useTheme();
  const {width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <CustomLayout level="1" style={styles.container} horizontal gap={12}>
      {/* @ts-ignore */}
      <Avatar source={data.avatar} size="medium" style={styles.avatar} />
      <CustomLayout style={{flex: 1}}>
        <CustomLayout horizontal justify="space-between">
          <Text category="t5" numberOfLines={1} maxWidth={200 * (width / 375)}>
            {data.name}
          </Text>
          <TouchableOpacity>
            <Icon
              pack="assets"
              name={!data.isFavorite ? 'favorite' : 'favorite_fill'}
              style={[
                styles.icon,
                data.isFavorite && {tintColor: theme['text-danger-color']},
              ]}
            />
          </TouchableOpacity>
        </CustomLayout>
        <Divider style={styles.divider} />
        <Text
          category="subhead"
          status="platinum"
          marginBottom={8}
          numberOfLines={1}>
          {data.specialty} | {data.hospital}
        </Text>
        <CustomLayout horizontal itemsCenter gap={8} mb={8}>
          <AppIcon
            name={EvaIcons.Star}
            fill={theme['text-warning-color']}
            size={16}
          />
          <Text category="c1" status="platinum">
            {data.totalRating}
          </Text>
          {data.reviews.length>0&&<Text category="c1" fontWeight={'400'} status="platinum">
            ( {data.reviews.length.toLocaleString()} reviews )
          </Text>}
        </CustomLayout>
      </CustomLayout>
    </CustomLayout>
  );
});

export default DoctorItem;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    ...globalStyle.shadow,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'background-basic-color-7',
    opacity: 0.5,
    marginVertical: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-primary-color',
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 99,
    borderColor: 'text-primary-color',
  },
});
