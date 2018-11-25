import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import List from '../screens/List';
import AddNew from '../screens/AddNew';

const Todos = createStackNavigator({
  List,
},{
  headerLayoutPreset: 'center',
});

Todos.navigationOptions = {
  tabBarLabel: 'To-dos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-list'
      />
      ),
    };
    
    const Add = createStackNavigator({
      AddNew,
    });
    
    Add.navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle' }
    />
  ),
};

export default createBottomTabNavigator({
  Todos,
  Add,
});
