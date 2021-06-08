import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { UserOperations } from '../UserHomeCategory/operations';
import CategoryGridTile from '../Components/CategoryGridTile';


const UserHome = props => {
    const renderGridItem = itemData => {
        console.log(itemData.item.id);
        const GetRouteName = props => {
            if (props.id === 'c1') {
              return 'UserEvent';
            }
            else if (props.id === 'c2') {
                return 'UserShops';
            }
            else if (props.id === 'c3') {
               return 'UserNotification';
            }
            else if (props.id === 'c4') {
                return 'UserRegistration';
            }
            return 'UserHome';
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
      data={UserOperations}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

UserHome.navigationOptions = {
  headerTitle: 'User Home'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default UserHome;
