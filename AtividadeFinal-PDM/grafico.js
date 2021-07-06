/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
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
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Grafico extends Component {
	
	componentDidMount() {
		this.contabilizarContas();
	}
	contabilizarContas =  () => {
		var data[];
		 atividadeFinal.on("value", (contas) => {
			 
			 contas.forEach((conta) => {
				 
				 data = {
					 labels: conta.val().nome,
					 datasets: [
						{
							data: conta.val().valor,
							color: (opacity = 1) => 'rgba(134, 65, 244, ${opacity})', 
							strokeWidth: 2 
						}
					]
				 }
			 });
			 
		 });
		 
		 return data;
	}
	
	
	render(){
		return (
			<SafeAreaView style={styles.container}>
				<LineChart
					data={this.contabilizarContas()}
					width={Dimensions.get("window").width}
					height={220}
					chartConfig={chartConfig}
				/>
				
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F4F4F4",
		padding: 10
	},
	titulo: {
		paddingTop: 2,
		paddingBottom: 2,
		fontSize: 28,
		fontWeight: "bold"
	}
});

