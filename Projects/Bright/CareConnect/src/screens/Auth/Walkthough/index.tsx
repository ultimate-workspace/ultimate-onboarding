import React, {memo} from 'react';
import {Image} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  Button,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {NavigationProp, useNavigation} from '@react-navigation/native';
// ----------------------------- @Types -----------------------------------
import {AuthStackParamList} from 'types/navigation-types';
// ----------------------------- Assets -----------------------------------
import {Images} from 'assets/images';
// ----------------------------- Components & Elements -----------------------------------
import {Container, Text, CustomLayout} from 'components';
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from './Pagination';
import { useAppDispatch } from 'reduxs/store';
import { setAppIntro } from 'reduxs/reducers/app-reducer';

const Walkthrough03 = memo(() => {
  const dispatch=useAppDispatch()
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [activePage, setActivePage] = React.useState(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);
  const fake_data = [
    {
      image: Images.walkthrough01,
      title: 'Welcome to CareConnect',
      describe: 'A thousands of doctors & expect to help your health.',
    },
    {
      image: Images.walkthrough03,
      title: 'How are you feeling today?',
      describe: 'Health check and consultations easily anytime anywhere',
    },
    {
      image: Images.walkthrough02,
      title: 'Join us today',
      describe: 'Let start live healthly and well with us right now.',
    },
  ];

  const contentStyled = useAnimatedStyle(() => {
    return {
      flex: 1,
      paddingBottom: bottom + 4,
      overflow: 'visible',
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1, 2, 3],
        ['#1DAF4C', '#A6C1FF', '#4694F1'],
      ),
    };
  });

  const _onStarted = () => {
    dispatch(setAppIntro(true))
    navigate('Onboarding');
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Animated.View style={contentStyled}>
        <CustomLayout itemsCenter gap={12} mt={40} pt={80} style={{flex: 1}}>
          <Carousel
            ref={ref}
            width={width}
            height={height / 1.6}
            data={fake_data}
            loop={false}
            enabled={false}
            onSnapToItem={e => setActivePage(e)}
            onProgressChange={(e, _) => (progress.value = _)}
            renderItem={({item, index}) => {
              const styledAnimated = useAnimatedStyle(() => {
                return {
                  opacity: interpolate(
                    progress.value,
                    [index - 1, index, index + 1],
                    [0, 1, 0],
                  ),
                };
              });
              return (
                <CustomLayout
                  key={index}
                  gap={8}
                  style={{width: width}}
                  justify="center"
                  itemsCenter>
                  <Image
                    source={item.image}
                    style={{width: width, height: width}}
                  />
                  <Animated.View style={styledAnimated}>
                    <Text
                      center
                      category="t4"
                      status="white"
                      marginBottom={24}
                      marginHorizontal={24}>
                      {item.title}
                    </Text>
                    <Text
                      center
                      category="body"
                      status="white"
                      opacity={0.5}
                      marginHorizontal={56}>
                      {item.describe}
                    </Text>
                  </Animated.View>
                </CustomLayout>
              );
            }}
          />
          <CustomLayout horizontal>
            {fake_data.map((item, i) => {
              return (
                <Pagination
                  index={i}
                  key={i}
                  length={fake_data.length}
                  backgroundColor={theme['text-basic-color']}
                  animValue={progress}
                  widthActiveIndicator={27}
                />
              );
            })}
          </CustomLayout>
        </CustomLayout>
        {activePage === fake_data.length - 1 ? (
            <Button
              children={'Get Started'}
              onPress={_onStarted}
              style={styles.buttonStart}
              status="primary"
            />
        ) : (
          <Button
            children={'Next'}
            onPress={() => {
              ref.current?.next();
            }}
            style={styles.buttonStart}
            status="white"
          />
        )}
      </Animated.View>
    </Container>
  );
});

export default Walkthrough03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    overflow: 'visible',
  },
  imageBackground: {
    alignItems: 'center',
    backgroundColor: 'background-basic-color-1',
    borderRadius: 18,
    width: 312,
    height: 345,
    shadowColor: 'color-basic-1100',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonStart: {
    margin: 32,
  },
  content: {
    flexGrow: 1,
  },
});
