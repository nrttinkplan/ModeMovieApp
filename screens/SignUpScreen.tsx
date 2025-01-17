import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import auth from '@react-native-firebase/auth'
import React,{useState} from 'react'

const SignUpScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const signUpTestFn = () => {
        auth().createUserWithEmailAndPassword(email, password).then(()=>{
            Alert.alert("Bu kimlik bilgileri oluşturuldu")
            navigation.navigate("Login")
        })
        .catch((err)=>{
            console.log(err.nativeErrorMessage);
            Alert.alert(err.nativeErrorMessage)
        });
    };

    
    
  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/ticket.png')}
        style={styles.image}
        />

        <Text style={styles.title}>Kayıt Olun</Text>

      
      <View style={styles.inputsContainer}>
        <MyTextInput value={email} onChangeText={text => setEmail(text)} placeholder="mail giriniz" placeholderTextColor="#FFFFFF"/>
        <MyTextInput value={password} onChangeText={text => setPassword(text)} placeholder="şifre giriniz" placeholderTextColor="#FFFFFF"/>
        <MyTextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} placeholder="tekrar şifre giriniz" placeholderTextColor="#FFFFFF"/>
      </View>
      <MyButton onPress={signUpTestFn} title={"Kayıt Ol"} />
        <View  style={styles.footerContainer}>
            <Text style={styles.footerText}>Hesabınız Var Mı?</Text>
            <Text
                 style={styles.linkText}
                 onPress={() => navigation.navigate('Login')}
            >
                Giriş Yapın
            </Text>
        </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2C2C73',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    inputsContainer:{
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
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