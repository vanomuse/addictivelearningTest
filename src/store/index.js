// importing observables and decorate
import { decorate, observable, action } from "mobx";
import AsyncStorage from '@react-native-community/async-storage';
class Store {
    //sign up
    email = null;
    password = null;
    confirmPassword = null;
    termsOfUse = false;
    errorSignUp = false;
    authStatus = false;

    changeEmail = text => {
        this.email = text;
    }

    changePassword = text => {
        this.password = text;
    }

    changeConfirmPassword = text => {
        this.confirmPassword = text;
    }

    onPressIAgree = () => {
        this.termsOfUse = !this.termsOfUse
    }

    signUp = async () => {
        const data = new FormData();

        data.append('email', this.email)
        data.append('password', this.password)
        data.append('password_confirmation', this.confirmPassword)
        data.append('terms_of_use', this.termsOfUse)

        const requestOptions = {
            method: 'POST',
            body: data,
        };

        fetch('https://dev.addictivelearning.io/api/v1/register', requestOptions)
            .then(response => response.status)
            .then(res => this.status = res)

        try {
            await AsyncStorage.setItem('authStatus', this.authStatus)
        } catch (error) {
            console.log(error)
        }
    }

    //sing in

    loginEmail = null
    loginPassword = null
    errorSignIn = false
    status = null

    changeLogInEmail = text => {
        this.loginEmail = text;
    }

    changeLoginPassword = text => {
        this.loginPassword = text;
    }

    signIn = async () => {
        const data = new FormData();

        data.append('email', this.loginEmail)
        data.append('password', this.loginPassword)

        const requestOptions = {
            method: 'POST',
            body: data,
        };

        fetch('https://dev.addictivelearning.io/api/v1/login', requestOptions)
            .then(response => response.status)
            .then(res => this.status = res)
        
        try {
            await AsyncStorage.setItem('authStatus', this.authStatus)
        } catch (error) {
            console.log(error)
        }
    }

    logOut = () => {
        const requestOptions = {
            method: 'POST',
        };

        fetch('https://dev.addictivelearning.io/api/v1/logout', requestOptions)
            .then(response => console.log(response))
    }
}


// another way to decorate variables with observable
decorate(Store, {
    email: observable,
    password: observable,
    confirmPassword: observable,
    termsOfUse: observable,
    errorSignUp: observable,

    loginEmail: observable,
    logpassword: observable,
    errorSignIn: observable,
    status: observable,
    authStatus: observable,

    changeEmail: action,
    changePassword: action,
    changeConfirmPassword: action,
    onPressIAgree: action,
    signUp: action,

    changeLogInEmail: observable,
    changeLogInPassword: observable,

    signIn: action,
    logOut: action
});

// export class
export default new Store();