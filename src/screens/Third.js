import React from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';

function Third({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tercer pantalla</Text>
            <Image 
                source={{ uri: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267' }} 
                style={styles.image}
            />
            <Button
                title="Ir a Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Ir a detalles"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 500,
        height: 500,
        marginTop: 20
    }
});

export default Third;
