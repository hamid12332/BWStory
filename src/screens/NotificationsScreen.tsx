import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Icon 
        name="notifications-outline" 
        size={60} 
        color={Colors.white} 
        style={{ marginBottom: 15 }} 
      />

      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>
        Notifications feature is under development. Stay tuned!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.header,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.muted,
    textAlign: 'center',
    lineHeight: 22,
  },
});