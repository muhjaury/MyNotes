import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <View>
        <Button title='Tes' onPress={()=>{
          Alert.alert("Testing Button","This is alert message")
        }}/>
      </View>
    </View>
  )
}

export default App