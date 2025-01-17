import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const QuizScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.homeScreenBtn} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.homeScreenBtnText}>Ana Sayfa</Text>

        </TouchableOpacity>
      <Text style={styles.title}>Film Serisi Quiz</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HarryPotterQuiz')}
      >
        <Text style={styles.buttonText}>Harry Potter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PiratesOfTheCaribbean')}>
        <Text style={styles.buttonText}>Karayip Korsanları</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C73',
  },
  homeScreenBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#B6116B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  homeScreenBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B6116B',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
