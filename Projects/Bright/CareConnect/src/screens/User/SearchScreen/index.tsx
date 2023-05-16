import * as React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Input,
} from '@ui-kitten/components';
// ----------------------------- Components && Elements -----------------------
import {
  AppIcon,
  Container,
  CustomLayout,
  NavigationAction,
  Text,
} from 'components';
import DoctorItem from 'elements/DoctorItem';
import ListEmptyDoctor from './ListEmptyDoctor';
// ----------------------------- Utils ---------------------------------------
import keyExtractoUtil from 'utils/keyExtractorUtil';
// ----------------------------- Types ---------------------------------------
import EvaIcons from 'types/eva-icon-enum';
import {Modalize, useModalize} from 'react-native-modalize';
import {useLayout} from 'hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from 'types/navigation-types';
// ----------------------------- Assets ---------------------------------------
import {DOCTORS_DATA} from 'constants/data';
import { IDoctorProps } from 'types/element-types';

const SearchScreen = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const {top} = useLayout();
  const {navigate} = useNavigation<NavigationProp<MainStackParamList>>();
  const {height} = useLayout();
  const [active, setActive] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');
  const {ref, open, close} = useModalize();

  const searchDoctor = React.useMemo(() => {
    const searchResults = DOCTORS_DATA.filter(doctor =>
      doctor.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return searchResults;
  }, [searchValue]);

  const _onDetails = (doctor:IDoctorProps) => {
    navigate('DetailsDoctor',{doctor:doctor});
  };
  const ListHeaderComponent = () => {
    return (
      <CustomLayout level="3" mt={16}>
        <FlatList
          keyExtractor={keyExtractoUtil}
          data={OPTIONS}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentTag}
          horizontal
          renderItem={({item: opt, index}) => {
            const isActive = index === active;
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.tag, isActive && styles.activeTag]}
                onPress={() => {
                  setActive(index);
                }}
                key={index}>
                <Text status={isActive ? 'white' : 'primary'}>{opt}</Text>
              </TouchableOpacity>
            );
          }}
        />
        {searchValue ? (
          <Text category="t5" marginLeft={24} marginTop={16} marginBottom={8}>
            Result for: "{searchValue}"
          </Text>
        ) : (
          <Text category="t5" marginLeft={24} marginTop={16} marginBottom={8}>
            Most Favorite Doctor
          </Text>
        )}
      </CustomLayout>
    );
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <CustomLayout style={[styles.nav, {paddingTop: top + 8}]}>
        <TopNavigation
          title="Search"
          accessoryLeft={() => <NavigationAction marginRight={12} />}
          accessoryRight={() => (
            <NavigationAction
              icon={EvaIcons.Options2Outline}
              onPress={() => {
                open();
              }}
            />
          )}
        />
        <Input
          accessoryLeft={props => (
            <AppIcon
              name={EvaIcons.Search}
              //@ts-ignore
              size={props?.style.width}
              //@ts-ignore
              fill={props?.style.tintColor}
            />
          )}
          value={searchValue}
          onChangeText={e => setSearchValue(e)}
          placeholder="Search doctor,medicines etc"
          style={styles.input}
          clearButtonMode="while-editing"
        />
      </CustomLayout>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={ListHeaderComponent}
          ListEmptyComponent={() => <ListEmptyDoctor />}
          data={searchValue ? searchDoctor : DOCTORS_DATA}
          keyExtractor={keyExtractoUtil}
          renderItem={({item}) => {
            return (
              <CustomLayout mh={24} onPress={()=>_onDetails(item)}>
                <DoctorItem data={item} />
              </CustomLayout>
            );
          }}
        />
      <Modalize
        ref={ref}
        handlePosition="inside"
        modalHeight={height / 1.5}
        modalStyle={{borderRadius: 40}}>
        <CustomLayout level="1" mt={40} ph={24}>
          <Text category="t4" center>
            Filter
          </Text>
        </CustomLayout>
      </Modalize>
    </Container>
  );
});

export default SearchScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  nav: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 24,
    backgroundColor: 'background-basic-color-1',
  },
  input: {
    marginHorizontal: 24,
  },
  contentContainer: {
    paddingBottom: 120,
    gap: 16,
    backgroundColor: 'background-basic-color-3',
  },
  activeTag: {
    backgroundColor: 'color-primary-default',
  },
  tag: {
    borderWidth: 1,
    borderColor: 'color-primary-default',
    paddingHorizontal: 12,
    borderRadius: 99,
    paddingVertical: 4,
  },
  contentTag: {
    gap: 8,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  background: {},
});

export const OPTIONS = [
  'All',
  'General',
  'Dentist',
  'Nutritionist',
  'Medicationist',
];
