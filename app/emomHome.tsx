import { PaperProvider, Surface, useTheme } from "react-native-paper";
import { Dimensions, FlatList, View } from "react-native";
import { Button, Text, Modal } from "react-native-paper";
import { StyleSheet } from "react-native";
import { darkTheme } from "./themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";
import React from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";

const { width, height } = Dimensions.get("window")
export default function Emom() {


    const [minutes, setMinutes] = useState(0)
    const [current, setCurrent] = useState(0)

    const MINUTES = Array.from({ length: 20 }, (_, i) => i+1)

    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>
                <View style={styles.header}>
                    <Text variant="displayMedium">EMOM</Text>
                    <Text variant="bodySmall">Ogni minuto al minuto</Text>
                </View>
                <View style={{ ...styles.container }}>
                    <View style={{height:"30%"}}>
                        <ScrollPicker
                            dataSource={MINUTES}
                            selectedIndex={0}
                            renderItem={(data, index) => <Text variant="displayMedium" style={{opacity: index===current ? 1 : 0.5}}>{data}</Text>}
                            onValueChange={(data, index) => {
                                setMinutes(data)
                                setCurrent(index)
                            }}
                        
                            wrapperHeight={1}
                            itemHeight={60}
                            wrapperBackground={darkTheme.colors.background}
                            highlightBorderWidth={2}

                        ></ScrollPicker>

                    </View>
                    <Link href={{pathname:"/emomTimer", params:{seconds:minutes}}} ><Button mode='contained'>Start</Button></Link>
                </View>
            </SafeAreaProvider>
        </PaperProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: darkTheme.colors.background
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkTheme.colors.background
    },
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    minutesPicker: {
        paddingBottom: 100,
        paddingHorizontal: 20
    }
});