import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, secure, value, onChangeText }) => {
  const { input, labelStyle, container } = styles;
    
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secure}
        style={input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  input: {
    color: "#000",
    fontSize: 18,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  container: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
