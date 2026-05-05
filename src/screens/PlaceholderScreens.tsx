import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const PlaceholderScreen: React.FC<{title: string}> = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.emoji}>🚧</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.sub}>Coming soon</Text>
  </View>
);

export const MapScreen: React.FC = () => <PlaceholderScreen title="Map" />;
export const CreateScreen: React.FC = () => <PlaceholderScreen title="Create Post" />;
export const NotificationsScreen: React.FC = () => <PlaceholderScreen title="Notifications" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  emoji: {fontSize: 48},
  title: {fontSize: 20, fontWeight: '700', color: Colors.text},
  sub: {fontSize: 14, color: Colors.muted},
});
