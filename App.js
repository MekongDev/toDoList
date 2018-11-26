import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import MainTabNavigator from './navigation/MainTabNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      id: 0,
      tasks: []
    };
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(value){
    const { id, tasks } = this.state
    let newTasks = [...tasks]
    newTasks.push({
      id,
      value
    })
    this.setState({
      tasks: newTasks,
      id: id+1
    })
  }

  removeTask(id){
    const { tasks } = this.state
    const newTasks = tasks.filter(task=>task.id !== id)
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <MainTabNavigator screenProps={{tasks: this.state.tasks, addTask: this.addTask, removeTask: this.removeTask, errores: this.state.errores}} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
