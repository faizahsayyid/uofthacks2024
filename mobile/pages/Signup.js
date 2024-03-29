import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const imageSources = [
    require('../assets/background1.png'),
    require('../assets/background2.png'),
    require('../assets/background3.png'),
  ];
  const [randomImageSource, setRandomImageSource] = useState(null);
  useEffect(() => {
    chooseRandomImage();
  }, []);

  const chooseRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    setRandomImageSource(imageSources[randomIndex]);
  };

  const handleSignup = () => {
    console.log('Signup Details:', { username, password, name, email, isOver13, agreeToTerms });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {randomImageSource && (
        <Image
          source={randomImageSource}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          resizeMode="cover"
        />
      )}

      {/* Signup form */}
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToLogin} style={{ marginTop: 10 }}>
          <Text style={{ color: 'gray', textAlign: 'center' }}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 20, 
    borderRadius: 10,
    width: 250
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    paddingHorizontal: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#4285f4', 
    padding: 10, 
    borderRadius: 5
  },
  signupButtonText: {
    color: 'white', 
    textAlign: 'center'
  },
});

export default Signup;
