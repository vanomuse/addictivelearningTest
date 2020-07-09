import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 20}}>Main Screen</Text>
      </View>
    );
  }
}

export default Main;
