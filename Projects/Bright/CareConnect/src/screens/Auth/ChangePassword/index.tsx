import React from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, useTheme, Input, Button } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Hooks ---------------------------------------
import {useLayout, useToggle} from 'hooks';
// ----------------------------- Assets ---------------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components && Elements -----------------------
import {Formik} from 'formik';
import { AppIcon, Container, Content, CustomLayout, NavigationAction, Text } from 'components';
// ----------------------------- Types ---------------------------------------
import EvaIcons from 'types/eva-icon-enum';
// ----------------------------- Reduxs ---------------------------------------
import {appSelector, ThemeMode} from 'reduxs/reducers/app-reducer';
import {useAppSelector} from 'reduxs/store';

type FormikType = {
  password: string;
  new_password: string;
  re_password: string;
};

const ChangePassword = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();

  const initValues: FormikType = {
    password: '',
    new_password: '',
    re_password: '',
  };
  const [show, togglePassword] = useToggle(false);
  const [showNewpass, toggleNewPass] = useToggle(false);

  const app = useAppSelector(appSelector);
  const themeMode = app.theme;
  const isDarkMode = themeMode === ThemeMode.DARK;

  return (
    <Formik initialValues={initValues} onSubmit={values => console.log({})}>
      {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => {
        return (
          <Container style={styles.container} level="1">
            <TopNavigation
              accessoryLeft={() => <NavigationAction marginRight={12} />}
            />
            <Content contentContainerStyle={styles.content}>
              <Image
                source={isDarkMode ? Images.dark_logo : Images.logo}
                style={{
                  width: width / 2,
                  height: width / 2,
                  alignSelf: 'center',
                }}
              />
              <Text category="t3" center marginBottom={32}>
                Change Password
              </Text>
              <Input
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={!show}
                //@ts-ignore
                accessoryLeft={({style}) => (
                  <CustomLayout itemsCenter ml={8} mr={4}>
                    <AppIcon
                      name={EvaIcons.LockOutline}
                      size={20}
                      fill={style?.tintColor}
                    />
                  </CustomLayout>
                )}
                accessoryRight={() => (
                  <Text
                    status="primary"
                    category="c1"
                    marginRight={4}
                    onPress={togglePassword}>
                    {!show ? 'Show' : 'Hide'}
                  </Text>
                )}
              />
              <Input
                placeholder="New Password"
                onChangeText={handleChange('new_password')}
                onBlur={handleBlur('new_password')}
                value={values.new_password}
                secureTextEntry={showNewpass}
                //@ts-ignore
                accessoryLeft={({style}) => (
                  <CustomLayout itemsCenter ml={8} mr={4}>
                    <AppIcon
                      name={EvaIcons.LockOutline}
                      size={20}
                      fill={style?.tintColor}
                    />
                  </CustomLayout>
                )}
                accessoryRight={() => (
                  <Text
                    status="primary"
                    category="c1"
                    marginRight={4}
                    onPress={toggleNewPass}>
                    {!showNewpass ? 'Hide' : 'Show'}
                  </Text>
                )}
              />
              <Input
                placeholder="Re-Password"
                onChangeText={handleChange('re_password')}
                onBlur={handleBlur('re_password')}
                value={values.re_password}
                secureTextEntry={showNewpass}
                //@ts-ignore
                accessoryLeft={({style}) => (
                  <CustomLayout itemsCenter ml={8} mr={4}>
                    <AppIcon
                      name={EvaIcons.LockOutline}
                      size={20}
                      fill={style?.tintColor}
                    />
                  </CustomLayout>
                )}
              />
            </Content>
            <Button
              children={'Submit'}
              style={styles.submit}
              onPress={()=>handleSubmit()}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default ChangePassword;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    gap: 24,
  },
  submit: {
    marginVertical: 8,
    marginHorizontal: 24,
  },
});
