import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, Button, Input, StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useToggle} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from '@react-navigation/native';
// ----------------------------- Components && Elements -----------------------------------
import { Text, CustomLayout as Layout, Container, NavigationAction, AppIcon, ButtonPickCountry } from 'components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// ----------------------------- Fomik-Control state input -----------------------------------
import {Formik} from 'formik';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- @Types -----------------------------------
import {AuthStackParamList} from 'types/navigation-types';
import {CountryItem} from 'types/component-types';
import EvaIcons from 'types/eva-icon-enum';
// ----------------------------- Reduxs -----------------------------------
import { appSelector, ThemeMode } from 'reduxs/reducers/app-reducer';
import { useAppSelector } from 'reduxs/store';

type FormikForm = {
  email: string;
  phone_number: string;
  password: string;
  country: CountryItem;
};

const SignUp = memo(() => {
  const {dispatch, navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const app = useAppSelector(appSelector);
  const themeMode = app.theme;
  const isDarkMode = themeMode === ThemeMode.DARK;

  const initValues: FormikForm = {
    email: '',
    phone_number: '',
    password: '',
    country: _country,
  };
  const [show, toggle] = useToggle(true);

  return (
    <Formik
      initialValues={initValues}
      onSubmit={values => {
        navigate('FillProfile');
        console.log(values);
      }}>
      {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => (
        <Container style={styles.container} level='1'>
          <TopNavigation
            style={styles.topNavigation}
            accessoryLeft={() => {
              return <NavigationAction />;
            }}
          />
          <KeyboardAwareScrollView
            enableOnAndroid
            extraHeight={40}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}>
            <Image
              source={isDarkMode?Images.dark_logo: Images.logo}
              style={{width: 120, height: 120, alignSelf: 'center'}}
            />
            <Layout itemsCenter>
              <Text category="t3" marginBottom={8}>
                Create new account
              </Text>
            </Layout>
            <Input
              label={'Email Address'}
              placeholder={'Enter your email'}
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              //@ts-ignore
              accessoryLeft={({style}) => (
                <Layout ml={8} mr={4}>
                  <AppIcon
                    name={EvaIcons.EmailOutline}
                    size={20}
                    fill={style.tintColor}
                  />
                </Layout>
              )}
            />
            <Layout gap={16}>
              <Layout gap={4}>
                <Text category="c1" status="placeholder">
                  Phone Number
                </Text>
                <Layout horizontal gap={8}>
                  <ButtonPickCountry
                    country={values.country}
                    onSave={e => setFieldValue('country', e)}
                  />
                  <Input
                    placeholder={'Phone Number'}
                    style={styles.input}
                    onChangeText={handleChange('phone_number')}
                    onBlur={handleBlur('phone_number')}
                    value={values.phone_number}
                    //@ts-ignore
                    accessoryLeft={({style}) => {
                      return (
                        values.country.dial_code && (
                          <Layout horizontal itemsCenter gap={8}>
                            <Text>{values.country.dial_code}</Text>
                          </Layout>
                        )
                      );
                    }}
                  />
                </Layout>
              </Layout>
              <Input
                label={'Password'}
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={show}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                //@ts-ignore
                accessoryLeft={({style}) => (
                  <Layout ml={8} mr={4}>
                    <AppIcon
                      name={EvaIcons.LockOutline}
                      size={20}
                      fill={style.tintColor}
                    />
                  </Layout>
                )}
                accessoryRight={() => (
                  <Text
                    status="primary"
                    category="c1"
                    marginRight={4}
                    onPress={toggle}>
                    {show ? 'Show' : 'Hide'}
                  </Text>
                )}
              />
            </Layout>
          </KeyboardAwareScrollView>
          <Layout mh={24} mb={12} gap={16}>
            <Button
              children="Create Account"
              onPress={() => {
                handleSubmit();
              }}
            />
            <Layout horizontal gap={8} alignSelfCenter>
              <Text center>Already have an account?</Text>
              <Text center status="primary">
                Login
              </Text>
            </Layout>
          </Layout>
        </Container>
      )}
    </Formik>
  );
});

export default SignUp;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 16,
    paddingBottom: 80,
  },
  input: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
});
const _country = {
  code: 'AF',
  dial_code: '+93',
  flag: '🇦🇫',
  name: {
    bg: 'Афганистан',
    by: 'Афганістан',
    cn: '阿富汗',
    cz: 'Afghánistán',
    de: 'Afghanistan',
    ee: 'Afganistan',
    en: 'Afghanistan',
    es: 'Afganistán',
    fr: "L'Afghanistan",
    he: 'אפגניסטן',
    it: 'Afghanistan',
    jp: 'アフガニスタン',
    nl: 'Afghanistan',
    pl: 'Afganistan',
    pt: 'Afeganistão',
    ro: 'Afganistan',
    ru: 'Афганистан',
    ua: 'Афганістан',
    zh: '阿富汗',
  },
};
