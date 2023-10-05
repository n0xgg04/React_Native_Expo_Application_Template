import { ScreenInfo } from "@/@types/interfaces";
import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";

class ApplicationScreenBase {
  private readonly Screens: ScreenInfo[] = [];
  private readonly Options?: {
    firstScreen: ScreenNameEnum;
  };

  constructor({
    options,
    screens = [],
  }: {
    screens?: ScreenInfo[];
    options?: {
      firstScreen: ScreenNameEnum;
    };
  }) {
    this.Screens = screens;
    this.Options = options;
  }

  /**
   * Add screen to application
   * @param screen
   * @returns
   * @memberof ApplicationScreenBase
   * @example
   * ApplicationScreenObject.addScreen({
   *   name: ScreenNameEnum.HOME,
   *   component: HomeScreen,
   *   options: {
   *     headerShown: false,
   *   },
   * }).addScreen({
   *   name: ScreenNameEnum.DASHBOARD,
   *   component: HomeScreen,
   * });
   */
  public addScreen(screen: ScreenInfo): ApplicationScreenBase {
    this.Screens.push(screen);
    return this;
  }

  public get getFirstScreen() {
    return this.Options?.firstScreen;
  }

  public get getScreens() {
    return this.Screens;
  }

  public get getScreenNames() {
    return ScreenNameEnum;
  }
}

export default ApplicationScreenBase;
