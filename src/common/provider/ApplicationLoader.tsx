import React from "react";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import SplashScreenComponent from "@Screens/SplashScreen";
import { View, Text } from "react-native";
import tw from "twrnc";

interface Props {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync().then();
export default function ApplicationLoadProvider({
  children,
}: Props): React.JSX.Element {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);
  React.useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare().then();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <SplashScreenComponent />;
  }

  return (
    <View style={tw`w-full h-full`} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
