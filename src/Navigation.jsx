import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddEmp from './screens/AddEmp';
import UpdateEmp from './screens/UpdateEmp';

const NativeSTACK = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <NativeSTACK.Navigator
        screenOptions={{
          gestureDirection: 'horizontal',
        }}>
        <NativeSTACK.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <NativeSTACK.Screen
          name="AddEmp"
          component={AddEmp}
          options={{
            headerShown: true,
            animation: 'slide_from_right',
          }}
        />
        <NativeSTACK.Screen
          name="UpdateEmp"
          component={UpdateEmp}
          options={{
            headerShown: true,
            animation: 'slide_from_bottom',
          }}
        />
      </NativeSTACK.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
