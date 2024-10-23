// Importação
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// Definição do componente App
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Lógica de validação de login
    if (email === 'jurandir.pereira@hotmail.com' && password === '123456') {
      setErrorMessage('');
      // Navegar para a próxima tela, se a validação for bem-sucedida
    } else {
      setErrorMessage('E-mail e/ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Satisfying.you <Text style={styles.smile}>😊</Text></Text>

      <Text style={styles.rotulo} >E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#B0B0B0"
      />

<Text style={styles.rotulo} >Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#B0B0B0"
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonNewAccount}>
        <Text style={styles.link}>Criar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonForgot}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#372775',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Averia Libre',
    fontWeight: 'Regular',
    color: '#ffffff',
    marginBottom: 40,
  },
  smile: {
    fontSize: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#37BD6D',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: '#FD7979',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  buttonNewAccount: {
    backgroundColor: '#419ED7',
    padding: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonForgot: {
    backgroundColor: '#B0CCDE',
    padding: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  rotulo:{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Averia Libre',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
});

// Exportação
export default App;
