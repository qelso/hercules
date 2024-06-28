import React, { useState } from "react"
import { Pressable, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useTheme, Portal, Modal } from "react-native-paper"
import { withDecay } from "react-native-reanimated"
import ScrollPicker from "react-native-wheel-scrollview-picker"
type SelectorProps = {
    value: number
    values: Array<number>
    singleText: string
    pluralText: string
    setValue: React.Dispatch<React.SetStateAction<any>>
    mapValues?: (value:any) => string
}
export default function Selector({ value, values, singleText, pluralText, setValue, mapValues }: SelectorProps) {

    const [visible, setVisible] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(0)

    const theme = useTheme()
    return (
        <>
            <Portal>
                <Modal visible={visible} contentContainerStyle={{ alignItems: "center" }} dismissable={false}>
                    <View style={{height:"70%"}}>
                        <View style={{ borderWidth: 5, borderColor: theme.colors.primary, borderRadius: 10 }}>
                            <ScrollPicker
                                dataSource={values}
                                selectedIndex={current}
                                renderItem={(data, index) => {
                                    return (
                                            <Text variant="bodyLarge" style={{ opacity: index === current ? 1 : 0.3, paddingHorizontal: 60}}>{mapValues !== undefined ? mapValues(data) : data}</Text>
                                    )
                                }}
                                onValueChange={(data, index) => {
                                    setValue(data)
                                    setCurrent(index)
                                }}
                                wrapperBackground={theme.colors.background}
                                highlightBorderWidth={2}
                                itemHeight={theme.fonts.displayMedium.fontSize + 2}



                            ></ScrollPicker>
                            <Button style={{borderRadius:0, borderTopWidth:5, borderColor: theme.colors.primary}} onPress={() => setVisible(false)}>OK</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5 }}>
                <View style={{ borderColor: theme.colors.primary, borderStyle: "solid", borderWidth: 3, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Pressable onPress={() => setVisible(true)}><Text variant="displayMedium"> {mapValues !== undefined ? mapValues(value) : value} </Text></Pressable>
                </View>
                <Text variant="displaySmall"> {value > 1 ? pluralText : singleText} </Text>
            </View>

        </>
    )
}