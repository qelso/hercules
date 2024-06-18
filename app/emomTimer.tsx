import { PaperProvider } from "react-native-paper";
import { darkTheme } from "./themes";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";

export default function Emom() {
    return (
        <PaperProvider theme={darkTheme}>
            <View style={{ ...styles.container }}>


                <Timer seconds={5}></Timer>
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