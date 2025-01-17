import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyTextInput = ({...props}) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} {...props} />
 

    
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, 
        borderColor: '#FFFFFF', 
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
    input:{
       flex: 1,
        fontSize: 16,
        color: '#FFFFFF', 
        padding: 10,
    }
})