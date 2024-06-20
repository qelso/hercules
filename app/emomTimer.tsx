import { PaperProvider } from "react-native-paper";
import { darkTheme } from "./themes";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";

export default function EmomTimer() {
    const params = useLocalSearchParams()
    const {seconds} = params
    return (
        <PaperProvider theme={darkTheme}>
            <View style={{ ...styles.container }}>
                {/**<Timer seconds={5}></Timer>*/}
                <CountdownCircleTimer
                    isPlaying
                    duration={5} 
                    colors={darkTheme.colors.primary}
                    size={220}
                    onComplete={(elapsed:number) => {{shouldRepeat:true}}}
                    >
                        {({remainingTime}) => <Text variant="displayMedium">{remainingTime}</Text>}

                </CountdownCircleTimer>
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