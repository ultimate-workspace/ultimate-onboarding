import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, useTheme} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Assets -----------------------------------
// ----------------------------- Components -----------------------------------
import {LayoutCustom, Text} from 'components';
// ----------------------------- Reanimated 2 -----------------------------------
import EvaIcons from 'types/eva-icon-enum';
import {AppIcon} from 'components/AppIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'types/navigation-types';

const ScreenList = memo(() => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  const DATA: {
    title: string;
    name?: EvaIcons;
    navigate: keyof RootStackParamList;
  }[] = [
    {
      title: 'Walkthrough',
      name: EvaIcons.ColorPalette,
      navigate: 'Walkthrough',
    },
    {title: 'Authenticate', name: EvaIcons.Smartphone, navigate: 'Walkthrough'},
    {title: 'Profile', name: EvaIcons.People, navigate: 'Walkthrough'},
    {
      title: 'Slide Menu',
      name: EvaIcons.ArchiveOutline,
      navigate: 'Walkthrough',
    },
    {title: 'Dashboard', name: EvaIcons.Activity, navigate: 'Walkthrough'},
    {title: 'List, Section List', name: EvaIcons.List, navigate: 'Walkthrough'},
    {title: 'Finance', name: EvaIcons.Pantone, navigate: 'Walkthrough'},
  ];
  return (
    <LayoutCustom style={styles.container}>
      {DATA.map((item, i) => {
        return (
          <AppIcon
            key={i}
            name={item.name}
            fill={theme['text-basic-color']}
            onPress={() => {
              item.navigate && navigate(item.navigate);
            }}
            size={32}
            buttonStyle={styles.button}
            layoutIconStyle={styles.layoutIcon}
            children={
              <LayoutCustom
                horizontal
                itemsCenter
                justify="space-between"
                style={styles.layoutTitle}
                level="1">
                <Text category="h4" marginLeft={16}>
                  {item.title}
                </Text>
                <AppIcon
                  name={EvaIcons.ChevronRight}
                  layoutIconStyle={styles.layoutChevron}
                />
              </LayoutCustom>
            }
          />
        );
      })}
    </LayoutCustom>
  );
});

export default ScreenList;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 16,
    paddingVertical: 12,
  },
  layoutIcon: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'background-basic-color-5',
    shadowColor: 'background-basic-color-6',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.11,
    shadowRadius: 9.11,
    elevation: 10,
  },
  layoutChevron: {
    backgroundColor: 'background-basic-color-5',
    borderRadius: 99,
    marginRight: -8,
  },
  layoutTitle: {
    backgroundColor: 'background-basic-color-1',
    flex: 1,
    paddingVertical: 16,
    borderRadius: 4,
    shadowColor: 'background-basic-color-6',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.31,
    shadowRadius: 8,
    elevation: 10,
  },
});
