import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { OkraOptionsScreen } from "./OkraOptionsScreen";
import { OkraShortUrlScreen } from "./OkarUrlScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WithOptions" component={OkraOptionsScreen} />
        <Stack.Screen name="WithShortUrl" component={OkraShortUrlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
