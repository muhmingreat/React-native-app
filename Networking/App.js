import {useState,useEffect} from 'react';
import { StyleSheet,SafeAreaView,StatusBar,ActivityIndicator,
  TextInput,  Button, Text,FlatList, View } from "react-native";

export default function App() {

  const [postList,setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [isPosting, setIsPosting] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async(limit = 10)=> {
    try{
  const response = await fetch
  (`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

  const data = await response.json();
  setPostList(data)
  setIsLoading(false)
  setError('')
}catch(error){
console.error('Error Fetching data', error)
setIsLoading(false)
setError('fail to Fetch data')
}
}

const handleRefresh = () => {
setRefreshing(true)
fetchData(20)
setRefreshing(false)

}
const addPost =  async () => {
  setIsPosting(true)
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    Header:{
      'Content-Type' :'application/json'
    },
    body: JSON.stringify({
      title: postTitle,
      body:postBody,
    })
  }) 
const newPost = await response.json();
setPostList([newPost,...postList])
setPostTitle('')
setPostBody('')
setIsPosting(false)
setError('')
}catch(error){
  console.error('Error to add newPost', error)
  setError("Fail to fetch new post")
}
}
useEffect(() => {
fetchData()
},[])
if(isLoading){
  return (
  <SafeAreaView style={styles.loadingContainer}>
    <ActivityIndicator size='large' color='blue'/>
  <Text> Loading...</Text>
  </SafeAreaView>
  )
}
  return (
    <SafeAreaView style={styles.container}>
      {error? (
        <View style={styles.errorContainer}>
<Text style={styles.errorText}>{error}</Text>
        </View>
      ):(
      <>
      <View style={styles.inputContainer}>
              <TextInput style={styles.input}
              placeholder='Post Title' 
              value={postTitle}
              onChangeText={setPostTitle}/>
      
              <TextInput style={styles.input}
              placeholder='Post Body' 
              value={postBody}
              onChangeText={setPostBody}/>
              <Button title={isPosting ? 'Adding...' : 'Add post'} 
              onPress={addPost} disabledText={isPosting}
              />
      </View>

  <View style={styles.listContainer}>
    <FlatList
      data={postList}
      renderItem={({item}) => {
        return(
          <View style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        )
      }}
      ItemSeparatorComponent={()=> (<View style={{height:16}}/>)}
    ListEmptyComponent= {<Text> No Post found</Text>}
    ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
    ListFooterComponent={<Text style={styles.footerText}> End of list</Text>}
        refreshing={refreshing}
        onRefresh={handleRefresh}
    />
  </View>
  </>
  )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 32,
  },
  bodyText: {
    fontSize: 24,
    color: "green",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  loadingContainer:{
    flex:1,
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight,
    alignItems: "center",
    justifyContent:'center'
  },
  inputContainer:{
    backgroundColor:"white",
    padding:10,
    borderRadius:8,
    borderWidth:1,
    margin:10,

  },
  input:{
    height:40,
    borderColor:'grey',
    borderWidth:1,
    marginBottom:8,
    padding:7,
    borderRadius:5,
  },
  errorContainer:{
    backgroundColor:'#ffc0cb',
    padding:16,
    borderRadius:8,
    borderWidth:1,
    margin:16,
    alignItems:'center',
  },
  errorText:{
    color:'#d8000c',
    textAlign:'center',
  }
});
