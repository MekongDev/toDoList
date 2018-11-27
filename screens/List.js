import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Button, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { Icon } from 'expo'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import DisplayModal from '../components/DisplayModal';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display: false
    }

    this.triggerModal = this.triggerModal.bind(this);

  }


  triggerModal() {
    this.setState({
      display: !this.state.display
    });
  }

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
      <View style={styles.container}>
      <ScrollView >
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
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.triggerModal()}
            title='New'
          />
        </View>
        <DisplayModal
          display={this.state.display}
          triggerModal={this.triggerModal}
          {...this.props}
        />
      </View>
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
  },
  buttonContainer: {
    margin: 15,
  }
});
