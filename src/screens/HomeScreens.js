import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir a detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreens;
