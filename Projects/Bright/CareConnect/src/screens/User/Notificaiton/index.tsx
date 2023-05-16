import React from 'react';
import {FlatList} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
// ----------------------------- Components && Elements -----------------------
import {Container, NavigationAction} from 'components';
import NotificationItem, {INotificationItemProps} from './NotificationItem';
// ----------------------------- Ultils ---------------------------------------
import keyExtractoUtil from 'utils/keyExtractorUtil';

// ----------------------------- Types -----------------------------------
import EvaIcons from 'types/eva-icon-enum';

const NotificationScreen = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const renderItem = ({
    item,
    index,
  }: {
    item: INotificationItemProps;
    index: number;
  }) => {
    return (
      <NotificationItem data={item} lastItem={index === DATA.length - 1} />
    );
  };

  return (
    <Container style={styles.container} level="1">
      <TopNavigation
        title="Notification"
        accessoryLeft={() => <NavigationAction marginRight={12} />}
        accessoryRight={() => (
          <NavigationAction icon={EvaIcons.MoreHorizontal} />
        )}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractoUtil}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
});

export default NotificationScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: 80,
  },
});

const DATA: INotificationItemProps[] = [
  {
    type: 'success',
    title: 'Appointment Confirmed',
    createAt: '2022-02-01T09:00:00Z',
    readed: true,
    describe:
      'Your appointment with Dr. John Doe has been confirmed for tomorrow at 10:00 AM.',
  },
  {
    type: 'warning',
    title: 'Appointment Reminder',
    createAt: '2022-02-05T12:30:00Z',
    readed: true,
    describe:
      'You have an appointment with Dr. Jane Smith in one hour. Please make sure to arrive on time.',
  },
  {
    type: 'danger',
    title: 'Appointment Cancellation',
    createAt: '2022-02-10T15:45:00Z',
    readed: true,
    describe:
      'We regret to inform you that your appointment with Dr. Mike Johnson has been cancelled due to unforeseen circumstances. We apologize for any inconvenience.',
  },
  {
    type: 'primary',
    title: 'Health Checkup Reminder',
    createAt: '2022-02-15T08:15:00Z',
    readed: false,
    describe:
      'It has been six months since your last health checkup. Please schedule an appointment with your doctor as soon as possible.',
  },
  {
    type: 'warning',
    title: 'Prescription Refill Needed',
    createAt: '2022-02-18T11:00:00Z',
    readed: false,
    describe:
      'You are running low on your medication. Please contact your pharmacy to refill your prescription.',
  },
  {
    type: 'success',
    title: 'Lab Results Ready',
    createAt: '2022-02-22T14:20:00Z',
    readed: false,
    describe:
      'Your lab results are ready. Please log in to your patient portal to view them.',
  },
  {
    type: 'danger',
    title: 'Missed Appointment',
    createAt: '2022-02-25T16:30:00Z',
    readed: false,
    describe:
      'You missed your appointment with Dr. John Doe. Please contact our office to reschedule.',
  },
  {
    type: 'primary',
    title: 'Annual Physical Reminder',
    createAt: '2022-03-01T09:00:00Z',
    readed: false,
    describe:
      'It is time for your annual physical. Please schedule an appointment with your doctor as soon as possible.',
  },
  {
    type: 'warning',
    title: 'Insurance Update Needed',
    createAt: '2022-03-07T13:45:00Z',
    readed: false,
    describe:
      'Your insurance information is out of date. Please update it in your patient portal or provide us with a copy during your next visit.',
  },
  {
    type: 'success',
    title: 'Flu Shot Available',
    createAt: '2022-03-10T11:15:00Z',
    readed: false,
    describe:
      'Flu shots are now available at our office. Please schedule an appointment or walk in during our office hours.',
  },
];
