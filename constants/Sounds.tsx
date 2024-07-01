
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av"

Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
    playThroughEarpieceAndroid: false
})


export async function playGetReadySound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/get_ready.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playLetsGoSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/lets_go.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playWellDoneSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/well_done.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playFiveSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/five.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playFourSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/four.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playThreeSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/three.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playTwoSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/two.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playOneSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/one.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playThirtySound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/thirty_seconds.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playTenSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/ten_seconds.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}
export async function playRestSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/sounds/rest.mp3"), {}, (status) => { if (status.didJustFinish) sound.unloadAsync() })
    await sound.playAsync()
}