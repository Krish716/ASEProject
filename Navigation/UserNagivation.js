import {  createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import UserHome from '../UserScreens/UserHome';
import UserEvent from '../UserScreens/UserEvent';
import UserShops from '../UserScreens/UserShops';
import UserRegistration from '../UserScreens/UserRegistration';
import UserNotification from '../UserScreens/UserNotification';


const UserNavigator = createStackNavigator(
  {
    UserHome: {
      screen: UserHome
    },
    UserEvent: {
      screen: UserEvent
    },
    UserShops: {
      screen: UserShops
    },
    UserRegistration: {
        screen: UserRegistration
    },
    UserNotification: {
        screen: UserNotification
    },
  },
  {
    // initialRouteName: 'Categories',
    
  }
);

export default createAppContainer(UserNavigator);
