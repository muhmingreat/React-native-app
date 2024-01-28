// import pokemonGroup from './group-data.json'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SectionList
} from "react-native";
// import pokemon from './components/pokemon'
const pokemon = [
  { id: "1", type: "water", name: "fatiu" },
  { id: "2", type: "water", name: "fatiu" },
  { id: "3", type: "water", name: "fatiu" },
  { id: "4", type: "water", name: "fatiu" },
  { id: "5", type: "water", name: "fatiu" },
  { id: "6", type: "water", name: "fatiu" },
  { id: "7", type: "water", name: "fatiu" },
  { id: "8", type: "water", name: "fatiu" },
  { id: "9", type: "water", name: "fatiu" },
  { id: "10", type: "water", name: "fatiu" },
  { id: "11", type: "water", name: "fatiu" },
  { id: "12", type: "water", name: "fatiu" },
  { id: "13", type: "water", name: "fatiu" },
  { id: "14", type: "water", name: "fatiu" },
  { id: "15", type: "water", name: "fatiu" },
  { id: "16", type: "water", name: "fatiu" },
  { id: "17", type: "water", name: "fatiu" },
  { id: "18", type: "water", name: "fatiu" },
  { id: "19", type: "water", name: "fatiu" },
  { id: "20", type: "water", name: "fatiu" },
  { id: "21", type: "water", name: "fatiu" },
  { id: "22", type: "water", name: "fatiu" },
];
const pokemonGroup = [
  {type: "water", data:['bola','fele','femi']},
  {type: "fire", data:['bola','fele','femi']},
  {type: "grass", data:['bola','fele','femi']},
  {type: "electric", data:['bola','fele','femi']},
]
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>
      {
        pokemon.map(poke => {
          console.log(poke.id)
          return (
              <View style={styles.card} key={poke.id}>
                <Text style={styles.text}>{poke.type}</Text>
                <Text style={styles.text}>{poke.name}</Text>
              </View>
          );
        })
      } 
             <FlatList
               data={pokemon}
              renderItem={({item}) => {
                console.log(item.id)
                return (
                  <View style={styles.card} key={item.id}>
                    <Text style={styles.text}>{item.type}</Text>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                );
              }}
                keyExtractor={(item , index) => item.id.toString()}
                ItemSeparatorComponent={<View style={{height:16}}/>}
            ListEmptyComponent={<Text> No Items Found</Text>}
              ListHeaderComponent={<Text style={styles.header}>Pokemon List</Text>}
            ListFooterComponent={<Text style={styles.footer}> End List</Text>}

            />
      {/* <SectionList
        sections={pokemonGroup}
        renderItem={({item}) => {
      return (
        <View style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      );
        }}
        renderSectionHeader={({section}) => (
      <Text style={styles.sectionHeaderText}>{section.type}</Text>
         )}
         ItemSeparatorComponent={()=> <View style={{height:16}}/>}
         SectionSeparatorComponent={()=> <View style={{height:16}}/>} 
      
       /> */}
             </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

    paddingTop:StatusBar.currentHeight
  },
  scrollView:{
    paddingHorizontal:18
  },
  card:{
    backgroundColor: 'white',
    borderRadius:8,
    padding: 16,
    borderwidth:1,
    marginBottom:16
  },
  text:{
    fontSize:30
  },
  header:{
    fontSize:30,
    textAlign: 'center',
    marginBottom:16,
  },
  footer:{
    fontSize:30,
    textAlign: 'center',
    marginTop:16,
  }, 
  sectionHeaderText:{
    backgroundColor: 'white',
    fontSize:30,
    fontWeight: 'bold',
  }
});
