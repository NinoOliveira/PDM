import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export default class IMC extends Component {

	state = {
		altura: "",
		peso: "",
		imc: "",
		classiificacao: ""
	}
	
	calcular = () => {
		if (this.state.altura == "" || this.state.peso == "") {
			Alert ("Digite dois valores para realizar o cálculo!");
			return;
		}
		var imc = this.state.peso / ((this.state.altura / 100) * (this.state.altura/100));
		
		var classiificacao = "";
		if (imc < 18.5) {
			classiificacao = " Magreza!";
		} else if (imc < 25) {
			classiificacao = "Normal!";
		} else if (imc < 30) {
			classiificacao = "Sobrepeso!";
		} else if (imc < 40) {
			classiificacao = "Obesidade!";
		} else { 
			classiificacao = "Obesidade Grave!";
		}
		
		imc = imc.toFixed(2);
		this.setState({imc});
		this.setState({classiificacao});
		
	}

	
	render(){
		return (
			<SafeAreaView style={styles.container}>
				<View>
					<Text style= {styles.titulo}>IMC</Text>
				</View>
				<View>
				<Text style={styles.label}>Digite sua Altura (em cm):</Text>
				<TextInput placeholder="Digite sua Altura (em cm)" style={styles.input} keyboardType={"numeric"} value={this.state.altura.
				toString()} onChangeText={ (altura) => {this.setState({altura}); } } />
				<Text style={styles.label}>Digite seu Peso (em kg):</Text>
				<TextInput placeholder="Digite seu Peso (em kg)" style={styles.input} keyboardType={"numeric"} value={this.state.peso.
				toString()} onChangeText={ (peso) => {this.setState({peso}); } } />
				</View>
				<View style={styles.divBotao}>
					<Button color="#085d1a" title="Calcular" onPress={this.calcular} />
				</View>
				<View>
				<TextInput placeholder="IMC" style={styles.inputResultado} editable={false} value={this.state.imc.toString()} />
				<TextInput placeholder="Classficação" style={styles.inputResultado} editable={false} value={this.state.classiificacao.toString()} />
				</View>
				
			</SafeAreaView>
			
		);
		
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f4f4f4",
		marginHorizontal: 10
	},
	titulo:	{
		marginTop:30,
		textAlign: "center",
		fontSize: 36,
		color: "#085d1a"
	},
	label: {
		marginHorizontal: 10,
		fontSize: 15,
		fontWeight: "bold"
	},
	input: {
		height: 35,
		borderWidth: 1,
		margin: 10,
		padding: 10,
		backgroundColor: "#fff"
	},
	divBotao: {
		marginTop: 5,
		marginHorizontal: 10	
	},
	inputResultado: {
		marginTop: 5,
		height: 35,
		borderWidth: 1,
		margin: 10,
		padding: 10,
		backgroundColor: "#c7c5c5"
	}
});