import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import HarryPotterQuiz from "../screens/HarryPotterQuiz";
import PiratesOfTheCaribbean from "../screens/PiratesOfTheCaribbean";
import RastgeleFilmSecimi from "../screens/RastgeleFilmSecimi";

const Stack = createStackNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
            <Stack.Screen name="HarryPotterQuiz" component={HarryPotterQuiz} />
            <Stack.Screen name="PiratesOfTheCaribbean" component={PiratesOfTheCaribbean} />
            <Stack.Screen name="RastgeleFilmSecimi" component={RastgeleFilmSecimi} />
            

        </Stack.Navigator>
    )
}