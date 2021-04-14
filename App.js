import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createTabNavigator} from 'react-navigation-tabs'
import SearchScreen from './screens/SearchScreen';
import BookTransaction from './screens/BookTransaction';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}


//contains the two screens
const TabNavigator = createBottomTabNavigator({
  Search : {screen: SearchScreen},
  Transaction :{screen : BookTransaction},
})

//contains screens with the App
const AppContainer = createAppContainer(TabNavigator)