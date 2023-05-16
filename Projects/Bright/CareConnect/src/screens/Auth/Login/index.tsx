import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- Fomik-Control state input -------------------
import {Formik} from 'formik';
// ----------------------------- Hook ----------------------------------------
import {useLayout, useToggle} from 'hooks';
// ----------------------------- UI kitten -----------------------------------
import { Input, Button, StyleService, useStyleSheet, TopNavigation } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import {NavigationProp, useNavigation} from '@react-navigation/native';

// ----------------------------- Components && Elements -----------------------
import {Text,CustomLayout as Layout,Container,Content,ButtonPickCountry,NavigationAction, AppIcon } from 'components';

// ----------------------------- Assets ---------------------------------------
import {Images} from 'assets/images';
// ----------------------------- @Types ---------------------------------------
import {AuthStackParamList, RootStackParamList} from 'types/navigation-types';
import {CountryItem} from 'types/component-types';
import EvaIcons from 'types/eva-icon-enum';
import { appSelector, ThemeMode } from 'reduxs/reducers/app-reducer';
import { useAppSelector } from 'reduxs/store';

type FormikForm = {
  account: string;
  country: CountryItem;
  password: string;
};

const Login = memo(() => {
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const navigation= useNavigation<NavigationProp<RootStackParamList>>()
  const styles = useStyleSheet(themedStyles);
  const {width} = useLayout();

  const app = useAppSelector(appSelector);
  const themeMode = app.theme;
  const isDarkMode = themeMode === ThemeMode.DARK;

  const [show, toggle] = useToggle(false);
  const [isPhone, setIsPhone] = React.useState(false);
  const initValues: FormikForm = {
    account: '',
    password: '',
    country: _country,
  };
  const onSignup = () => { navigate('Signup') };
  // Regular expression for email validation.
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  // Regular expression for phone number validation.
  const phoneRegex = /^[0-9]{3,15}$/;

  return (
    <Formik
      initialValues={initValues}
      onSubmit={values =>{   
        console.log({
          phone: values.country.dial_code + values.account,
          password: values.password,
        });
        navigation.navigate('MainStack')}
      }>
      {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => {
        return (
          <Container style={styles.container} level='1'>
            <TopNavigation accessoryLeft={() => <NavigationAction />} />
            <Content contentContainerStyle={styles.content}>
              <Image
                source={isDarkMode?Images.dark_logo:Images.logo}
                style={{
                  width: width / 2,
                  height: width / 2,
                  alignSelf: 'center',
                }}
              />
              <Text category="t3" center>
                Login to your account
              </Text>
              <Layout gap={4}>
                <Layout horizontal gap={8}>
                  {isPhone && (
                    <ButtonPickCountry
                      country={values.country}
                      onSave={e => setFieldValue('country', e)}
                    />
                  )}
                  <Input
                  //@ts-ignore
                    accessoryLeft={({style}) => {
                      return values.country.dial_code && isPhone ? (
                        <Layout horizontal itemsCenter gap={8}>
                          <Text>{values.country.dial_code}</Text>
                        </Layout>
                      ) : (
                        <Layout ml={8} mr={4}>
                          <AppIcon name={EvaIcons.EmailOutline} size={20} fill={style.tintColor}  />
                        </Layout>
                      );
                    }}
                    placeholder={'Email / Phone Number'}
                    style={styles.input}
                    onChange={e => {}}
                    onChangeText={e => {
                      if (phoneRegex.test(e)) {
                        setIsPhone(true);
                      } else if (emailRegex.test(e)) {
                        setIsPhone(false);
                      } else {
                        setIsPhone(false);
                      }
                      setFieldValue('account', e);
                    }}
                    onBlur={handleBlur('account')}
                    value={values.account}
                  />
                </Layout>
              </Layout>
              <Layout gap={4}>
                <Input
                  placeholder={'Password'}
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!show}
                  //@ts-ignore
                  accessoryLeft={({style}) => (
                    <Layout itemsCenter ml={8} mr={4}>
                      <AppIcon name={EvaIcons.LockOutline} size={20}fill={style?.tintColor} />
                    </Layout>
                  )}
                  accessoryRight={() => (
                    <Text
                      status="primary"
                      category="c1"
                      marginRight={4}
                      onPress={toggle}>
                      {!show ? 'Show' : 'Hide'}
                    </Text>
                  )}
                />
                <Layout horizontal gap={4} mt={8}>
                  <Text category="subhead" status="placeholder">
                    Forgot Password?
                  </Text>
                  <Text status="primary" category="body">
                    Recover
                  </Text>
                </Layout>
                {/* @ts-ignore */}
                <Image source={Images.login} style={styles.image} />
              </Layout>
            </Content>
            <Layout padding={16} gap={16}>
              <Button children={'Login'} onPress={() => handleSubmit()} />
              <Layout gap={4} mt={8} horizontal justify="center">
                <Text center status="placeholder">
                  Dont have an account?
                </Text>
                <Text status="primary" onPress={onSignup}>
                  Sign Up
                </Text>
              </Layout>
            </Layout>
          </Container>
        );
      }}
    </Formik>
  );
});

export default Login;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 48,
  },
  topNavigation: {
    paddingHorizontal: 12,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 24,
  },
  input: {
    flex: 3,
  },
  image: {
    height: 250,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
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
