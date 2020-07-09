import {StyleSheet, Dimensions} from 'react-native';


const height = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
      height: 250,
      width: 250
  },
  inputContainer: {
    paddingVertical: 25,
    alignItems: 'center'
  },
  text: {
    
  }
});
