import {Navigation} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import{Pressable, Text} from 'react-native'

const Stack = createNativeStackNavigator()
export default function App  () {
return (
  <Navigation>
    <Stack.Navigator initialRouteName='About'
    screenOptions={{
      headerStyle:{
        backgroundColor:'#6a51ae',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
      headerRight: () => (
        <Pressable onPress={()=> alert('Menu button pressed')}>
          <Text style={{color:'#fff',fontSize:16}}>Menu</Text>
  
        </Pressable>
      ), 
      contentStyle:{
        backgroundColor:'green',
      }
    }}
    >
      
      <Stack.Screen name='Home'component={HomeScreen}
      options={{
    title:'Welcome Home',
    
      }}/>
      <Stack.Screen name='About'component={AboutScreen} initialParams={{
        name:'Latifa'}}
        />
    </Stack.Navigator >
    </Navigation>
)
}
