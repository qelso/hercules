import { PaperProvider } from "react-native-paper";
import { darkTheme } from "../constants/themes";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";
import WorkoutSequence from "@/components/WorkoutSequence";
import { Sequence } from "@/components/WorkoutSequence";
import { playLetsGoSound, playGetReadySound, playWellDoneSound } from "@/constants/Sounds";
import { parse } from "@babel/core";

type RouteParams = {
    seconds: string
}

export default function EmomTimer() {
    const { seconds, } = useLocalSearchParams<RouteParams>()
    const parsedSeconds = parseInt(seconds!)
    const formatTime = (totSeconds: number) => {
        const hours = Math.floor(totSeconds / 3600)
        const minutes = Math.floor((totSeconds / 60) % 60)
        const seconds = Math.floor(totSeconds % 60)
        return (hours > 0 ? `${String(hours).padStart(2, '0')}:` : ``) + (minutes > 0 ? `${String(minutes).padStart(2, '0')}:` : ``) + `${String(seconds).padStart(2, '0')}`
    }
    let sequence: Sequence= {
        sequenceName: `${formatTime(parsedSeconds)} `,
        sequenceTimers: [{seconds: parsedSeconds, label: "", startSound: playLetsGoSound}]
    }

    return (
        <PaperProvider theme={darkTheme}>
            <View style={{ ...styles.container }}>
                <WorkoutSequence sequence={sequence} ></WorkoutSequence>
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