import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


interface ApiResponse {
  candidates: Candidate[];
  modelVersion: string;
  usageMetadata: UsageMetadata;
}

interface Candidate {
  avgLogprobs: number;
  content: Content;
  finishReason: string;
}

interface Content {
  parts: Part[];
  role: string;
}

interface Part {
  text: string;
}

interface UsageMetadata {
  candidatesTokenCount: number;
  promptTokenCount: number;
  totalTokenCount: number;
}

const HomeScreen: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const navigation = useNavigation();

  const movieKeywords = [
    'film',
    'movie',
    'komedi',
    'drama',
    'aksiyon',
    'romantik',
    'bilim kurgu',
    'belgesel',
    'gerilim',
    'korku',
    'animasyon',
    'film öner',
    'film tavsiyesi',
    'sinema',
    'dizi'
  ];

  const isMovieRelated = (prompt: string): boolean => {
    const lowerCasePrompt = prompt.toLowerCase();
    return movieKeywords.some(keyword => lowerCasePrompt.includes(keyword));
  };

  const handleSearch = async () => {
    if (!prompt.trim()) {
      Alert.alert('Uyarı', 'Lütfen bir öneri isteği girin.');
      return;
    }

    if (!isMovieRelated(prompt)) {
      Alert.alert(
        'Geçersiz İstek',
        'Girdiğiniz istek film ile ilgili değil. Lütfen film önerileri için spesifik bir istek girin. Örneğin:\n\n"Neşelenmemi sağlayacak, komedi türünde filmler öner"'
      );
      return;
    }

    setLoading(true);
    try {
      const apiKey = 'AIzaSyAlK8dmNGm7NpPmJhzRVFbx6e2aU84hTt4'; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "model", 
              parts: [{ text: "You are a movie recommendation assistant. Only respond to movie-related prompts." }]
            },
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ]
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ağ yanıtı beklenen formatta değil: ${errorText}`);
      }

      const data: ApiResponse = await response.json();
      console.log('API Yanıtı:', JSON.stringify(data, null, 2)); 

      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAiResponse(content || 'Yanıt alınamadı...');
    } catch (error) {
      console.error('API isteği sırasında hata:', error);
      Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.');
      setAiResponse('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };






  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode Movie</Text>
      <Text style={styles.subtitle}>Hoş Geldiniz</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Film önerisi isteyin"
          placeholderTextColor="#FFFFFF"
          value={prompt}
          onChangeText={setPrompt}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.searchButton, loading && styles.disabledButton]} 
          onPress={handleSearch} 
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.searchText}>→</Text>
          )}
        </TouchableOpacity>
      </View>

      {aiResponse ? (
        <ScrollView style={styles.responseContainer}>
          <Text style={styles.responseText}>{aiResponse}</Text>
        </ScrollView>
      ) : null}


<TouchableOpacity 
        style={styles.quizButton} 
        onPress={() => navigation.navigate('QuizScreen')}
      >
        <Text style={styles.quizButtonText}>Quiz'e Başla</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.RastgeleFilmSecimiButton}
        onPress={() => navigation.navigate('RastgeleFilmSecimi')}>
            <Text style={styles.RastgeleFilmSecimiButtonText}>Rastgele Film Seçimi</Text>
        </TouchableOpacity>





    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C73',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FF9CEE',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  addButton: {
    width: 30,
    height: 30,
    backgroundColor: '#6C4AB6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  addText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    width: 30,
    height: 30,
    backgroundColor: '#6C4AB6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#555',
  },
  searchText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  responseContainer: {
    marginTop: 20,
    width: '100%',
    padding: 10,
    backgroundColor: '#1A1A2E',
    borderRadius: 10,
    maxHeight: 300,
  },
  responseText: {
    color: '#fff',
    fontSize: 16,
  },
  quizButton:{
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  quizButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  RastgeleFilmSecimiButton: {
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
    RastgeleFilmSecimiButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
