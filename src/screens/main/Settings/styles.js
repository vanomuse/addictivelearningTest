import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }

});
