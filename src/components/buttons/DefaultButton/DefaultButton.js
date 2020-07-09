import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

const DefaultButton = ({...props}) => (
  <Button
    {...props}
    onPress={props.onPress}
    titleStyle={styles.buttonTitle}
    buttonStyle={styles.buttonStyle}
    containerStyle={styles.buttonContainer}
  />
);

export default DefaultButton;
