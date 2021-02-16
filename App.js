import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';


import StoreProvider from './Store/StoreProvider';
import SearchCity from './Screens/WelcomePage/SearchCity';
import MainContent from './Screens/WelcomePage/MainContent';

const Bottom = createBottomTabNavigator();

export default function App() {

  return (
    <StoreProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Bottom.Navigator 
          tabBarOptions={{
            activeTintColor:'#3498db', 
          }}
        >
          <Bottom.Screen name="Strona główna" component={MainContent}
            options={{
              tabBarIcon: props => <AntDesign name="home" size={24} color={props.color} /> 
            }}
          />
          <Bottom.Screen name="Szukaj" component={SearchCity}
            options={{
              tabBarIcon: props => <FontAwesome5 name="city" size={24} color={props.color} />
            }}
          />
        </Bottom.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};
