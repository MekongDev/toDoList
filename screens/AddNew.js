import React from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';

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
    this.props.screenProps.addTask(this.state.text)
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput onChangeText={this.handleChange} value={this.state.text} style={{ height: 40, borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }} onSubmitEditing={this.handleSubmit}></TextInput>
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
});
