import { StyleSheet, Pressable } from "react-native"
import React, { useEffect, useState, useRef } from "react"
import { Text, useTheme, Button, ActivityIndicator } from "react-native-paper"
import { View } from "react-native"
import BackgroundTimer, { IntervalId } from "react-native-background-timer"
import { playGetReadySound, playFiveSound, playFourSound, playLetsGoSound, playOneSound, playTenSound, playThirtySound, playThreeSound, playTwoSound, playWellDoneSound } from "@/constants/Sounds"


export default function Timer({ duration, preTimer = 10 }: { duration: number, preTimer: number }) {
    const [seconds, setSeconds] = useState<number>(duration)
    const [isRunning, setIsRunning] = useState(false)
    const [preSeconds, setPreSeconds] = useState(preTimer)
    const [isPreTimer, setIsPreTimer] = useState( preTimer > 0 ? true : false) 

    useEffect(() => {
        //let interval!: IntervalId | undefined;
        let interval : any
        if (isRunning) {
            if (isPreTimer) {
                playGetReadySound()
            }
            interval = BackgroundTimer.setInterval(() => {
                if (isPreTimer) {
                    setPreSeconds(prev => {
                        if (prev > 1) {
                            switch(prev-1) {
                                case 5:
                                    playFiveSound()
                                    break
                                case 4:
                                    playFourSound()
                                    break
                                case 3:
                                    playThreeSound()
                                    break
                                case 2:
                                    playTwoSound()
                                    break
                                case 1:
                                    playOneSound()
                                    break 
                            }
                            return prev - 1
                        }
                        else {
                            setIsPreTimer(false)
                            setSeconds(duration)
                            playLetsGoSound()
                            return prev
                        }
                    })
                }
                else {
                setSeconds(seconds => {
                    if (seconds > 0) {
                        switch ((seconds-1) % 60) {
                            case 30:
                                playThirtySound()
                                break
                            case 10:
                                playTenSound()
                                break
                            case 5:
                                playFiveSound()
                                break
                            case 4:
                                playFourSound()
                                break
                            case 3:
                                playThreeSound()
                                break
                            case 2:
                                playTwoSound()
                                break
                            case 1:
                                playOneSound()
                                break
                            case 0:
                                if (seconds-1 > 0) playLetsGoSound()
                        }
                        return seconds - 1
                    }
                    else {
                        BackgroundTimer.clearInterval(interval)
                        playWellDoneSound()
                        setIsPreTimer(true)
                        setPreSeconds(preTimer)
                        setIsRunning(false)
                        setSeconds(duration)
                        return seconds
                    }
                })
            }}, 1000)
        }
        else {
            if (typeof interval !== undefined) BackgroundTimer.clearInterval(interval)
            setPreSeconds(preTimer)
        }

        return () => { BackgroundTimer.clearInterval(interval) }
    }, [isRunning, isPreTimer ])

    const theme = useTheme()

    const formatTime = (totSeconds: number) => {
        const hours = Math.floor(totSeconds / 3600)
        const minutes = Math.floor((totSeconds / 60) % 60)
        const seconds = Math.floor(totSeconds % 60)
        return (hours > 0 ? `${String(hours).padStart(2, '0')}:` : ``) + (minutes > 0 ? `${String(minutes).padStart(2, '0')}:` : ``) + `${String(seconds).padStart(2, '0')}`
    }

    return (

        <Pressable onPress={() => setIsRunning(!isRunning)}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text variant="displayLarge" style={{ color: theme.colors.primary }}> {isPreTimer && !isRunning ? formatTime(seconds) : isPreTimer && isRunning ? formatTime(preSeconds) : formatTime(seconds)} </Text>
                <Text variant="displaySmall" style={{ color: theme.colors.primary }}> {isPreTimer && !isRunning ? "Tap to Start" : isPreTimer && isRunning ? "Get Ready" : isRunning ? "" : "Paused"} </Text>
            </View>
        </Pressable >

    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 80,
        fontWeight: "bold",
    }
})




