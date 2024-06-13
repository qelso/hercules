import { PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { darkTheme } from "./themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function Emom() {
    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>
                <View style={{ ...styles.container, backgroundColor: darkTheme.colors.background }}>
                    <Button mode="contained"> Timer </Button>
                </View>       
            </SafeAreaProvider>
        </PaperProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});