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


    const [minutes, setMinutes] = useState<number>(1)
    const [current, setCurrent] = useState<number>(0)

    const VISIBLE_MINUTES = 3
    const MINUTES = Array.from({ length: 100 }, (_, i) => i + 1)
    const OPACITIES = Array.from({ length: VISIBLE_MINUTES })


    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>

                <View style={{ ...styles.container }}>
                    <View style={styles.header}>
                        <Text variant="displayMedium">EMOM</Text>
                        <Text variant="bodySmall">Ogni minuto al minuto</Text>
                    </View>
                    <View style={{ height: "30%" }}>

                        <ScrollPicker
                            dataSource={MINUTES}
                            selectedIndex={0}
                            renderItem={(data, index) => {
                                return (<Text variant="displayMedium" style={{ opacity: index === current ? 1 : 0.3 }}>{data}</Text>)
                            }}
                            onValueChange={(data, index) => {
                                setMinutes(data)
                                setCurrent(index)
                            }}
                            wrapperBackground={darkTheme.colors.background}
                            highlightBorderWidth={2}
                            itemHeight={darkTheme.fonts.displayMedium.fontSize + 2}

                        ></ScrollPicker>


                    </View>
                    <View style={{ flex: 1, justifyContent:"center"}}>
                        <Link href={{ pathname: "/emomTimer", params: { seconds: minutes*60 } }} ><Button mode='contained'>Start</Button></Link>
                    </View>
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