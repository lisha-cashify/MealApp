// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen.tsx';
import MealsOverview from './screens/MealsOverview.tsx';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#3f2f25' },
            }}
        >
            <Stack.Screen name="Meal Catogaries"
                          options={{
                              title: 'All Categories',
                          }}
                          component={CategoriesScreen} />
            <Stack.Screen name="MealsOverview"
                // options={({ route, navigation }) => {
                //     const catId = route.params.categoryId;
                //   return {
                //     title: catId,
                //   };
                // }}
                          component={MealsOverview} />
        </Stack.Navigator>

    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}
