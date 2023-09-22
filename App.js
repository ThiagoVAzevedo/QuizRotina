import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [nomeUsuario, setNomeUsuario] = useState(''); // Corrigido para setNomeUsuario
  const [senha, setSenha] = useState('');

  const showAlert = () => {
    Alert.alert('Login concluído', 'Seu Login foi concluído com sucesso!'); // Corrigido para Alert.alert
  };
  const handleGoToCadastro = () => {
    navigation.navigate('Cadastro'); // 'Cadastro' é o nome da tela de destino
  };
  const clickHandler = () => {
    alert('Alunos: Thiago Valladão e Júlia Teles');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.display1}>Quiz de Rotina e Bem-Estar</Text>
        <Image
          source={require('./assets/saude.png')}
          style={styles.logo}
        />
        <Text style={styles.label}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={nomeUsuario}
          onChangeText={(text) => setNomeUsuario(text)} // Corrigido para setNomeUsuario
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true} // Adicionado para ocultar a senha
        />

        <Button title="Login" onPress={showAlert} />
        <br></br>
        <Button title="Cadastro" onPress={handleGoToCadastro} />

        <StatusBar style="auto" />
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
          source={{
            uri:
              'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
          }}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  display1: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  logo: {
    width: 180,
    height: 150,
    marginBottom: 20,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },

  hyperlinkStyle: {
    color: 'blue',
  },

  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
});
