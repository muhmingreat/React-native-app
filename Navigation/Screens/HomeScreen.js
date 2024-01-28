import {Text,View, StyleSheet} from 'react-native'
export default function HomeScreen ({navigation, route})  {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button title='Go to About'
             onPress={()=> navigation.navigate('ABout',
             {
                name:'Muhmin'
             }
        
        )}/>
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