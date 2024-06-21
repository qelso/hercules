import { PaperProvider } from "react-native-paper";
import { darkTheme } from "./themes";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";

export default function EmomTimer() {
    const { seconds } = useLocalSearchParams<{ seconds: number }>()

    return (
        <PaperProvider theme={darkTheme}>
            <View style={{ ...styles.container }}>
                <Timer seconds={seconds}></Timer>

            </View>

        </PaperProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkTheme.colors.background
    },
});