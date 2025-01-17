import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HarryPotterQuiz = () => {

const navigation = useNavigation();
  const questions = [
    {
      question: "Harry'nin en yakın iki arkadaşı kimdir?",
      options: ['Neville ve Ginny', 'Draco ve Luna', 'Ron ve Hermione', 'Fred ve George'],
      answer: 'Ron ve Hermione',
    },
    {
      question: "Harry'nin okuduğu okulun adı nedir?",
      options: ['Hogwarts', 'Durmstrang', 'Beauxbatons', 'Ilvermorny'],
      answer: 'Hogwarts',
    },
    {
      question: "Harry, Bertie Bott'un her türlü tadı olan fasulyelerinden hangi tada yanlışlıkla denk gelmiştir?",
      options: ['Kir', 'Kusmuk', 'Kulak kiri', 'Çorap'],
      answer: 'Kulak kiri',
    },
    {
        question: "Hogwarts'ta Felsefe Taşı'nı korumak için kullanılan engellerden biri hangi öğretmene aittir?",
        options: ['Sprout', 'McGonagall', 'Flitwick', 'Hagrid'],
        answer: 'Hagrid',
      },
      {
        question: "Voldemort’un yandaşlarının karanlık işareti hangi şekildedir?",
        options: ['Kafatası ve yılan', 'Yılan', 'Ejderha', 'Asa ve kelebek'],
        answer: 'Kafatası ve yılan',
      },
      {
        question: "Harry, turnuvadaki ikinci görevde kimi kurtarmıştır?",
        options: ['Hermione', 'Ron', 'Pigwidgeon', 'Fleur’un kız kardeşi'],
        answer: 'Ron',
      },
      {
        question: "Harry'nin kullandığı asasının özü nedir?",
        options: ['Ejderha yüreği', 'Anka tüyü', 'Tek boynuzlu at kılı', 'Akkor'],
        answer: 'Anka tüyü',
      },
      {
        question: "Üçbüyücü Turnuvası'nda Harry'nin birinci görevi nedir?",
        options: ['Ejderhayla savaş', 'Gölde yüzmek', 'Labirenti geçmek', 'Asa düellosu'],
        answer: 'Ejderhayla savaş',
      },
      {
        question: "Harry'nin vaftiz babası kimdir?",
        options: ['Snape', 'Lily', 'Remus', 'Sirius'],
        answer: 'Sirius',
      },
      {
        question: "Gryffindor'un ortak salonunun girişindeki şifreyi kim verir?",
        options: ['Filch', 'Errol', 'Snape', 'Şişman Kadın'],
        answer: 'Şişman Kadın',
      },


    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleNext = () => {
    if (!selectedOption) {
      Alert.alert('Uyarı', 'Lütfen bir cevap seçin!');
      return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {!isQuizFinished ? (
        <>
          <Text style={styles.questionNumber}>
            {currentQuestion + 1}/{questions.length}
          </Text>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.navigation}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => handleNext()}
            >
              <Text style={styles.navButtonText}>
                {currentQuestion < questions.length - 1 ? 'İleri' : 'Tamamla'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Sonuçlar</Text>
          <Text style={styles.resultText}>
            Doğru Sayısı: {correctAnswers}
          </Text>
          <Text style={styles.resultText}>
            Yanlış Sayısı: {questions.length - correctAnswers}
          </Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              setIsQuizFinished(false);
              setCurrentQuestion(0);
              setCorrectAnswers(0);
              setSelectedOption(null);
            }}
          >
            <Text style={styles.navButtonText}>Tekrar Dene</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.QuizScreenBtn} onPress={() => navigation.navigate('QuizScreen')}>
            <Text style={styles.QuizScreenBtnText}>Quiz Sayfası</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HarryPotterQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C2C73',
    justifyContent: 'center',
  },
  questionNumber: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#44475A',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  selectedOption: {
    backgroundColor: '#B6116B',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  QuizScreenBtn: {
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  QuizScreenBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
