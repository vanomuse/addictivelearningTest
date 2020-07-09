import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import DefaultButton from '../../../components/buttons/DefaultButton'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const text = 'Exceed your tasks and embark on an interactive game on your smartphone.'

class Welcome extends Component {

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Image source={require('../../../assets/icon.png')} style={styles.logo} />
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => navigation.navigate('App')}
                >
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Welcome;
