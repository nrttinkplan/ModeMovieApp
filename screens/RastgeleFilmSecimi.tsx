import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const RastgeleFilmSecimi = () => {
  const [film1, setFilm1] = useState('');
  const [film2, setFilm2] = useState('');
  const [film3, setFilm3] = useState('');
  const [film4, setFilm4] = useState('');

  const rastgeleSec = () => {
    const filmler = [film1, film2, film3, film4].filter(film => film.trim() !== '');
    if (filmler.length < 4) {
      Alert.alert('Hata', 'Lütfen seçim yapacağınız film isimlerini giriniz.');
      return;
    }
    const rastgeleFilm = filmler[Math.floor(Math.random() * filmler.length)];
    Alert.alert('Seçilen Film', rastgeleFilm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori Filmlerinizi Girin</Text>
      <Text style={styles.subtitle}>Lütfen rastgele film seçimi için 4 film yazın</Text>
      <TextInput
        style={styles.input}
        placeholder="1. Filmi giriniz"
        placeholderTextColor="#AAA"
        value={film1}
        onChangeText={setFilm1}
      />
      <TextInput
        style={styles.input}
        placeholder="2. Filmi giriniz"
        placeholderTextColor="#AAA"
        value={film2}
        onChangeText={setFilm2}
      />
      <TextInput
        style={styles.input}
        placeholder="3. Filmi giriniz"
        placeholderTextColor="#AAA"
        value={film3}
        onChangeText={setFilm3}
      />
      <TextInput
        style={styles.input}
        placeholder="4. Filmi giriniz"
        placeholderTextColor="#AAA"
        value={film4}
        onChangeText={setFilm4}
      />
      <TouchableOpacity style={styles.button} onPress={rastgeleSec}>
        <Text style={styles.buttonText}>Film Seç</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RastgeleFilmSecimi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C73',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
