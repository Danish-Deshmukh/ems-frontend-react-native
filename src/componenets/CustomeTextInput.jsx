import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomeTextInput = ({value, title, onChangeText, placeholder}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '500'}}>
        {title}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={'gray'}
        value={value}
        onChangeText={txt => onChangeText(txt)}
      />
    </View>
  );
};

export default CustomeTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
