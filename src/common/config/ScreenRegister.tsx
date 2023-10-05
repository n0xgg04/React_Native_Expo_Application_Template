import { ScreenInfo } from "@/@types/interfaces";
import HomeScreen from "@/screens/HomeScreen";
import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";

const defaultScreenWhenOpenApp: ScreenNameEnum = ScreenNameEnum.HOME;
const ScreenRegisterList: ScreenInfo[] = [
  {
    name: ScreenNameEnum.HOME,
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: ScreenNameEnum.DASHBOARD,
    component: HomeScreen,
  },
];

const ScreenRegister = {
  get list(): ScreenInfo[] {
    return ScreenRegisterList;
  },
};

export default ScreenRegisterList;
export { ScreenRegister, defaultScreenWhenOpenApp };
