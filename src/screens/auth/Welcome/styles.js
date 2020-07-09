import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 350,
        width: 350
    },
    welcomeText: {
        fontWeight: '500',
        fontSize: 35
    },
    buttonText: {
        color: '#078e7c',
        fontWeight: '700',
        fontSize: 22
    },
    startButton: {
        borderWidth: 2,
        borderColor: '#078e7c',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15
    }

});
