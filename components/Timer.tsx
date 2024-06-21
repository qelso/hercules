import { StyleSheet, Pressable} from "react-native"
import React, { useEffect, useState } from "react"
import { Text,useTheme, Button, ActivityIndicator } from "react-native-paper"


export default function Timer({seconds}:{seconds:number}) {
    const [s, setSeconds] = useState<number>(seconds)
    const [isRunning, setIsRunning] = useState(false)
   
    useEffect(() => {
        let interval: number | NodeJS.Timeout | undefined;

        if (isRunning) {
            console.log("Timer running")
            interval = setInterval(() => {
                setSeconds(s => {
                    if (s > 0) {
                        return s-1
                    }
                    else{
                        clearInterval(interval)
                        return s
                    }})
            },1000)
        } 
        else {
            console.log("stopped timer")
            clearInterval(interval)
        } 

        return () => {clearInterval(interval)}
    }, [isRunning])
    
    const theme = useTheme()

    const formatTime = (totSeconds:number) => {
        const hours = Math.floor(totSeconds / 3600)
        const minutes = Math.floor((totSeconds / 60) % 60)
        const seconds = Math.floor(totSeconds % 60) 
        return (hours > 0? `${String(hours).padStart(2,'0')}:` : ``)+(minutes > 0? `${String(minutes).padStart(2,'0')}:` : ``)+`${String(seconds).padStart(2,'0')}`
    }
    return (
        <>
        <Pressable onPress={()=> setIsRunning(!isRunning)}>
        <Text variant="displayLarge" style={{color:theme.colors.primary}}> {formatTime(s)} </Text>
       </Pressable> 
        
        </>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 80,
        fontWeight: "bold",
    }
})


