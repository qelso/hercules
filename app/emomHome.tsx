import { PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Text, Modal } from "react-native-paper";
import { StyleSheet } from "react-native";
import { darkTheme } from "./themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Collapsible } from "@/components/Collapsible";
import Timer from "@/components/Timer";
import { useState } from "react";
import { Link } from "expo-router";

export default function Emom() {

    const [selected, setSelected] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [minutes, setMinutes] = useState(0)

    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>

                <View style={{ ...styles.container }}>

                    <Text variant="displayMedium"> EMOM </Text>
                    <Text variant="bodyLarge"> Ogni minuto al minuto per {minutes} minuti </Text>

                    <Link href="/emomTimer"><Button mode='contained'>Start</Button></Link>

                </View>
            </SafeAreaProvider>
        </PaperProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: darkTheme.colors.background
    },
});