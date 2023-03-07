import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';



export default function StatusBar({mindHabit, moneyHabit, bodyHabit, funHabit}) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Image style={styles.icon} source={require('../../../assets/icons/educationIcon.png')} />
        <ProgressBar style={styles.progress} progress={mindHabit} color={"#90B7F3"} /> 
      </View>

      <View style={styles.statusBar}>
        <Image style={styles.icon} source={require('../../../assets/icons/moneyIcon.png')} />
        <ProgressBar style={styles.progress} progress={moneyHabit} color={"#85BB65"} /> 
      </View>

      <View style={styles.statusBar}>
        <Image style={styles.icon} source={require('../../../assets/icons/bodyIcon.png')} />
        <ProgressBar style={styles.progress} progress={bodyHabit} color={"#FF0043"} /> 
      </View>

      <View style={styles.statusBar}>
        <Image style={styles.icon} source={require('../../../assets/icons/funIcon.png')} />
        <ProgressBar style={styles.progress} progress={funHabit} color={"#FE7F23"} /> 
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgrondColor: '#151515',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  statusBar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  progress:{
    borderRadius: 10,
    width: 250,
    height: 8
  },
  icon:{
    width: 25,
    height: 25,
    marginRight: 5
  }
})