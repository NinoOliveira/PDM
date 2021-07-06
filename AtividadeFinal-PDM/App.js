/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
import Cadastro from "./Cadastro";
import Grafico from "./Grafico";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import {firebaseApp, atividadeFinal} from './firebase.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
export default class AtividadeFinal extends Component {
	render(){
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Cadastro">
					<Stack.Screen name="Cadastro" component={Cadastro} options={({ navigation }) => ({
						headerRight: () => (
							<Button onPress={()=> navigation.navigate("Gráfico")} title="Gráfico"
							color="#000" />
						)
					})}/>
					<Stack.Screen name="Gráfico" component={Grafico}options={({ navigation }) => ({
						headerRight: () => (
							<Button onPress={()=> navigation.navigate("Cadastro")} title="Cadastro"
							color="#000" />
						)
					})}/>
				</Stack.Navigator>
			</NavigationContainer>		
		);
	}
}

