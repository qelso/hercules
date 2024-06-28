import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { darkTheme } from "../constants/themes";
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

        <Stack.Screen name="index" options={{ title: "", }} />
        <Stack.Screen name="emomHome" options={{ title: "", }} /> 
        <Stack.Screen name="emomTimer" options={{ title: "", }} /> 

      </Stack>
    </>
  );
}
