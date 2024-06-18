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

export default function Emom() {

    const [selected, setSelected] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [minutes, setMinutes] = useState(0)

    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>

                <View style={{ ...styles.container }}>
                    {selected ? <Timer seconds={10}></Timer> :
                        <>
                            <Text variant="displayMedium"> {minutes} Minutes</Text>
                            <Button mode='contained' onPress={() => setSelected(true)}>Start</Button>

                        </>
                    }
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
        backgroundColor: darkTheme.colors.background
    },
});