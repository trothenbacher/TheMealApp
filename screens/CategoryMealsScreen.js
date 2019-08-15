import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return(
    <View style={styles.screen}>
        <Text>The Category Meals Screen!</Text>
        <Button title="Go to Details" onPress={() => {
            props.navigation.navigate({routeName: 'MealDetail'});
        }}/>
        <Button title="Go Back" onPress={() => {
            props.navigation.pop();
        }}/>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;