import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Home, Details} from 'app/pages';
import {StatusBar} from 'react-native';
import {useColors} from './hooks/useColors';

const Tab = createMaterialTopTabNavigator();

const App = (): JSX.Element => {
  const {isDarkMode, backgroundColor, color} = useColors();

  const screenOptions = {
    tabBarStyle: {backgroundColor},
    tabBarLabelStyle: {color}
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}} edges={['top']}>
          <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Tab.Screen component={Home} key={'Home'} name={'Home'} />
            <Tab.Screen component={Details} key={'Details'} name={'Details'} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
