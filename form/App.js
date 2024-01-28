
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";
import {useState} from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const  [error, setErrors]  = useState({})

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = 'Username is Require'
    if (!password) errors.password = 'Password is Require'
    setErrors(errors)
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () =>{
if (validateForm()) {
  console.log('Submited', username,password)
  setUsername('')
  setPassword('')
  setErrors({})
}
  }

  return (
    <KeyboardAvoidingView
    behavior='padding'
  keyboardVerticalOffset={Platform.OS === 'andriod'? 100: 0}
     style={styles.container}>
        <View style={styles.form}>
          <Image  style={styles.image} source={require("./assets/adaptive-icon.png")} />
          <Text style={styles.label}> Username</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            value={username}
            onChangeText={setUsername}
          />
          {error.username ? (
            <Text style={styles.errorText}>{error.username}</Text>
          ): null }
          
          <Text style={styles.label}> Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
           {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
         ) : null}
          <Button title='Login' onPress={handleSubmit}/>
    </View>
 </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:20,
    backgroundColor:'#f5f5f5',
  },
  form:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevator:5,
    // marginTop:20
  },
  label:{
    fontSize:16,
    marginBotton:5,
    fontWeight:'bold',
  },
  input:{
    height:40,
    borderColor:'#000',
    borderWidth:1,
    marginBottom:10,
    padding:10,
    borderRadius:5
 },
 image:{
  height:200,
  width:200,
	
  alignSelf: 'center',
 },
 errorText:{
  color:'red',
  alignSelf:'center',
  fontSize:24
 }
  });
  
  // const [name, setName] = useState('')
  // const[darkMode, setDarkMode ] = useState(false)
  // return (
  //   <SafeAreaView style={styles.container}>
  //    <TextInput style={styles.input} value={name} onChangeText={setName}
  //     placeholder='write your name'
  //     autoComplete={false}
  //     autoCapitalize='none'
  //     secureTextEntry={true}
  //     keyBoardType='numeric'
  //    /> 
  
  //    <TextInput style={styles.multilineText} placeholder='message' multiline/>
  //     <Text style={styles.text}> My Name {name}</Text>
  //     <View style={styles.switchContainer}>
  //     <Text style={styles.text}> Dark Mode</Text>
  //       <Switch  value={darkMode} onValueChange={() => 
  //       setDarkMode((previousState) => !previousState)}
  //         trackColor={{false:'red', true:'green'}}
  //         tumbColor='blue'
  //       />
  //     </View>
  //   </SafeAreaView>