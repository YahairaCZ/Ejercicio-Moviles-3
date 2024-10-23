import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailScreens({ navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles</Text>  
      <Button
        title="Ir a tercer pantalla" 
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

export default DetailScreens;

