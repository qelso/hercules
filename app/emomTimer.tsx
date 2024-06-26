import { PaperProvider } from "react-native-paper";
import { darkTheme } from "../constants/themes";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";
import WorkoutSequence from "@/components/WorkoutSequence";
import { Sequence } from "@/components/WorkoutSequence";
import { playLetsGoSound, playGetReadySound, playWellDoneSound, playRestSound } from "@/constants/Sounds";

type RouteParams = {
    minutes: string
    sets: string
    rest: string
}

export default function EmomTimer() {
    const { minutes, sets, rest } = useLocalSearchParams<RouteParams>()
    const parsedMinutes = parseInt(minutes!)
    const parsedSets = parseInt(sets!)
    const parsedRest = parseInt(rest!)

    let sequence: Sequence= {
        sequenceName: `EMOM ${minutes}'`,
        sequenceTimers: [{seconds: 15, label: "GET READY", startSound: playGetReadySound}]
    }
    for (let i = 0; i < parsedSets; i++) {
        for (let j = 0; j < parsedMinutes; j++) {
            sequence.sequenceTimers.push({seconds: 60, label: `${j+1}/${minutes}`, startSound: playLetsGoSound})
        }

        if (parsedRest > 0) sequence.sequenceTimers.push({seconds: parsedRest, label: "REST", startSound: playRestSound})
    }
    return (
        <PaperProvider theme={darkTheme}>
            <View style={{ ...styles.container }}>
                <WorkoutSequence sequence={sequence} onEnd={playWellDoneSound}></WorkoutSequence>
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