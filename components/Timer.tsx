import { StyleSheet, Pressable } from "react-native"
import React, { useEffect, useState, useRef } from "react"
import { Text, useTheme, Button, ActivityIndicator } from "react-native-paper"
import { View } from "react-native"
import BackgroundTimer, { IntervalId } from "react-native-background-timer"
import { playFiveSound, playFourSound, playOneSound, playTenSound, playThirtySound, playThreeSound, playTwoSound } from "@/constants/Sounds"

type TimerProps = {
    duration: number
    label?: string
    onEnd?: any
    onStart?: any
}

export default function Timer({ duration = 0, label, onEnd, onStart}: TimerProps) {
    const [seconds, setSeconds] = useState<number>(duration)
    const [isRunning, setIsRunning] = useState(true) 
    const [ended, setEnded] = useState(false)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        //let interval!: IntervalId | undefined;
        let interval : any
        if (!started) {
            if (onStart !== undefined) onStart()
            setStarted(true)
        }
        if (ended && onEnd !== undefined) onEnd()
        else if (isRunning) {
            interval = BackgroundTimer.setInterval(() => {
                setSeconds(seconds => {
                    if (seconds-1 > 0) {
                        switch (seconds-1) {
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
                        }
                        return seconds-1
                    }
                    else {
                        BackgroundTimer.clearInterval(interval)
                        setEnded(true)
                        return seconds
                    }
                })
            }, 1000)
        }
        else {
            if (typeof interval !== undefined) BackgroundTimer.clearInterval(interval)  
        }
        return () => { BackgroundTimer.clearInterval(interval) }
    }, [isRunning, ended])

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
                <Text variant="displayLarge" style={{ color: theme.colors.primary }}> {isRunning ? formatTime(seconds) : "PAUSED"} </Text>
                <Text variant="displaySmall" style={{ color: theme.colors.primary }}> { label } </Text>
            </View>
        </Pressable >


    )
}
