import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Platform } from 'react-native';

export default class AddNew extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(text){
    this.setState({
      text
    })
  }

  handleSubmit(){
    const { text } = this.state
    if(!text) return
    this.props.screenProps.addTask(this.state.text)
    this.setState({
      text:''
    })
    this.props.triggerModal && this.props.triggerModal();
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.text}>To-do:</Text>
        <TextInput onChangeText={this.handleChange} value={this.state.text} style={styles.input} onSubmitEditing={this.handleSubmit} autoFocus={true} blurOnSubmit={Platform.OS === 'ios'}></TextInput>
        <Button title='ADD' onPress={this.handleSubmit}></Button>
      </View>
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
  frame: {
    margin:5
  },
  text: {
    color: 'grey',
    marginBottom: 3
  },
  input:{
    height: 30,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5
  }
});
