import HomeScreen from "@/screens/HomeScreen";
import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";
import ApplicationScreenBase from "@/common/base/ApplicationScreens";

const ApplicationScreenObject = new ApplicationScreenBase({
  options: {
    firstScreen: ScreenNameEnum.HOME,
  },
});
ApplicationScreenObject.addScreen({
  name: ScreenNameEnum.HOME,
  component: HomeScreen,
  options: {
    headerShown: false,
  },
}).addScreen({
  name: ScreenNameEnum.DASHBOARD,
  component: HomeScreen,
});

export default ApplicationScreenObject;
