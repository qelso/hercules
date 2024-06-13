import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { darkTheme, lightTheme } from "./themes";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  
  return (
    <>
    <Stack screenOptions={
      { headerStyle: 
          { backgroundColor: darkTheme.colors.background },
          headerTintColor: darkTheme.colors.primary,
          headerTitleStyle: { fontWeight: 'bold' }
      }
    }>
      
      <Stack.Screen name="index" />
      <Stack.Screen name="emom" />
    </Stack>
    <StatusBar style="light" backgroundColor={darkTheme.colors.background}/>
    </>
  );
}
