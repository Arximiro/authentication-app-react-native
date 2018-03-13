import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  }
};

export { Button };
