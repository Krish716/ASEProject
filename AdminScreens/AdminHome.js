import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { AdminOperations } from '../AdminHomeCategory/operations'
import CategoryGridTile from '../Components/CategoryGridTile';


const AdminHome = props => {
    const renderGridItem = itemData => {
        console.log(itemData.item.id);
        const GetRouteName = props => {
            if (props.id === 'c1') {
              return 'AdminRequestsPage';
            }
            else if (props.id === 'c2') {
                return 'AdminRequestAcceptedList';
            }
            else if (props.id === 'c3') {
               return 'AdminRequestRejectedList';
            }
            return 'AdminHome';
        }  
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
              props.navigation.navigate({
                
                routeName: GetRouteName(itemData.item),
                params: {
                    UserOperationsCategory: itemData.item.id
                }
              });
            }}
          />
        );
      };
    
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={AdminOperations}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

AdminHome.navigationOptions = {
  headerTitle: 'Admin Home'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AdminHome;
