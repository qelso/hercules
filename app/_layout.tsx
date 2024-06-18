import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { darkTheme } from "./themes";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {

  return (
    <>
      <StatusBar style="light" backgroundColor={darkTheme.colors.background} />
      <Stack screenOptions={
        {
          headerStyle:
            { backgroundColor: darkTheme.colors.background },
          headerTintColor: darkTheme.colors.primary,
          headerTitleStyle: { fontWeight: 'bold' },
        }
      }>

        <Stack.Screen name="index" options={{ title: "index", }} />
        <Stack.Screen name="emomHome" options={{ title: "emom", }} /> 
        <Stack.Screen name="emomTimer" options={{ title: "emom", }} /> 

      </Stack>
    </>
  );
}
