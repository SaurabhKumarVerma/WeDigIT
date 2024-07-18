import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { appTheme } from "./src/Theme/theme";
import { AuthProvider } from "./src/Components/Context/AuthContext";
import EntryPoint from "./src/app";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AuthProvider>
        <NavigationContainer theme={appTheme}>
          <EntryPoint />
        </NavigationContainer>
        <StatusBar hidden />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
