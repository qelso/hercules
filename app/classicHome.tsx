import { PaperProvider, Portal, Surface, useTheme } from "react-native-paper";
import { Dimensions, FlatList, View } from "react-native";
import { Button, Text, Modal } from "react-native-paper";
import { StyleSheet } from "react-native";
import { darkTheme } from "../constants/themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";
import React from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import Selector from "@/components/Selector";

const { width, height } = Dimensions.get("window")
export default function Emom() {


    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [current, setCurrent] = useState<number>(0)

    const MINSEC = Array.from({ length: 60 }, (_, i) => i)
    
    const HOURS = Array.from({ length: 100 }, (_, i) => i)

    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>
                <View style={{ ...styles.container }}>

                    <View style={styles.header}>
                        <Text variant="displayMedium">TIMER</Text>
                    </View>
                    <View style={styles.center}>

                        {/**<Selector value={minutes} values={SECONDS} singleText="" pluralText="" setValue={setMinutes} mapValues={(value) => `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`}></Selector>  

    */}
                        <View style={{ flexDirection: "row", borderColor: darkTheme.colors.primary, borderWidth: 3, marginHorizontal: 50, borderRadius: 10, overflow: "hidden", paddingHorizontal: 5}} >

                            <ScrollPicker
                                dataSource={HOURS}
                                selectedIndex={hours}
                                renderItem={(data, index) => {
                                    return (
                                        <Text variant="displayMedium" style={{ opacity: index === hours ? 1 : 0.3, }}>{String(data).padStart(2,'0')}</Text>
                                    )
                                }}
                                onValueChange={(data, index) => {
                                    setHours(index)
                                }}
                                wrapperBackground={darkTheme.colors.background}
                                highlightBorderWidth={2}
                                itemHeight={darkTheme.fonts.displayMedium.fontSize + 2}
                                wrapperHeight={darkTheme.fonts.displayMedium.fontSize + 10}

                            ></ScrollPicker>
                            <Text variant="displayMedium">:</Text>
                            <ScrollPicker
                                dataSource={MINSEC}
                                selectedIndex={minutes}
                                renderItem={(data, index) => {
                                    return (
                                        <Text variant="displayMedium" style={{ opacity: index === minutes ? 1 : 0.3, }}>{String(data).padStart(2,'0')}</Text>
                                    )
                                }}
                                onValueChange={(data, index) => {
                                    setMinutes(index)
                                }}
                                wrapperBackground={darkTheme.colors.background}
                                highlightBorderWidth={2}
                                itemHeight={darkTheme.fonts.displayMedium.fontSize + 2}
                                wrapperHeight={darkTheme.fonts.displayMedium.fontSize + 10}
                            ></ScrollPicker>
                            <Text variant="displayMedium">:</Text>
                            <ScrollPicker
                                dataSource={MINSEC}
                                selectedIndex={seconds}
                                renderItem={(data, index) => {
                                    return (
                                        <Text variant="displayMedium" style={{ opacity: index === seconds ? 1 : 0.3, }}>{String(data).padStart(2,'0')}</Text>
                                    )
                                }}
                                onValueChange={(data, index) => {
                                    setSeconds((prev)=>index)
                                }}
                                wrapperBackground={darkTheme.colors.background}
                                highlightBorderWidth={2}
                                itemHeight={darkTheme.fonts.displayMedium.fontSize + 2}
                                wrapperHeight={darkTheme.fonts.displayMedium.fontSize + 10}
                            ></ScrollPicker>

                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Link href={{ pathname: "/classicTimer", params: { seconds: (HOURS[hours]*3600)+(MINSEC[minutes]*60)+MINSEC[seconds] } }} ><Button mode='contained'>START</Button></Link>
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
        backgroundColor: darkTheme.colors.background
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkTheme.colors.background
    },
    center: {
        flex: 3,
        backgroundColor: darkTheme.colors.background,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    bottom: {
        flex: 1,
        alignItems: "center",
        backgroundColor: darkTheme.colors.background
    }
});