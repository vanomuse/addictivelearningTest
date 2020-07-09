import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DefaultButton from '../../../components/buttons/DefaultButton'
import styles from './styles'
import { inject, observer } from 'mobx-react';

class Settings extends Component {

  handleLogOut = () => {
    this.props.store.logOut()
    this.props.navigation.navigate('LogIn')
  }

  render() {
    return (
      <View style={styles.container}>
        <DefaultButton
          title="Log Out"
          onPress={() => this.handleLogOut()}
        />
      </View>
    );
  }
}

export default inject('store')(observer(Settings));
