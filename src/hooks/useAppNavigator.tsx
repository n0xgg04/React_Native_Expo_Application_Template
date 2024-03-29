import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";
import { ApplicationNavigator, NavigatorObject } from "@/@types/interfaces";

interface Props {
  navigation: NavigatorObject;
}

export default function useAppNavigator({
  navigation,
}: Props): ApplicationNavigator {
  /**
   * @description Navigate to screen
   * @param screenName ScreenNameEnum
   * @param params object | undefined - params to pass to screen
   */
  const navigateTo = (screenName: ScreenNameEnum, params?: object) => {
    navigation.navigate(screenName, params);
    console.log(typeof navigation);
  };

  /**
   * @description Push to screen
   * @param screenName ScreenNameEnum - screen name to push
   * @param params object | undefined - params to pass to screen
   */
  const push = (screenName: ScreenNameEnum, params?: object) => {
    navigation.push(screenName, params);
  };

  /**
   * @description Go back to previous screen or first screen
   * @param screenName ScreenNameEnum - screen name to push
   * @param params object | undefined - params to pass to screen
   * @example
   * go.back()
   * go.backToFirstScreen()
   */
  const go = {
    back: () => {
      navigation.goBack();
    },
    backToFirstScreen: () => {
      navigation.popToTop();
    },
  };

  return {
    navigateTo,
    push,
    go,
  };
}
