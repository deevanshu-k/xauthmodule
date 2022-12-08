# xauthmodule
NPM Module for authentication

## Class Auth
- contains main function and variables

### Functions

#### signUp (take callbackFnx and return token)
```
signUp(signupfnx : callBackFnx){
    return {token}
}
```
#### signupfnx (Must return token)
```
signupfnx = () => {
    return token;
}
```
#### calculateHash (take password and return token)
```
calculateHash = (password) => {
    return hash;
}
```
#### createToken (take id,email,username? and return token)
```
createToken = (id,email,username?) => {
    return token;
}
```

