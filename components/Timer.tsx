import { StyleSheet, Pressable } from "react-native"
import React, { useEffect, useState, useRef } from "react"
import { Text, useTheme, Button, ActivityIndicator } from "react-native-paper"
import { View } from "react-native"

export default function Timer({ duration, preTimer = 10 }: { duration: number, preTimer: number }) {
    const [seconds, setSeconds] = useState<number>(duration)
    const [isRunning, setIsRunning] = useState(false)
    const [preSeconds, setPreSeconds] = useState(preTimer)
    const [isPreTimer, setIsPreTimer] = useState( preTimer > 0 ? true : false) 
    const wasRunning = usePrevious(isRunning)

    useEffect(() => {
        let interval: number | NodeJS.Timeout | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                if (isPreTimer) {
                    setPreSeconds(prev => {
                        if (prev > 1) {
                            return prev - 1
                        }
                        else {
                            setIsPreTimer(false)
                            setSeconds(duration)
                            return prev
                        }
                    })
                }
                else {
                setSeconds(seconds => {
                    if (seconds > 0) {
                        return seconds - 1
                    }
                    else {
                        clearInterval(interval)
                        return seconds
                    }
                })
            }}, 1000)
        }
        else {
            clearInterval(interval)
            setPreSeconds(preTimer)
        }

        return () => { clearInterval(interval) }
    }, [isRunning, isPreTimer, ])

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

function usePrevious(value: any) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current;


}


