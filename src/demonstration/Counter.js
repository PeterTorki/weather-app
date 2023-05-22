import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count changed: ${count}`)
    return () => {
      console.log('useEffect cleanup')
    }
  }, [newCount])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setCount(count + 1)
          console.log(count)  
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
          setCount(count - 1)
          console.log(count)  
        }}
      />
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {setNewCount(newCount + 1)}}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {setNewCount(newCount - 1)}}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  title: {
    alignSelf: 'center',
    fontSize: 25
  }
})
export default Counter