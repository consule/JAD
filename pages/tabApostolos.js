
import React, { Component } from 'react';
import { Container, Header, Content, Accordion } from "native-base"
import { StyleSheet, Image, ScrollView, View, Text, Linking, RefreshControl } from 'react-native';
import { GetDadosApostolos, GetDadosGerais } from './services/ApostolosAPI';

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

export default class TabTwo extends Component {
    componentDidMount() {
        this._getDados();
        this._getDadosGerais();
    }

    state = {
        dados: [],
        dadosGerais: [],
        refreshing: false
    }

    _getDados = async () => {
        GetDadosApostolos().then(res => {
            this.setState({ dados: res });
        })
    }

    _getDadosGerais = async () => {
        GetDadosGerais().then(res => {
            this.setState({ dadosGerais: res });
        })
    }

    onRefresh = async () => {
        this.setState({ refreshing: true });
        await this._getDados();
        await this._getDadosGerais();
        this.setState({ refreshing: false });
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }
            >
                <Image style={styles.slide} source={{ uri: this.state.dadosGerais.imagem }} />
                <Text style={styles.titulo} >{this.state.dadosGerais.titulo} </Text>
                <Content padder>
                    <Accordion
                        dataArray={this.state.dados}
                        headerStyle={{ backgroundColor: "#b7daf8" }}
                        contentStyle={{ backgroundColor: "#ddecf8" }}
                    />
                </Content>
                <Text style={styles.conteudo} >Fonte:
                <Text style={styles.fonte} onPress={() => Linking.openURL(this.state.dadosGerais.linkDaFonte)}> {this.state.dadosGerais.fonte}
                    </Text>
                </Text>
            </ScrollView>
        )
    }
}