import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import DefaultInput from '../../../components/inputs/DefaultInput'
import DefaultButton from '../../../components/buttons/DefaultButton'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
import AsyncStorage from '@react-native-community/async-storage';

class LogIn extends Component {

  async componentDidMount() {
    const authStatus = await AsyncStorage.getItem('authStatus')
    authStatus ? this.props.navigation.navigate('App') : null
  }

  handleLogIn = () => {
    this.props.store.signIn()

    this.props.store.status === 200
      ? this.props.navigation.navigate('Welcome') 
      : null
    }

  render() {
    const { navigation } = this.props
    const {
      loginEmail,
      loginPassword,
      changeLogInEmail,
      changeLoginPassword, 
      status
    } = this.props.store
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/icon.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
        {status ==! 200 ? <Text>invalid email or password</Text> : null}
          <DefaultInput
            placeholder='email'
            value={loginEmail}
            onChangeText={val => changeLogInEmail(val)}
          />
          <DefaultInput
            placeholder='password'
            value={loginPassword}
            onChangeText={val => changeLoginPassword(val)}
          />
        </View>
        <View>
          <DefaultButton title='Sign In' onPress={() => this.handleLogIn()} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Dont have an account yet?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject('store')(observer(LogIn))
