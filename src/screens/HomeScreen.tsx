import * as React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import useAppNavigator from "@Hooks/useAppNavigator";
import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";

type Props = {
  navigation: object;
};

export default React.memo(function HomeScreen({
  navigation,
}: Props): React.JSX.Element {
  const navigator = useAppNavigator({ navigation });
  return (
    <SafeAreaView>
      <Text> Hello</Text>
      <Button
        title="To Next Screen"
        onPress={() => {
          navigator.push(ScreenNameEnum.DASHBOARD);
        }}
      ></Button>
    </SafeAreaView>
  );
});
