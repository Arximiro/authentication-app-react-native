import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ size }) => {
  const { spinner } = styles;
  return (
    <View style={spinner}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center'
  }
};

export { Spinner };
