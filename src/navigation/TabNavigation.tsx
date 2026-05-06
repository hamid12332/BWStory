import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },

        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10, 
        },

        tabBarIcon: ({ focused }) => {
          // PROFILE
          if (route.name === 'Profile') {
            return (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/image/profile.jpeg')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderWidth: focused ? 2 : 0,
                    borderColor: '#0b4f5c',
                  }}
                />

                {focused && (
                  <View
                    style={{
                      marginTop: 4,
                      width: 18,
                      height: 3,
                      backgroundColor: '#0b4f5c',
                      borderRadius: 10,
                    }}
                  />
                )}
              </View>
            );
          }

          // CENTER BUTTON (NO LINE HERE)
          if (route.name === 'Create') {
            return (
              <View
                style={{
                  position: 'absolute',
                  bottom: 4,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: '#0b4f5c',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 8,
                }}
              >
                <Ionicons name="add" size={28} color="#fff" />
              </View>
            );
          }

          let iconName = '';

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
            <View style={{ alignItems: 'center' }}>
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? '#0b4f5c' : 'gray'}
              />

              {focused && (
                <View
                  style={{
                    marginTop: 4,
                    width: 18,
                    height: 3,
                    backgroundColor: '#0b4f5c',
                    borderRadius: 10,
                  }}
                />
              )}
            
            </View>
          );
        }
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