import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}></StatusBar>
      <Text style={ styles.pageTitle}>ToDo App</Text>
          <View style={styles.listView}>
              <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.listView}>
          <Text style={styles.listTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
} 

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0, // ios 에서는 이미 SafeAreaView 로 처리를 했기 때문에 adnroid가 아닌 경우에는 0
    backgroundColor: '#f7f8fa'
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600'
  },
  seperator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500'
  }
})