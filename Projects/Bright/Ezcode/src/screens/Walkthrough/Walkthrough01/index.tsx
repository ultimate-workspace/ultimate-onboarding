import React, {memo} from 'react';
import {View, Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

// ----------------------------- @Types -----------------------------------
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';

// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Container,
  Content,
  Text,
  LayoutCustom,
} from 'components';
import {faker} from '@faker-js/faker';
import {Images} from 'assets/images';
import {useAppDispatch} from 'reduxs/store';
import {changeLanguage} from 'i18next';

const Walkthrough01 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const fake_data = [
    Images.walkthrough.walkthrough_01,
    Images.walkthrough.walkthrough_02,
    Images.walkthrough.walkthrough_03,
  ];
  const dispatch = useAppDispatch();
  const press01 = () => {
    changeLanguage('vi');
    faker.setLocale('vi');
  };
  const press02 = () => {
    changeLanguage('en');
    faker.setLocale('en');
  };
  const press03 = () => {
    changeLanguage('ru');
    faker.setLocale('ru');
  };

  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<NavigationAction />} />
      <Content>
        {fake_data.map((item, index) => {
          return (
            <LayoutCustom key={index}>
              <Image source={item} style={{width: width, height: width}} />
              <Text onPress={press01}>1</Text>
              <Text onPress={press02}>2</Text>
              <Text onPress={press03}>3</Text>
              <Text marginBottom={24}>
                {faker.helpers.fake('{{name.lastName}}')}
              </Text>
              <Text marginBottom={24}>{faker.name.jobTitle()}</Text>
              <Text marginBottom={24}>
                {faker.helpers.unique(faker.name.jobTitle)}
              </Text>
            </LayoutCustom>
          );
        })}
      </Content>
    </Container>
  );
});

export default Walkthrough01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
