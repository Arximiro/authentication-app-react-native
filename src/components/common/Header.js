import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'black'
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000', // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowOpacity: .2, // ios
    elevation: 2, // android
    position: 'relative'
  }
}

export { Header };


// the <Text> tag in react-native is JUST for displaying text.
