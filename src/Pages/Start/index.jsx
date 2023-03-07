import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import LifeStatus from '../../components/common/LifeStatus';
import DefaultButton from '../../components/common/DefaultButton';


export default function Start() {
  const navigation = useNavigation()

  const handelNewAppExplanation = () => {
    navigation.navigate("AppExplanation");
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.logo} source={require('../..//assets/icons/logo3.png')} />
          <LifeStatus />
          <Text style={styles.description}>Vamos transfrmar sua vida{'\n'}em um jogo, buscando sempre{'\n'}o melhor nível</Text>

          <DefaultButton buttonText={'Continuar'} handlePress={handelNewAppExplanation} width={250} height={50} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
  },
  logo:{
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20
  },
  description:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 60,
  }
})