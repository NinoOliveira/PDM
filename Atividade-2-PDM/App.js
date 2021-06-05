import React,{ Component } from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, Button, TextInput} from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { firebaseApp, atividade2 } from './Firebase.js';
export default class Atividade extends Component {
	state = {
		nome: "",
		telefone: "",
		contatos[]
	}
	
	componentDidMount() {
		this.listarContatos();
	}
	
	listarContatos =  () => {
		
		var contatosTemp [];
		 atividade2.on("value", (contatos) => {
			 
			 contatos.forEach((contato) => {
				 
				 contatosTemp.push ({
					 key: contato.key,
					 nome: contato.val().nome,
					 telefone: contato.val().telefone
				 });
			 });
			 
			 this.setState({contatos: contatosTemp});
		 });
	}
	
	adicionarContato =  () => {
		
		if(this.state.nome.length > 0 && this.state.telefone.length > 0){
			
			var contato = {
				nome: this.state.nome,
				telefone: this.state.telefone
			};
			
			atividade2.push(contato);
			
			this.setState({ nome: ""});
			this.setState({ telefone: ""});
			
			this.listarContatos();
		}
	}
	excluirContato = (key) => {
		
		atividade2.child(key).remove();
		
		this.listarContatos();
	}
	
	render(){
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.titulo}>Contatos</Text>
				
				<View style=>{styles.itemContainer}>
					<Text style={styles.label}>Digite o nome:</Text>
					<TextInput style{styles.input} placeholder="Nome" value={this.state.nome} onChangeText={(nome) => this.setState({nome: nome})}/>
					
					<Text style={styles.label}>Digite o telefone:</Text>
					<TextInput style{styles.input} placeholder="Telefone" value={this.state.telefone} onChangeText={(telefone) => this.setState({telefone: telefone})}/>
					
					<Button style={styles.botao} title="Salvar" color="#007200" onPress={this.adicionarContato}/>
				</View>
				
				<FlatList style={styles.lista} data={this.state.contatos} renderItem={
					({ item, index }) =>
						<View style=>{styles.itemContainer}>
							<Text style={styles.item}>{item.nome}</Text>
							<Text style={styles.item}>{item.telefone}</Text>
							<Button style={styles.botao} title="Excluir" color="#FF0000" onPress={this.excluirContato}/>
						</View>
				} />
			</SafeAreaView>
		);
	}
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
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


