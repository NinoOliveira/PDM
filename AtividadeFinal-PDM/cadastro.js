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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Cadastro extends Component {
	state = {
		nome: "",
		valor: "",
		contas:[]
	}
	
	componentDidMount() {
		this.listarContas();
	}
	
	listarContas =  () => {
		
		var contasTemp [];
		 atividadeFinal.on("value", (contas) => {
			 
			 contas.forEach((conta) => {
				 
				 contasTemp.push ({
					 key: conta.key,
					 nome: conta.val().nome,
					 valor: conta.val().valor
				 });
			 });
			 
			 this.setState({contas: contasTemp});
		 });
	}
	
	adicionarConta =  () => {
		
		if(this.state.nome.length > 0 && this.state.valor.length > 0){
			
			var conta = {
				nome: this.state.nome,
				valor: this.state.valor
			};
			
			atividadeFinal.push(conta);
			
			this.setState({ nome: ""});
			this.setState({ valor: ""});
			
			this.listarContas();
		}
	}
	excluirConta = (key) => {
		
		atividadeFinal.child(key).remove();
		
		this.listarContas();
	}
	
	render(){
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.titulo}>Contas</Text>
				
				<View style=>{styles.itemContainer}>
					<Text style={styles.label}>Digite o nome da conta:</Text>
					<TextInput style{styles.input} placeholder="Conta" value={this.state.nome} onChangeText={(nome) => this.setState({nome: nome})}/>
					
					<Text style={styles.label}>Digite o valor:</Text>
					<TextInput style{styles.input} placeholder="Valor" value={this.state.valor} onChangeText={(valor) => this.setState({valor: valor})}/>
					
					<Button style={styles.botao} title="Salvar" color="#007200" onPress={this.adicionarConta}/>
				</View>
				
				<FlatList style={styles.lista} data={this.state.contas} renderItem={
					({ item, index }) =>
						<View style=>{styles.itemContainer}>
							<Text style={styles.item}>{item.nome}</Text>
							<Text style={styles.item}>{item.valor}</Text>
							<Button style={styles.botao} title="Excluir" color="#FF0000" onPress={this.excluirConta}/>
						</View>
				} />
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
	},
	lista: {
		width: "100%"
	},
	item: {
		paddingTop: 2,
		paddingBottom: 2,
		fontSize: 20,
		width: "80%"
		
	},
	itemContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	botao: {
		width: "20%"
	},
	input: {
		height: 40,
		padding: 2,
		borderColor: "#000000",
		borderWidth: 1,
		width: "94.5%"
	},
	label: {
	 marginHorizontal: 10,
	 fontSize: 24,
  }
});

