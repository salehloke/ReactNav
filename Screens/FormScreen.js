import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';

const MyForm = () => {
  const [text, setText] = useState('');
  return (
    <React.Fragment>
      <ScrollView>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </ScrollView>
    </React.Fragment>
  );
};


export default MyForm;