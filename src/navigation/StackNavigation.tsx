import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default StackNavigation;