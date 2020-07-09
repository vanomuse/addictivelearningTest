import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import DefaultInput from '../../../components/inputs/DefaultInput'
import DefaultButton from '../../../components/buttons/DefaultButton'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import { inject, observer } from 'mobx-react';

class SignUp extends Component {

  handleRegistration = () => {
    this.props.store.signUp()

    this.props.store.status === 200
      ? this.props.navigation.navigate('Welcome') 
      : null
  }

  render() {
    const { navigation } = this.props
    const {
      email,
      password,
      confirmPassword,
      changeEmail,
      changePassword,
      changeConfirmPassword,
      termsOfUse,
      onPressIAgree,
      status
    } = this.props.store
    console.log(status)
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/icon.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
        {status ==! 200 
            ? <Text>invalid data or onchecked terms of use</Text>
             : null
           }
          <DefaultInput
            placeholder='email'
            value={email}
            onChangeText={text => changeEmail(text)}
          />
          <DefaultInput
            placeholder='password'
            value={password}
            onChangeText={text => changePassword(text)}
          />
          <DefaultInput
            placeholder='confirm password'
            value={confirmPassword}
            onChangeText={text => changeConfirmPassword(text)}
          />
        </View>
        <View style={styles.bottomTextView}>
          <CheckBox
            checked={termsOfUse}
            containerStyle={{ paddingHorizontal: 0 }}
            size={20}
            uncheckedColor={'#602368'}
            onPress={() => onPressIAgree(termsOfUse)}
          />
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#602368', fontWeight: 'bold' }}>i agree with the terms of use</Text>  
          </TouchableOpacity>
        </View>
        <View>
          <DefaultButton title='Sign Up' onPress={() => this.handleRegistration()} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject('store')(observer(SignUp))
