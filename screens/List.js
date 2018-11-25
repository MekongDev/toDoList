import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { MonoText } from '../components/StyledText';


export default class List extends React.Component {
  static navigationOptions = {
    title: 'To-do list',
  };

  render() {
    let { tasks } = this.props.screenProps
    return (
      <ScrollView style={styles.container}>
        <View>
        {!tasks.length ?
          <MonoText>
            To add a new to-do you can go to the tab "Add" or press the "New" button
          </MonoText>
          : <Text>{tasks[0]}</Text>}
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
});
