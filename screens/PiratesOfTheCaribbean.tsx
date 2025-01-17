import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const PiratesOfTheCaribbean = () => {
    const navigation = useNavigation();
    const questions = [
        {
          question: "Jack Sparrow'un gemisinin adı nedir?",
          options: ['Uçan Hollandalı', 'Kraken', 'Siyah İnci', 'Deniz Yıldızı'],
          answer: 'Siyah İnci',
        },
        {
          question: "Will Turner'ın babası kimdir?",
          options: ['Davy Jones', 'Cutler Bill', 'Hector Bill', 'Bootstrap Bill'],
          answer: 'Bootstrap Bill',
        },
        {
          question: "Jack Sparrow'un sürekli aradığı nesne nedir?",
          options: ['Pusula', 'Altın madalyon', 'Harita', 'Deniz kızı'],
          answer: 'Pusula',
        },
        {
            question: "Uçan Hollandalı'nın kaptanı kimdir?",
            options: ['Jack Sparrow', 'Davy Jones', 'Barbossa', 'Blackbeard'],
            answer: 'Davy Jones',
          },
          {
            question: "Siyah İnci'yi Jack Sparrow'dan çalan kaptan kimdir?",
            options: ['Davy Jones', 'Blackbeard', 'Barbossa', 'Cutler Beckett'],
            answer: 'Barbossa',
          },
          {
            question: "Karayip Korsanları'nda deniz canavarı Kraken'i kontrol eden kimdir?",
            options: ['Barbossa', 'Jack Sparrow', 'Tia Dalma', 'Davy Jones'],
            answer: 'Davy Jones',
          },
          {
            question: "Jack Sparrow'un babasının adı nedir?",
            options: ['Teague Sparrow', 'Blackbeard', 'Davy Sparrow', 'Bootstrap Bill'],
            answer: 'Teague Sparrow',
          },
          {
            question: "Jack Sparrow'un en çok korktuğu şey nedir?",
            options: ['Kraken', 'Ölüm', 'Labirent', 'Deniz'],
            answer: 'Ölüm',
          },
          {
            question: "Jack Sparrow'un en sevdiği içecek nedir?",
            options: ['Bira', 'Şarap', 'Su', 'Rom'],
            answer: 'Rom',
          },
          {
            question: "Karayip Korsanları'nın üçüncü filminin adı nedir?",
            options: ['Ölü Adamın Sandığı', 'Siyah İnci’nin Laneti', 'Dünyanın Sonu', 'Gizemli Denizlerde'],
            answer: 'Dünyanın Sonu',
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
  )
}

export default PiratesOfTheCaribbean

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
})