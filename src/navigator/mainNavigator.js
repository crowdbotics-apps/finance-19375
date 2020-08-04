import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList87439Navigator from '../features/NotificationList87439/navigator';
import Settings87438Navigator from '../features/Settings87438/navigator';
import Settings87430Navigator from '../features/Settings87430/navigator';
import UserProfile87428Navigator from '../features/UserProfile87428/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList87439: { screen: NotificationList87439Navigator },
Settings87438: { screen: Settings87438Navigator },
Settings87430: { screen: Settings87430Navigator },
UserProfile87428: { screen: UserProfile87428Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
