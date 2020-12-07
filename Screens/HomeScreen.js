import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';

const HomeScreen = () => {
  const [text, setText] = useState('');
  return (
    <React.Fragment>
      <ScrollView>
      <Text>Draft </Text>
      </ScrollView>
    </React.Fragment>
  );
};


export default HomeScreen;