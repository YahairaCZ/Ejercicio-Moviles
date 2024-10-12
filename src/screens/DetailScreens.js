import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailScreens({ navigation, route }) {
  const { screenText, buttonText } = route.params;  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{screenText}</Text>  
      <Button
        title={buttonText}  
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

export default DetailScreens;
