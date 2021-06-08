import {  createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AdminHome from '../AdminScreens/AdminHome';
import AdminRequestsPage from '../AdminScreens/AdminRequestsPage';
import AdminRequestAcceptedList from '../AdminScreens/AdminRequestAcceptedList';
import AdminRequestRejectedList from '../AdminScreens/AdminRequestRejectedList';

const AdminNavigator = createStackNavigator(
  {
    AdminHome: {
      screen: AdminHome
    },
    AdminRequestsPage: {
      screen: AdminRequestsPage
    },
    AdminRequestAcceptedList: {
      screen: AdminRequestAcceptedList
    },
    AdminRequestRejectedList: {
        screen: AdminRequestRejectedList
    },
  },
  {
    // initialRouteName: 'Categories',
    
  }
);

export default createAppContainer(AdminNavigator);
