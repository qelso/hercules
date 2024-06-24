import { StyleSheet, Pressable } from "react-native"
import React, { useEffect, useState, useRef } from "react"
import { Text, useTheme, Button, ActivityIndicator } from "react-native-paper"
import { View } from "react-native"
import { Audio } from "expo-av"
import { Sound } from "expo-av/build/Audio"
import { addWhitelistedNativeProps } from "react-native-reanimated/lib/typescript/ConfigHelper"
import { AuthSessionOpenOptions } from "expo-web-browser"

export default function Timer({ duration, preTimer = 10 }: { duration: number, preTimer: number }) {
    const [seconds, setSeconds] = useState<number>(duration)
    const [isRunning, setIsRunning] = useState(false)
    const [preSeconds, setPreSeconds] = useState(preTimer)
    const [isPreTimer, setIsPreTimer] = useState( preTimer > 0 ? true : false) 
    const wasRunning = usePrevious(isRunning)
   
    const[getReadySound,setGetReadySound] = useState<Audio.Sound>()
    const[letsGoSound,setLetsGoSound] = useState<Audio.Sound>()
    const[wellDoneSound, setWellDoneSound] = useState<Audio.Sound>()
    const[fiveSound, setFiveSound] = useState<Audio.Sound>()
    const[fourSound, setFourSound] = useState<Audio.Sound>()
    const[threeSound, setThreeSound] = useState<Audio.Sound>()
    const[twoSound, setTwoSound] = useState<Audio.Sound>()
    const[oneSound, setOneSound] = useState<Audio.Sound>() 

    async function playGetReadySound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/get_ready.mp3"))
        setGetReadySound(sound)
        await sound.playAsync()  
    }
    async function playLetsGoSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/lets_go.mp3"))
        setLetsGoSound(sound)
        await sound.playAsync()  
    }
    async function playWellDoneSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/well_done.mp3"))
        setWellDoneSound(sound)
        await sound.playAsync()  
    }
    async function playFiveSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/five.mp3"))
        setFiveSound(sound)
        await sound.playAsync()  
    }
    async function playFourSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/four.mp3"))
        setFourSound(sound)
        await sound.playAsync()  
    }
    async function playThreeSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/three.mp3"))
        setThreeSound(sound)
        await sound.playAsync()  
    }

    async function playTwoSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/two.mp3"))
        setTwoSound(sound)
        await sound.playAsync()  
    }

    async function playOneSound() {
        const {sound} = await Audio.Sound.createAsync(require("../assets/sounds/one.mp3"))
        setOneSound(sound)
        await sound.playAsync()  
    }

    useEffect(() => {
        letsGoSound ? () => {letsGoSound.unloadAsync()} : undefined
    },[letsGoSound])
    useEffect(() => {
        getReadySound ? () => {getReadySound.unloadAsync()} : undefined
    },[getReadySound])
    useEffect(() => {
        wellDoneSound ? () => {wellDoneSound.unloadAsync()} : undefined
    },[wellDoneSound]) 
    useEffect(() => {
        fiveSound ? () => {fiveSound.unloadAsync()} : undefined
    },[fiveSound]) 
    useEffect(() => {
        fourSound ? () => {fourSound.unloadAsync()} : undefined
    },[fourSound]) 
    useEffect(() => {
        threeSound ? () => {threeSound.unloadAsync()} : undefined
    },[threeSound]) 
    useEffect(() => {
        threeSound ? () => {threeSound.unloadAsync()} : undefined
    },[threeSound]) 
    useEffect(() => {
        twoSound ? () => {twoSound.unloadAsync()} : undefined
    },[twoSound]) 
    useEffect(() => {
        oneSound ? () => {oneSound.unloadAsync()} : undefined
    },[oneSound]) 

    useEffect(() => {
        let interval: number | NodeJS.Timeout | undefined;

        if (isRunning) {
            if (isPreTimer) {
                playGetReadySound()
            }
            interval = setInterval(() => {
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

function usePrevious(value: any) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current;


}


