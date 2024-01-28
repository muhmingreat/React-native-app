import {Text,View, StyleSheet,Button} from 'react-native'
// import {useNavigation} from '@react-navigation/native' 

export default function AboutScreen ({route,navigation})  {
const {name} = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About{name}</Text>
            <Button title='Update the name'
             onPress={()=> navigation.setParams({
                name: 'Dlt Africa'
             })}/>
             <Button title='Go to DLT' 
             onPress={() =>
                 navigation.navigate('Home',{result:'data from About'})}/>
        </View>
    )
}
 const  styles  = StyleSheet.create({
container:{
    flex:1,
    alignItem:"center",
    justifyContent: "center",
},
text:{
    fontSize:24,
    marginBottom:16,
    fontWeight: "bold",
}
 })