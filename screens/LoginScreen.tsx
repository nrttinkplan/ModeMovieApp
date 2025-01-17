import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import auth from '@react-native-firebase/auth'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginWithEmailAndPass = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res)
            Alert.alert("Başarılı: Giriş Yapıldı")
            navigation.navigate("HomeScreen")
        })
        .catch(err => {
            console.log(err)
            Alert.alert(err.nativeErrorMessage)
        })
    }


  return (
    <View style={styles.container}>
        <Image 
        source={require('../assets/movie-icon.png')}
        style={styles.image}
        />
        <Text style={styles.title}>Mode Movie</Text>
        <Text style={styles.subtitle}>Merhaba 👋</Text>
      
      <View style={styles.inputsContainer}>
      <Text style={styles.inputTitle}>Giriş Yapın</Text>
        <MyTextInput value={email} onChangeText={text => setEmail(text)}  placeholder="Email giriniz" placeholderTextColor="#FFFFFF"/>
        <MyTextInput value={password} onChangeText={text => setPassword(text)} placeholder="Şifre giriniz" placeholderTextColor="#FFFFFF"/>
        
        <MyButton title={"Giriş Yap"} onPress={loginWithEmailAndPass}/>
        
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Henüz Hesabınız Yok Mu?</Text>
            <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('SignUp')}
            >
                Bir Hesap Oluşturun
            </Text>
        

        </View>

      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C73',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    inputsContainer: {
        width: '90%',
        alignItems: 'center',
    },
    inputTitle:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 5, 
        textAlign: 'center',
    },
    linkText: {
        fontSize: 14,
        color: '#B6116B', 
        fontWeight: 'bold',
        textDecorationLine: 'underline', 
        textAlign: 'center',
    },
})