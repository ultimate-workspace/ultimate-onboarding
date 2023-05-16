import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Input,
  Datepicker,
  Select,
  SelectItem,
  IndexPath,
  Button,
} from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import {NavigationProp, useNavigation} from '@react-navigation/native';
// ----------------------------- Hooks ---------------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Assets ---------------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components && Elements -----------------------

import {
  AppIcon,
  ButtonPickCountry,
  Container,
  Content,
  CustomLayout,
  NavigationAction,
  Text,
} from 'components';
import {Formik} from 'formik';
import {CountryItem} from 'types/component-types';
import EvaIcons from 'types/eva-icon-enum';
import {faker} from '@faker-js/faker';

type FormikForm = {
  full_name: string;
  dob: Date;
  country: CountryItem;
  email: string;
  address_1: string;
  address_2: string;
  phone_number: string;
  gender: string;
};

const EditProfile = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();

  const initValues: FormikForm = {
    full_name: faker.name.fullName(),
    dob: new Date('1995-09-09'),
    country: _country,
    email: 'Test@example.com',
    address_1: '',
    address_2: '',
    phone_number: '',
    gender: 'Male',
  };

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );
  const GENDER = ['Male', 'Female', 'Other'];
  const displayValue = GENDER[selectedIndex.row];

  return (
    <Formik
      initialValues={initValues}
      onSubmit={values =>
        console.log({
          values,
        })
      }>
      {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => {
        return (
          <Container style={styles.container} level="1">
            <TopNavigation
              title={'Edit Profile'}
              accessoryLeft={() => <NavigationAction marginRight={12} />}
            />
            <Content contentContainerStyle={styles.content}>
              <Input
                placeholder={'Full Name'}
                style={styles.input}
                onChangeText={handleChange('full_name')}
                onBlur={handleBlur('full_name')}
                value={values.full_name}
                //@ts-ignore
                accessoryLeft={({style}) => {
                  return (
                    <CustomLayout horizontal itemsCenter gap={8}>
                      <AppIcon
                        fill={style.tintColor}
                        name={EvaIcons.CreditCardOutline}
                      />
                    </CustomLayout>
                  );
                }}
              />
              <Input
                placeholder={'Email Address'}
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                //@ts-ignore
                accessoryLeft={({style}) => {
                  return (
                    <CustomLayout horizontal itemsCenter gap={8}>
                      <AppIcon
                        fill={style.tintColor}
                        name={EvaIcons.EmailOutline}
                      />
                    </CustomLayout>
                  );
                }}
              />
              <Datepicker
                date={values.dob}
                max={new Date()}
                controlStyle={{justifyContent: 'flex-start'}}
                min={new Date('1800-01-01')}
                //@ts-ignore
                accessoryLeft={({style}) => {
                  return (
                    <CustomLayout horizontal itemsCenter gap={8}>
                      <AppIcon
                        fill={style.tintColor}
                        name={EvaIcons.CalendarOutline}
                      />
                    </CustomLayout>
                  );
                }}
              />
              <Input
                placeholder={'Address 1'}
                style={styles.input}
                onChangeText={handleChange('address_1')}
                onBlur={handleBlur('address_1')}
                value={values.address_1}
                //@ts-ignore
                accessoryLeft={({style}) => {
                  return (
                    <CustomLayout horizontal itemsCenter gap={8}>
                      <AppIcon
                        fill={style.tintColor}
                        name={EvaIcons.PinOutline}
                      />
                    </CustomLayout>
                  );
                }}
              />
              <Input
                placeholder={'Address 2'}
                style={styles.input}
                onChangeText={handleChange('address_2')}
                onBlur={handleBlur('address_2')}
                value={values.address_2}
                //@ts-ignore
                accessoryLeft={({style}) => {
                  return (
                    <CustomLayout horizontal itemsCenter gap={8}>
                      <AppIcon
                        fill={style.tintColor}
                        name={EvaIcons.PinOutline}
                      />
                    </CustomLayout>
                  );
                }}
              />
              <CustomLayout gap={4}>
                <Text category="c1" status="placeholder">
                  Phone Number
                </Text>
                <CustomLayout horizontal gap={8}>
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
                          <CustomLayout horizontal itemsCenter gap={8}>
                            <Text>{values.country.dial_code}</Text>
                          </CustomLayout>
                        )
                      );
                    }}
                  />
                </CustomLayout>
              </CustomLayout>
              <Select
                size="medium"
                placeholder={'Select Your Gender'}
                value={values.gender}
                selectedIndex={selectedIndex}
                onSelect={e => {
                  //@ts-ignore
                  setSelectedIndex(e);setFieldValue('gender', GENDER[e.row]);
                }}>
                {GENDER.map((item, index) => {
                  return <SelectItem title={item} key={index} />;
                })}
              </Select>
            </Content>
            <Button children={'Update'} style={styles.button} />
          </Container>
        );
      }}
    </Formik>
  );
});

export default EditProfile;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 24,
    gap: 16,
  },
  input: {
    flex: 1,
  },
  button: {
    marginHorizontal: 24,
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
