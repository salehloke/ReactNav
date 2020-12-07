import * as React from 'react';
import {View} from 'react-native';
import { BottomNavigation, Text ,} from 'react-native-paper';
import DraftRoute from './Screens/DraftScreen';
import HomeScreen from './Screens/HomeScreen';
import MyForm from './Screens/FormScreen';

const CustomBtmNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'queue-music' },
    { key: 'draft', title: 'Draft', icon: 'history' },
    { key: 'form', title: 'Form', icon: 'note-text' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    form: MyForm,
    draft: DraftRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default CustomBtmNav;