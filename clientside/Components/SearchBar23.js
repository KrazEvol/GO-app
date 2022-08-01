import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { getSearchResult } from './Api_handler';


const SearchBar23 =  () =>{
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

    return (
         <SafeAreaView>
          <TextInput
            style={styles.searchBox}
            placeholder= "Search"
            onSubmitEditing={(newText) => {
         
              setText(newText)
              getSearchResult(newText.nativeEvent.text)
              // .then(data => {
              //   setResult(data)
              //   console.log(data)
              // })
            }}         
          />
        </SafeAreaView>
      );
    
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center"
    },
    searchInput:{
        width: '100%',
        height: '100%',
        padding: 8,
        fontSize: 10,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 10,
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    }

})

export default SearchBar23