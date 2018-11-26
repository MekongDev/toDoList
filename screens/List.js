import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MonoText } from '../components/StyledText';
import { Icon } from 'expo'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

export default class List extends React.Component {
  static navigationOptions = {
    title: 'To-do list',
    headerStyle:{
      height: 60
    },
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 30,
    },
  };

  render() {
    let { tasks, removeTask } = this.props.screenProps
    return (
      <ScrollView style={styles.container}>
        <View style={styles.frame}>
        {!tasks.length ?
          <MonoText style={styles.text}>
            To add a new to-do you can go to the tab "Add" or press the "New" button
          </MonoText>
          : 
          tasks.map(task => (
            <View key={task.id} style={styles.taskList}>
              <MonoText style={styles.text}>{task.value}</MonoText>
              <TouchableOpacity onPress={()=>removeTask(task.id)} id={task.id}>
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? 'ios-remove-circle' : 'md-remove-circle'}
                  size={26}
                  style={{ marginBottom: -3 }}
                  color={Colors.tabIconDefault}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  frame:{
    margin: 20,
  },
  taskList: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 30
  },
  text: {
    color: 'grey'
  }
});
