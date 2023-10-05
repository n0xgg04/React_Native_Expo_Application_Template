import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

type Props = {
  navigation: any;
};

export default function HomeScreen({ navigation }: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text> Hello</Text>
    </SafeAreaView>
  );
}
