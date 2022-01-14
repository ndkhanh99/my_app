import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import About from '../components/About';
import Textapp from '../components/Textapp';
import Login from '../components/Login';
import Nailslist from '../components/Nailslist';
import Create from '../components/create';
import Details from '../components/Details';

const MyStack = createStackNavigator();
const MyDrawer = createDrawerNavigator(); 

const HomeDrawer = (props) => {
  
    return (
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="Home" component={Home} />
        <MyDrawer.Screen name="About" component={About} />
        <MyStack.Screen name="Login" component={Login} />
      </MyDrawer.Navigator>
    );
  }

export default RootComponent = function() {
    
    return (
      <NavigationContainer>
        <MyStack.Navigator>

          <MyStack.Screen name="HomeDrawer" component={HomeDrawer} />
          <MyStack.Screen name="NailsStack" component={Nailslist} />
          <MyStack.Screen name="TextappStack" component={Textapp} />
          <MyStack.Screen name="CreateStack" component={Create} />
          <MyStack.Screen name="DetailStack" component={Details} />
        
        </MyStack.Navigator>
      </NavigationContainer>
    )
}

