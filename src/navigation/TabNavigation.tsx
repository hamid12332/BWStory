import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View } from 'react-native';

import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen';
import CreateScreen from '../screens/CreateScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        // 🔥 Clean Tab Bar UI
        tabBarStyle: {
          height: 50,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },

        tabBarIcon: ({ focused, color }) => {

          // ✅ Profile Image
          if (route.name === 'Profile') {
            return (
              <Image
                source={require('../../assets/image/profile.jpeg')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: focused ? 2 : 0,
                  borderColor: '#0b4f5c',
                  marginTop: 8,
                }}
              />
            );
          }

          // ✅ Center Button (Create)
          if (route.name === 'Create') {
            return (
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  backgroundColor: '#0b4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -25, 
                  elevation: 8,
                }}
              >
                <Ionicons name="add" size={28} color="#fff" />
              </View>
            );
          }

          let iconName: string = '';

          switch (route.name) {
            case 'Discover':
              iconName = focused ? 'compass' : 'compass-outline';
              break;

            case 'Map':
              iconName = focused ? 'location' : 'location-outline';
              break;

            case 'Notifications':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? '#0b4f5c' : 'gray'}
              style={{ marginTop: 10 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;