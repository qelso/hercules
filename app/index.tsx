import { Text, View } from "react-native";
import { DefaultTheme, PaperProvider, Button } from "react-native-paper";
import { darkTheme } from "./themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <PaperProvider theme={darkTheme}>
      <SafeAreaProvider>
        <View style={{ ...styles.container, backgroundColor: darkTheme.colors.background }}>
          <Button mode="contained"> <Link href="/emomHome">EMOM</Link> </Button>
        </View>
      </SafeAreaProvider>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});