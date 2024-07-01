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


    const [minutes, setMinutes] = useState<number>(1)
    const [rest, setRest] = useState<number>(0)
    const [sets, setSets] = useState<number>(1)

    const [addSets, setAddSets] = useState<boolean>(false)

    const VISIBLE_MINUTES = 3
    const MINUTES = Array.from({ length: 100 }, (_, i) => i + 1)
    const SECONDS =  Array.from({ length: 100 }, (_, i) => 15*(i))
    const SETS = MINUTES

    return (
        <PaperProvider theme={darkTheme}>
            <SafeAreaProvider>
                <View style={{ ...styles.container }}>

                    <View style={styles.header}>
                        <Text variant="displayMedium">EMOM</Text>
                        <Text variant="bodySmall">Ogni minuto al minuto</Text>
                    </View>
                    <View style={styles.center}>
                        {/** 
                        
                            */}
                        <Selector value={minutes} values={MINUTES} singleText="MINUTO" pluralText="MINUTI" setValue={setMinutes}></Selector>  
                        
                        {
                            addSets ? <>
                        <Selector value={sets} values={SETS} singleText="SET" pluralText="SET" setValue={setSets}></Selector> 
                        <Selector value={rest} values={SECONDS} singleText="REST" pluralText="REST" setValue={setRest} mapValues={(value) => `${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`}></Selector> 
                        </> : <></>

                        }
                                                <Button mode="outlined" style={{alignSelf:"center", margin:20}} onPress={() => {
                            if(addSets) {
                                setSets(1)
                                setRest(0)
                            }
                            setAddSets(!addSets)
                            
                            }}>{addSets ? "-" : "+"} SETS</Button>
                    </View>
                    <View style={styles.bottom}>
                        <Link href={{ pathname: "/emomTimer", params: { minutes: minutes, sets: sets, rest: rest} }} ><Button mode='contained'>START</Button></Link>
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
        alignItems: "flex-start"
    },
    bottom: {
        flex: 1,
        alignItems: "center",
        backgroundColor: darkTheme.colors.background
    }
});