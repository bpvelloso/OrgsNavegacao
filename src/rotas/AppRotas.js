import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../telas/Produtores/Home';
import MelhoresProdutores from '../telas/Produtores/MelhoresProdutores';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import CoracaoSVG from '../assets/coracao.svg'
import HomeSVG from '../assets/home.svg'
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function AppRotas() {

    const Tab = createBottomTabNavigator();
    const iconesRotas = {}

    return  <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" 
                    screenOptions={({route})=>({
                            headerShown: false,
                            tabBarInactiveTintColor: '#C7C7C7',
                            tabBarActiveTintColor: '#2A9F85',
                            tabBarIcon: ({focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Home') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                                } else if (route.name === 'Melhores Produtores') {
                                iconName = focused ? 'ios-list' : 'ios-list-outline';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            }
                    })} >
                    <Tab.Screen name="Home" component={ProdutorRotas}   />
                    <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas} />
                </Tab.Navigator>
            </NavigationContainer>
}