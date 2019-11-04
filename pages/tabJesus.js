
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, View, Text, Linking, RefreshControl } from 'react-native';
import { GetDados } from './services/JesusAPI';
const styles = StyleSheet.create({
    slide: {
        width: '100%', height: 200
    },
    titulo: {
        fontSize: 25, padding: 15, fontWeight: '700', opacity: 0.8
    },
    conteudo: {
        fontSize: 18, padding: 15, opacity: 0.6
    },
    textoEmDestaque: {
        fontWeight: "bold", color: 'red'
    },
    fonte: {
        color: 'blue', fontSize: 20
    }
})


export default class TabThree extends Component {
    componentDidMount() {
        this._getDados();
    }

    state = {
        dados: [],
        refreshing: false
    }
    
    _getDados = async () => {
        GetDados().then(res => {
            this.setState({ dados: res });
        })
    }

    onRefresh = async () => {
        this.setState({ refreshing: true });
        await this._getDados();
        this.setState({ refreshing: false });
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }

            >

                <Image style={styles.slide} source={{ uri: this.state.dados.imagem }} />
                <Text style={styles.titulo} >{this.state.dados.titulo}</Text>
                <Text style={styles.conteudo}>{this.state.dados.conteudo}</Text>
                <Text style={styles.conteudo} >Fonte:
                    <Text style={styles.fonte} onPress={() => Linking.openURL(this.state.dados.linkDaFonte)}> {this.state.dados.fonte} </Text>
                </Text>

            </ScrollView>
        )
    }
}

