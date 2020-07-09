import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';

import styles from './styles';

class DefaultInput extends Component {

  render() {
    const {...props} = this.props;
    return (
      <Input
        {...props}
        onChangeText={props.onChangeText}
        onEndEditing={props.onEndEditing}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={styles.containerStyle}
        placeholderTextColor={'#707070'}
        inputStyle={styles.inputStyle}
      />
    );
  }
}

export default DefaultInput;
